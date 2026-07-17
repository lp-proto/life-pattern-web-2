import type { APIRoute } from "astro";

type RuntimeEnv = {
	API_URL?: string;
	RECAPTCHA_SECRET_KEY?: string;
};

const json = (body: unknown, status = 200) =>
	new Response(JSON.stringify(body), {
		status,
		headers: { "Content-Type": "application/json" },
	});

const getEnv = (locals: App.Locals): RuntimeEnv => {
	const runtimeEnv = (locals as { runtime?: { env?: RuntimeEnv } }).runtime?.env;
	return {
		API_URL: runtimeEnv?.API_URL ?? import.meta.env.API_URL,
		RECAPTCHA_SECRET_KEY: runtimeEnv?.RECAPTCHA_SECRET_KEY ?? import.meta.env.RECAPTCHA_SECRET_KEY,
	};
};

const verifyRecaptcha = async (token: string | undefined, secret: string | undefined) => {
	if (!secret) return null;
	if (!token) return { success: false, score: 0 };

	const body = new URLSearchParams({ secret, response: token });
	const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body,
	});

	return response.json() as Promise<{ success: boolean; score?: number; action?: string }>;
};

export const POST: APIRoute = async ({ request, locals }) => {
	const env = getEnv(locals);
	const data = await request.json().catch(() => null);

	if (!data || typeof data !== "object") {
		return json({ success: false, message: "Invalid request body" }, 400);
	}

	const signup = data as Record<string, string>;
	if (!signup.firstName || !signup.lastName || !signup.email || !signup.type) {
		return json({ success: false, message: "Missing required signup fields" }, 400);
	}

	const recaptcha = await verifyRecaptcha(signup.recaptchaToken, env.RECAPTCHA_SECRET_KEY);
	if (recaptcha && (!recaptcha.success || (recaptcha.score ?? 0) < 0.5)) {
		return json({ success: false, message: "Recaptcha failed" }, 400);
	}

	if (!env.API_URL) {
		return json({ success: false, message: "Signup API is not configured" }, 501);
	}

	const response = await fetch(new URL("/v1/signup", env.API_URL), {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ ...signup, score: recaptcha }),
	});

	const body = await response.json().catch(() => null);
	if (!response.ok) {
		return json({ success: false, message: "Signup failed", data: body }, response.status);
	}

	return json({ success: true, data: body });
};

export const ALL: APIRoute = () => json({ message: "Method Not Allowed" }, 405);

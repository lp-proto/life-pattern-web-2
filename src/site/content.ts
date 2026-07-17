export type Feature = {
	title: string;
	description: string;
	image: string;
	imageAlt: string;
	reverse?: boolean;
};

export const howItWorks: Feature[] = [
	{
		title: "Plan your journeys to better health and happiness",
		description:
			"Using specialized Generative AI, LifePattern AI guides you to plan your journey to better health and happiness, by suggesting personalized routines, activities, and resources.",
		image: "/assets/Prioritise pana-2.svg",
		imageAlt: "Plan your journeys to better health and happiness",
	},
	{
		title: "Journal and extract insights",
		description:
			"With patented AI technology, LifePattern AI extracts details from your journal entries about food, activities, mood, symptoms, and more, capturing a panoramic view of your life.",
		image: "/assets/Creative Writing Amico.svg",
		imageAlt: "Extract insights from your journal",
		reverse: true,
	},
	{
		title: "Visualize patterns and identify triggers",
		description:
			"LifePattern AI uses machine learning to identify patterns, trends, and triggers in your journal entries, and visualizes them in easy-to-understand charts and graphs.",
		image: "/assets/Data extraction-bro-nodevice.svg",
		imageAlt: "Visualize your patterns, trends, and identify triggers",
	},
];

export const appFeatures: Feature[] = [
	{
		title: "Your privacy is our top priority.",
		description:
			"Your data is yours. Your data will only be shared with parties you have explicitly chosen. We will never use your data for any purpose other than to provide you with the best possible service.",
		image: "/assets/Privacy Policy Cartoon.svg",
		imageAlt: "LifePattern AI privacy",
	},
	{
		title: "Plan a journey to reach your goal.",
		description:
			"Describe your situation and your goal, and LifePattern AI will help you plan a journey for fitness, mental health, or any personal goal.",
		image: "/assets/Mind map Rafiki.svg",
		imageAlt: "Plan a journey to reach your goal",
		reverse: true,
	},
	{
		title: "Write about your day in your own words.",
		description:
			"Write a journal entry or chat with AI to capture your thoughts, feelings, and experiences. Use audio or text input. LifePattern AI will do the rest.",
		image: "/assets/Amico Style Concept.svg",
		imageAlt: "Write about your day",
	},
	{
		title: "Extract insights from your journal.",
		description:
			"AI interprets your journal entries and extracts details that can be analyzed into a timeline of food, activities, symptoms, emotions, and more.",
		image: "/assets/Data Analysis Chart.svg",
		imageAlt: "Extract insights from your journal",
		reverse: true,
	},
	{
		title: "Searchable records.",
		description:
			"Ask natural language questions about your journal, such as what you ate before symptoms or what body parts you worked out last week.",
		image: "/assets/Documents pana.svg",
		imageAlt: "Searchable records",
	},
	{
		title: "Visualize the patterns in your life.",
		description:
			"Use extracted data to discover how routines, social interactions, exercise, sleep, mood, and symptoms relate over time.",
		image: "/assets/App data Cuate.svg",
		imageAlt: "Visualize patterns",
		reverse: true,
	},
	{
		title: "Get reminders, track and reflect on your progress.",
		description:
			"LifePattern AI can remind you to write a journal entry, take a photo, complete a task, and reflect on progress over time.",
		image: "/assets/Personal Goals Checklist.svg",
		imageAlt: "Track progress",
	},
	{
		title: "Structure your thinking with AI chat.",
		description:
			"AI can help you describe your situation, create thought records, identify feelings and behaviors, and challenge negative thoughts.",
		image: "/assets/Pana Chat Bot.svg",
		imageAlt: "Structured thinking",
		reverse: true,
	},
	{
		title: "And much more...",
		description:
			"LifePattern AI is a work in progress. Feedback from early users helps shape new features and improvements.",
		image: "/assets/Prototyping process Pana.svg",
		imageAlt: "Always improving",
	},
];

export const practitionerFeatures: Feature[] = [
	{
		title: "Help articulate the treatment plan.",
		description:
			"Create patient journeys based on conditions and treatment plans, then customize them to each patient's situation and culture with AI.",
		image: "/assets/Online Doctor Amico.svg",
		imageAlt: "Treatment planning",
	},
	{
		title: "Improve diagnostics through deeper condition understanding.",
		description:
			"Summarize patient journal entries to understand mood, emotions, symptoms, lifestyle patterns, and context between visits.",
		image: "/assets/Online Doctor Amico.svg",
		imageAlt: "Condition understanding",
		reverse: true,
	},
	{
		title: "Get data that was never available before.",
		description:
			"Patients can journal symptoms and conditions when they happen, instead of waiting for the next office visit.",
		image: "/assets/Medicine Bro.svg",
		imageAlt: "Patient data",
	},
	{
		title: "Help patients adhere to treatment plans.",
		description:
			"Support adherence with reminders for medication, exercises, social connection, diet, and other care plan actions.",
		image: "/assets/Medicine Bro.svg",
		imageAlt: "Treatment adherence",
		reverse: true,
	},
	{
		title: "Patient privacy is our priority.",
		description:
			"We use HIPAA compliant Azure services to process data. Data is shared with providers only with patient consent.",
		image: "/assets/Privacy Policy Cartoon.svg",
		imageAlt: "Patient privacy",
	},
];

export const learnTopics = [
  "CPU", "GPU", "RAM", "Storage", "SSD vs HDD", "Operating System", "Battery", "Display", "Cooling", "Ports", "Weight", "Build Quality", "Warranty", "Webcam", "Keyboard"
].map((topic) => ({
  topic,
  what: `${topic} is a key laptop factor that impacts student workflow.`,
  why: `Understanding ${topic} helps you avoid overpaying and match your major requirements.`,
  example: `Example: compare two similar laptops and prioritize the one with better ${topic}.`,
  mistake: `Common mistake: ignoring ${topic} until performance issues appear during semester.`
}));

const names = [
  "Aarav", "Mira", "Kabir", "Ishita", "Rohan",
  "Anaya", "Yash", "Diya", "Aryan", "Sanya"
];

const messages = [
  "Hey! What's up?",
  "Long time no see!",
  "Are you free this weekend?",
  "Let’s catch up soon.",
  "Did you finish the assignment?",
  "Can you help me with this?",
  "Check out this cool link!",
  "That was hilarious 😂",
  "I totally agree with you.",
  "What do you think about this?"
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateRandomEntry() {
  const name = getRandomItem(names);
  const message = getRandomItem(messages);
  return { name, message };
}

// Example usage:
// console.log(generateRandomEntry());

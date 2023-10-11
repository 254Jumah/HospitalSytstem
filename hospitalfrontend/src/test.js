function generateOutput(firstName, secondName, itemQuantity) {
  // Get the initials by taking the first letter of the first name and the second name
  const initials = firstName[0] + secondName[0];

  // Generate the range of items
  const startItem = `${initials}1`;
  const endItem = `${initials}${itemQuantity}`;

  return `${startItem}-${endItem}`;
}

// Example usage:
const firstName = "Mary";
const secondName = "John";
const itemQuantity = 30;

const output = generateOutput(firstName, secondName, itemQuantity);
console.log(output);

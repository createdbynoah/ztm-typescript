// sum things together, return the total
function add(a, b, ...args) {
  let total = a + b;
  for (let n of args) {
    total += n;
  }
  return total;
}

// array of numbers, return the maximum
function max(arr) {
  if (arr.length === 0) {
    return null;
  }
  return arr.reduce((a, b) => Math.max(a, b));
}

// changes text to uppercase or lowercase, returns the result
function setCase(message, kind) {
  if (kind === 'uppercase') {
    return message.toUpperCase();
  } else if (kind === 'lowercase') {
    return message.toLowerCase();
  } else {
    throw new Error("invalid kind: must be 'uppercase' or 'lowercase'");
  }
}

// returns a function that returns a quoted string
function quote(message) {
  return () => {
    return `"${message}"`;
  };
}

module.exports = {
  add,
  max,
  quote,
  setCase,
};

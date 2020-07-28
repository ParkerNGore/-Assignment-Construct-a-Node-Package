const colors = require("colors");

console.log(colors.trap("Hello, World"));
console.log("Hello, World".red);
console.log("Hello, World".red.underline);
console.log("Hello, World".red.underline.inverse);
console.log("Hello, World".red.underline.inverse.trap);

// Fun Fact, everytime you run npm start when using
// .trap the output looks different

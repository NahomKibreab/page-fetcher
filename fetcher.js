const request = require("request");
const fs = require("fs");
const userInput = process.argv.slice(2);

request(userInput[0], (error, response, body) => {
  fs.writeFile(userInput[1], body, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //done!
    const stats = fs.statSync(userInput[1]);
    console.log(`Downloaded and saved ${stats.size} bytes to ${userInput[1]}`);
  });
});

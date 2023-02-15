const net = require("net");
const {connect} = require('./client')

console.log("Connecting ...");
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function () {

    process.stdin.on('data', (key) => {
      // if (key === 'U+2191')
      // process.stdout.write("Move: up");

      // if (key === 'U+2193')
      // process.stdout.write("Move: down");

      // if (key === 'U+2190')
      // process.stdout.write("Move: left");

      // if (key === '\u2192')
      // process.stdout.write("Move: right");

      if (key === '\u0003') {
        process.exit();
      }
    });

    



  };

  //stdin object returned by setupInput will allow us to listen for keyboard input and react to it.
  stdin.on("data", handleUserInput);



  return stdin;
};
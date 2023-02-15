
let connection;

const setupInput = (conn) => {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //stdin object returned by setupInput will allow us to listen for keyboard input and react to it.
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function () {

  process.stdin.on('data', (key) => {
    if (key === '\u0077')
    connection.write("Move: up");

    if (key === '\u0073')
    connection.write("Move: down");

    if (key === '\u0061')
    connection.write("Move: left");

    if (key === '\u0064')
    connection.write("Move: right");

    if (key === '\u0070')
    connection.write("Say: beep beep I'm eatin!");

    if (key === '\u0003') {
      process.exit();
    }
  });
};

module.exports = {
  setupInput
};
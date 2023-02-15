const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  conn.on('connect', () => {
    console.log("Successfully connected to the game server");

    conn.write("Name: RoW");
  });

  //hard code move up actions on connection:

  // conn.on('connect', () => {
  //   conn.write("Move: up");
  // });

  //   conn.on('connect', () => {
  //   setTimeout(() => {
  //     conn.write("Move: up");
  // }, 1000);
  // });

  conn.on('data', (data) => {
    console.log(data);
  });



  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
};
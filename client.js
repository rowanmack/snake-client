const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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
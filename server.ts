import * as net from "net";

const server = net.createServer(socket => {
  const data1 = new Uint8Array([4,2,3,4,5]);
  const data2 = new Uint8Array([3,2,3,4]);

  const msg ="some sthing";
  const msgBuf = Buffer.from(msg);

  const sizeMsg = new Uint8Array([msg.length]);
  const data3 = Buffer.concat([sizeMsg, msgBuf]);

  socket.write(data1);
  socket.write(data2);
  socket.write(data3);
  socket.destroy();
});

server.listen(42069, () => {
  console.log("listening");
});

import * as net from "net";

const client = new net.Socket();

const HOST = "127.0.0.1";
const PORT = 42069;

client.connect(PORT, HOST, function () {
  console.log("client connected");
});

client.on("data", function (data) {
  const msg: Buffer[] = [];
  let ptr = 0;

  do {

    const len = data[ptr++];

    msg.push(data.slice(ptr, ptr+len));
    
    ptr += len;
  } while (ptr < data.length); 

  msg.forEach((m, i) => {
    console.log([i, m.toString()])
  });

});

client.on("end", function () {
  console.log("client ended")
});

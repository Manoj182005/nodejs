import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  //  Write your code here

  if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
    
      fs.appendFileSync("data.txt", body + "\n");

    
      const fileData = fs.readFileSync("data.txt", "utf-8");

      console.log(fileData);

      res.end("POST request received and data stored");
    });
  } else {
    res.end("Only POST requests are accepted");
  }

});

export default server;

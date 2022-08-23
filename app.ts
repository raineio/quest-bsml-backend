import express from "express";
import { setupRoutes } from "./routes/router";

async function main() {

  const app = express();

  setupRoutes(app);

  app.use(express.json());
  app.use(express.static("public"));

  app.listen(3001, () => {
    console.log("Server listening on port 3001 | http://localhost:3001");
  })
}

main();

import express from "express";
import { setupRoutes } from "./routes/router";

async function main() {

  const app = express();

  setupRoutes(app);

  app.use(express.json());
  app.use(express.static("public"));
}

main();

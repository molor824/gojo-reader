import express from "express";
import ViteExpress from "vite-express";
import jishoHandler from "../../api/jisho";

const app = express();

app.get("/api/jisho", jishoHandler);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);

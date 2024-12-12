import express from "express";
import ViteExpress from "vite-express";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, "../dist");

const PORT = 3000;

const app = express();
const cache = {};

app.get("/api/jisho", (req, res) => {
  const word = req.query.word;

  console.log(word);
  if (word in cache) res.status(200).json(cache[word]);
  else
    fetch(`https://jisho.org/api/v1/search/words?keyword=${word}`)
      .then((res) =>
        (res.status === 200
          ? res.json()
          : Promise.reject(new Error(res.statusText))
        ).then((res) => res.data[0])
      )
      .then((r) => {
        cache[word] = r;
        res.status(200).json(r);
      })
      .catch(() => res.sendStatus(500));
});

ViteExpress.listen(app, PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);

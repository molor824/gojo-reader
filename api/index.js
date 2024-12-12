import express from "express";
import ViteExpress from "vite-express";

const PORT = 3000;

const app = express();

app.get("/jisho", (req, res) => {
  const word = req.query.word;

  console.log(word);
  fetch(`https://jisho.org/api/v1/search/words?keyword=${word}`)
    .then((res) =>
      (res.status === 200
        ? res.json()
        : Promise.reject(new Error(res.statusText))
      ).then((res) => res.data[0])
    )
    .then((r) => res.status(200).json(r))
    .catch(() => res.sendStatus(500));
});

ViteExpress.listen(app, PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
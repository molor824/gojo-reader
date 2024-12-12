const cache = {};

export default function handler(req, res) {
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
}

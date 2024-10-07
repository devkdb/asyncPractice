export async function khm(param) {
  const arr = [];
  for (let i = 0; i < 100; i++) arr.push(i);
  const promise = arr.map((v) => {
    return new Promise((res, rej) => {
      res(() => {
        for (let i = 0; i < 100; i++) {
          setInterval(() => {
            param();
          }, 150);
        }
      });
    });
  });
}

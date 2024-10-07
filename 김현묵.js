export function khm(param) {
  const arr = [];
  let a, b, c, d;
  for (let i = 0; i < 100; i++) arr.push(i);
  for (a of arr) for (b of arr) for (c of arr) for (d of arr) param();
}

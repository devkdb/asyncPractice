export async function 이현우(increment) {
  return await setInterval(() => {
    for(let i=0; i<100; i++) {
      increment();
    }
  },150);
}

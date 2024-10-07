export async function 이현우(increment) {
  const MAX_CNT = 2000000;

  async function call() {
    return await new Promise((task) => {
      setTimeout(() => {
        increment();
        task();
      }, 150);
    });
  }

  const task = Array.from({ length: MAX_CNT }, call);
  await Promise.all(task);
}


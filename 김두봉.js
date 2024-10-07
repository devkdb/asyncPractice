export async function dooBong(increment) {

  const promises = [];

  for(let k=0; k<100; k++)
    promises.push(  
    setInterval(() => {
      for(let i=0; i<100; i++) {
        increment();
      }
    },150) 
  );
  
  await Promise.all(promises);
}
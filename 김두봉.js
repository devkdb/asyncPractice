export function dooBong(increment) {

  return setInterval(() => {
  //console.log("김두봉");
  for(let i=0; i<100; i++)
    for(let j=0; j<100; j++)
      for(let k=0; k<100; k++)
      increment();

  // 첫번째 파라미터로 콜백함수 파라미터를 받아서,
  // 내 이름이 출력 될 때마다 실행시켜야 한다.
  }, 150);
}
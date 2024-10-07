export function dooBong(increment) {

  return setInterval(() => {
  //console.log("김두봉");
  increment();
  // 첫번째 파라미터로 콜백함수 파라미터를 받아서,
  // 내 이름이 출력 될 때마다 실행시켜야 한다.
  }, 100);
}
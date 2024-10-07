export function yeji(increment){
    return setInterval(()=>{
        for(let i=0; i<100; i++){
            increment();
        };
        for(let i=0; i<100; i++){
            increment();
        }
        for(let i=0; i<100; i++){
            increment();
        }
        for(let i=0; i<100; i++){
            increment();
        }
    }, 150);
}


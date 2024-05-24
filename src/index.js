// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
10,11,12


// let n =10;
function counter(n){
// let number = n
    return function innercount(){
        console.log(n)
       n++
    }
}

let calls = counter(10)
calls()
calls()
calls()

const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, "one");
  });
   
  const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, "two");
  });
   
  Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));
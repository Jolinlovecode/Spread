let arr = [{a:1, b:2},{c:3, d:4}];
let ob = {e:5, f:6}

//add ob into array
// solution 1:
arr.push(ob);
console.log(arr);

// solution 2:
console.log([...arr,ob]);



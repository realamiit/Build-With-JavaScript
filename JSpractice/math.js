// chunk means: => Break a big array into smaller arrays (groups)
// For example, if we have an array of 10 elements and we want to break it into groups of 2, we will get 5 groups of 2 elements each.
// arr = [1,2,3,4,5,6]
// size = 2
// After chunking, we will get: [[1,2], [3,4], [5,6]]
// 

// console.log(abc.shuffle(arr));

// console.log(abc.sample(arr));

function chunk(arr, size) {
    let res = [];
    
    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size));
    }

    return res;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(chunk(arr, 2));
/////////////////////////////////////////////////////////   1  M   ////////////////
/////////////////////////////////////////////////////////   2  M   ////////////////

// function masala_2() {

//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     let arr1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
//     let arr2 = arr.concat(arr1);
//     let arr3 = []


//     arr2.forEach(element => {
//         if (element % 2 === 0) {
//             arr3.push(element)
//         }
//     });
//     // console.log(arr3)
//     return arr3.reduce((n, m) => n+m, 0);

// }

// console.log(masala_2());

/////////////////////////////////////////////////////////   3  M   ////////////////

// function findMostFrequent(arr) {
//     let frequency = {};
//     let maxCount = 0;
//     let mostFrequent;

//     for (let num of arr) {
//         frequency[num] = (frequency[num] || 0) + 1;
//         if (frequency[num] > maxCount) {
//             maxCount = frequency[num];
//             mostFrequent = num;
//         }
//     }
//     return mostFrequent;
// }

// console.log(findMostFrequent([1, 3, 2, 3, 4, 3, 5, 2, 2]));



/////////////////////////////////////////////////////////   4  M   ////////////////

// function masala_4() {

//     let arr = [1, 2, 3, 4, 8, 9, 10];
//     let arr1 = [10, 9, 8, 7, 6, 5]
//     let arr2 = []

//     arr.forEach(element => {
//         if (arr1.includes(element)) {
//             arr2.push(element)
//         }
//     });

//     return arr2;
// }

// console.log(masala_4());

/////////////////////////////////////////////////////////   5  M   ////////////////

// function calculatePercentages() {
//     let arr = [1, -2, 0, 4, -5, 6, 0];
//     let foiz = 100 / arr.length;
//     console.log(foiz)
//     let musbat = 0;
//     let manfiy = 0;
//     let noll = 0;
//     arr.forEach(element => {
//         if (element > 0) {
//             musbat++
//         } else if (element < 0) {
//             manfiy++;
//         } else {
//             noll++
//         }
//     });

//     console.log("arr elementlar soni: ", arr.length);
//     console.log("musbat sonlar:", musbat, "musbat sonlar fozi: ",  musbat * foiz);
//     console.log("manfiy sonlar: ", manfiy,"manfiy sonlar fozi: ",  manfiy * foiz);
//     console.log("noll sonlar fozi: ", noll, "noll sonlar fozi: ", noll * foiz);

// }

// console.log(calculatePercentages());

// /////////////////////////////////////////////////////////   6  M   ////////////////

// function findLongestName(names) {
//     return names.reduce((longest, current) => current.length > longest.length ? current : longest, "");
// }

// console.log(findLongestName(["Ali", "Bekzod", "Madina", "Dilshod"])); 



// /////////////////////////////////////////////////////////   7  M   ////////////////

// function rotateArray(arr, k) {
//     k = k % arr.length; 
//     return arr.slice(-k).concat(arr.slice(0, -k));
// }

// console.log(rotateArray([1, 2, 3, 4, 5], 2)); 



// /////////////////////////////////////////////////////////   8  M   ////////////////

// function swapElements(arr, k) {
//     if (k >= 0 && k < arr.length) {
//         let lastIndex = arr.length - 1;
//         [arr[k], arr[lastIndex]] = [arr[lastIndex], arr[k]];
//     }
//     return arr;
// }

// console.log(swapElements([1, 2, 3, 4, 5], 2)); 
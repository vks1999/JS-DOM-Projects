// function reverseOrderArray(arr) {
//   console.log("Elements in reverse order is : ");
//   for (var i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }

// reverseOrderArray([3, 8, 64, 59, 23, 0]);



// Array2=[32,37,457,4356,58,8,7];
// Len=Array2.length;
// console.log(Len);

function maxValue(arr){
  var max=arr[0];
  for (var i=0;i<=arr.length-1;i++){
    if(arr[i]>=max){
      max=arr[i];
    }
  }
  return max;
}


let result=maxValue([7,56,28,58]);
console.log(result);
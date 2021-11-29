var i,j;
var arr1 = [
 [1, 1, 1],
 [1, 1, 1],
 [1, 1, 1]
];
var arr2 = [
 [2, 2, 2],
 [2, 2, 2],
 [2, 2, 2]
];
var arr3 = [
 [0, 0, 0],
 [0, 0, 0],
 [0, 0, 0],
];

console.log("Matrix A (3 x 3):");
for(i=0; i<3; i++)
{
 for(j=0; j<3; j++)
  console.log(arr1[i][j] +" ");
 console.log("<br>");
}

console.log("Matrix B (3 x 3):");
for(i=0; i<3; i++)
{
 for(j=0; j<3; j++)
  console.log(arr2[i][j] +" ");
 console.log("<br>");
}

console.log("Sum of Matrix:");
for(i=0; i<3; i++)
{
 for(j=0; j<3; j++)
 {
  arr3[i][j] = arr1[i][j] + arr2[i][j];
  console.log(arr3[i][j] +" ");
 }
 console.log(" ");
}

const array = [1,2,3,4,5,6,7,8,9,10]

const sumOfSquresOfevenNumsInTheArray = array.filter(num => num%2==0).map(num => num*num).reduce((num,total) =>total+num);

console.log(sumOfSquresOfevenNumsInTheArray);

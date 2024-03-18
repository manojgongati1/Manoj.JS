var arr = [2, 5, 7, 8, 6, 4, 10, 30, 0, -1, 11];//incr decre incre decre incre
function aboutArray(array){
  var string="the array:";
  for (var i =0; i<array.length-1; i++){
    if(array[i]<array[i+1]){
      if(string.slice(string.length-10)!="increasing"){
        console.log("increasing after:"+array[i]+" "+string.slice(string.length-10)+" stringleangth:"+string.length)
        string+=" increasing";}}
    if(array[i]>array[i+1]){
      if(string.slice(string.length-10)!="decreasing"){
        console.log("decreasing after:"+array[i]+" "+string.slice(string.length-10)+" stringleangth:"+string.length)
        string+=" decreasing";}}
  }
  return string;
}
console.log(aboutArray(arr));

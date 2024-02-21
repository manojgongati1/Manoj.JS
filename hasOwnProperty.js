var obj = {colour:"blue", height:"100", "win gs":"powerfull"};
function checkprop(prop){
  if (obj.hasOwnProperty(prop)){
    return obj[prop]
  }else{
    return "nope"
  }
}
console.log(checkprop("win gs"))

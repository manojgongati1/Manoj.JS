function makeClass(){
  class Champion{
    constructor(name){
      this.name = name;
    }
  }
  return Champion;
}
const x = makeClass();
console.log(x)
var champ = new x("Blair")
console.log(champ)


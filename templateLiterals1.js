const lolChampions = {
  "Aatrox": ["Fighter", "Top", "Bruiser"],
  "Ahri": ["Mage", "Mid", "Assassin"],
  "Akali": ["Assassin", "Mid", "Top"],
  "Alistar": ["Tank", "Support", "Engage"],
  "Amumu": ["Tank", "Jungle", "Initiator"],
};

function theFunction(array){
  const newArray = []
  for (var i =0; i<array.length; i++){
    newArray.push(`<li class="text-warning">${array[i]}</li>`)
  };
  return newArray; 
}
const output = theFunction(lolChampions.Aatrox);
console.log(output);

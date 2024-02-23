const champions = [
  {
    "name": "Garen",
    "weapon": "Greatsword",
    "location": "Demacia",
    "power": "Strength and Courage"
  },
  {
    "name": "Ahri",
    "weapon": "Fox Magic",
    "location": "Ionia",
    "power": "Charm and Spirit Orbs"
  },
  {
    "name": "Ashe",
    "weapon": "Ice Bow",
    "location": "Freljord",
    "power": "Ice Arrows and Leadership"
  },
  {
    "name": "Zed",
    "weapon": "Shadow Techniques",
    "location": "Ionia",
    "power": "Shadow Magic and Assassination"
  },
  {
    "name": "Miss Fortune",
    "weapon": "Dual Pistols",
    "location": "Bilgewater",
    "power": "Gunplay and Strategic Wit"
  }
];

function lookup(champ, prop){
  for (var i=0; i < champions.length; i++){
    if (champions[i].name==champ){
      return champions[i][prop] || "What are you asking?"
    }
  }
}
console.log(lookup("Zed", "kills"));

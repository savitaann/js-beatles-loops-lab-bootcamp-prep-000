function theBeatlesPlay(musicians, instruments){
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
    var phrases = [];
    for (var i = 0; i < musicians.length; i++) {
      phrases.push(musicians[i] + " plays " + instruments[i]);
   }
   return phrases;
}


function johnLennonFacts(){
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];

   var newFacts = [];
   var i = 0
   while (i < facts.length) {
     newFacts.push(facts[i] + "!!!");
     i++;
   }
   return newFacts;
 }

 function iLoveTheBeatles(num) {
   var phrases = [];
   do {
     phrases.push("I love the Beatles!");
     num++
   } while (num < 15);
   return phrases;
}

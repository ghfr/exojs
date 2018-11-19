var arr = [1, 2, 3];
var max = Math.max(...arr);


console.log(Math.max(...arr));

var vowels = "Banane au chocolat"

function countVowels(texte) {
    return texte.match(/[aeiou]/gi).length;
}



console.log(countVowels (vowels));


var inverse = "hola my friend"


function reverse(str){
  return [...str].reverse().join('');
}

console.log(reverse(inverse))
/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(S) {
	let map = {};

	for (let char of S) map[char] = map[char] + 1 || 1;

	let max = 0;
	let maxLetter;

  for (let key in map) {
    if (map[key] > max) {
      max = map[key]; //Max occurence of char
      maxLetter = key; //Max char
    }
  }
  
  if (max > (S.length + 1) / 2) return ""; 

  let res = new Array(S.length);

  let index = 0;

//Embed maxLetter into res
  while (map[maxLetter] > 0) {
    res[index] = maxLetter;
    index += 2;
    map[maxLetter]--;
  }
   
  //Embed rest of characters into res
  for (let key in map) {
    while (map[key] > 0) {
      if (index >= res.length) index = 1;
      res[index] = key;
      index += 2;
      map[key]--
    }
  }

return res.join('');

};
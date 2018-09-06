function fizzbuzz() {
  for (let index = 0; index <= 100; index++) {
    console.log(index);
    if (index % 5 === 0 && index % 3 === 0) console.log('fizzbizz');
    if (index % 3 === 0) console.log('fizz');
    if (index % 5 === 0) console.log('bizz');
  }
}
//fizzbuzz();

function disemvowel(str: string): string {
  let newString: string = '';
  let char: string[] = str.split('');
  char.forEach(c => {
    console.log(c);
    c = c.toLowerCase();
    if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
      console.log('vowel found');
    } else {
      newString += c;
    }
  });
  return newString;

  // function disemvowel(str) {
  //     var vowels = ['a', 'e', 'i', 'o', 'u'];

  //     return str.split('').filter(function(el) {
  //       return vowels.indexOf(el.toLowerCase()) == -1;
  //     }).join('');
  //   }

  //   function disemvowel(str) {
  //     return str.replace(/[aeiou]/gi, '');
  //   }
}
//console.log(disemvowel('This website is for losers LOL!'));

function friend(friends: string[]): string[] {
  let newFriends: string[] = [];
  friends.forEach(f => {
    if (f.length === 4) {
      newFriends.push(f);
    }
  });
  return newFriends;
  // function friend(friends){
  //   return friends.filter(n => n.length === 4)
  // }
}
console.log(friend(['Ryan', 'Kieran', 'Mark']));

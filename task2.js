var name = "Alex Mihir Pandayan";
var nameParts = name.split(' ');

var lastName = nameParts.pop();
var firstName = nameParts.join(' ');

var middleInitial = '';
if (nameParts.length > 0) {
  middleInitial = nameParts.map(function (word) {
    return word.charAt(0);
  }).join('. ') + '.';
}

var formattedName = lastName + ', ' + firstName + ' ' + middleInitial;

console.log(formattedName);


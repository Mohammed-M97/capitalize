let x = "How can mirrors be real if our eyes aren't real"

let z = x.split(' ')
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

let final = []
for (let i = 0; i < z.length; i++) {
    final.push(capitalize(z[i])) 
}

console.log(final.join(' '));

///

let words = this.split(' ');

for(let i = 0; i < words.length; i++) {
   words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

return words.join(' ');
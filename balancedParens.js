// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

const balancedParens = (str) => {
let openParens = 0
let closingParens = 0
for(let i = 0; i < str.length; i++)
if (str[i] == "("){
    openParens += 1
} else if (str[i] == ")") {
    closingParens += 1
}
return openParens === closingParens
}
console.log(balancedParens(sample4));
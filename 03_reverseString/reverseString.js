const reverseString = function(string) {
    let length = string.length;
    let reversed ="";
    for (i=0;i<length;i++) {
        reversed += string.at(-1-i);
        
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;

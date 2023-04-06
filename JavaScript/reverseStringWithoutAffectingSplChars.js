function reverseString(S) {
    let specialChars = "";
    let _string = "";

    for (let i = 0; i < S.length; i++) {
        if (!isAlpha(S[i])) {
            specialChars += S[i];
        } else {
            _string += S[i];
        }
    }

    _string = _string.split('').reverse().join('');

    let reversedString = "";
    let j = 0;
    let k = 0
    for (let i = 0; i < S.length; i++) {
        if (!isAlpha(S[i])) {
            reversedString += specialChars[j];
            j++;
        } else {

            reversedString += _string[k];
            k++
        }
    }

    return reversedString;
}

function isAlpha(char) {
    return /^[a-zA-Z]$/.test(char);
}

console.log(reverseString('a@bc!d'))
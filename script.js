function rot13(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let s = str[i].charCodeAt();
        if (s > 77) s -= 26;
        s += 13;
        if (str[i].match(/[A-Z]/)) {
            result += String.fromCharCode(s);
        } else {
            result += str[i];
        }
    }

    return result;
}
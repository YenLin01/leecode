function CaesarSipher(str, key, encrypt) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) == 32) {
      result += " ";
    } else {
      let temp = str.charCodeAt(i) - 65;
      let cipherIndex;
      if (encrypt == "encrypt") {
        cipherIndex = (temp + key) % 26;
      } else if (encrypt == "decrypt") {
        cipherIndex = (temp - key) % 26;
      }

      if (cipherIndex < 0) {
        cipherIndex += 26;
        // if cipherIndex less then 26 may cost % to get wrong num.
      }
      result += String.fromCharCode(cipherIndex + 65);
    }
  }
  console.log(result);
  return result;
}

CaesarSipher(CaesarSipher("AVKHF PZ H NVVK KHF", 7, "decrypt"), 7, "encrypt");
console.log("---------------------");
for (let j = 1; j <= 25; j++) {
  CaesarSipher("AVKHF PZ H NVVK KHF", j, "decrypt");
}

// charCodeAt() => input is a caracter, returns the ascii value of the input 文字 return 數字
// fromCharCode() => input is a integer, return the charater of the input 數字 return 文字

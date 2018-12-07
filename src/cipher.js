window.cipher = {
  encode: (inputText, offset) => {
    let resultEncode = "";
    let backToAlphabetEncode;
    let backToAlphabetEncodeMin;
    let numberToCipher;
    for (let i = 0; i < inputText.length; i++) {
      let asciiEncode = inputText[i].charCodeAt();
      if (asciiEncode === 32) {
        resultEncode += String.fromCharCode(asciiEncode)
      }
      if (asciiEncode >= 97 && asciiEncode <= 122) {
        backToAlphabetEncodeMin = (asciiEncode-97 + parseInt(offset))
        while (backToAlphabetEncodeMin < 0 ) {
          backToAlphabetEncodeMin = (backToAlphabetEncodeMin + 26)
        }
        let formulaEncodeMin = ((backToAlphabetEncodeMin) % 26 + 97) - 32;
        resultEncode += String.fromCharCode(formulaEncodeMin)
      } 
      if (asciiEncode >= 65 && asciiEncode <= 90) {
        backToAlphabetEncode = (asciiEncode-65 +parseInt(offset))
        while (backToAlphabetEncode < 0){
          backToAlphabetEncode = (asciiEncode - 65 + parseInt(offset))
        }
        let formulaEncode = (backToAlphabetEncode) % 26 + 65;
        resultEncode += String.fromCharCode(formulaEncode);
      }
      if (asciiEncode >= 48 && asciiEncode <=57){
        numberToCipher= (asciiEncode-48+parseInt(offset))
        while (numberToCipher < 0) {
          numberToCipher = (numberToCipher + 10)
        } 
        let formulaEncodeNumber= (numberToCipher)%10 +48;
        resultEncode += String.fromCharCode(formulaEncodeNumber)
      }
       if (asciiEncode <= 96 && asciiEncode >= 91) {
         resultEncode += inputText[i]
       }
      if(asciiEncode >=33 && asciiEncode <=47){
        resultEncode += inputText[i]
      }
      if(asciiEncode >=58 && asciiEncode <=64){
        resultEncode += inputText[i]
      }
      if (asciiEncode >=123 && asciiEncode <=126){
       resultEncode +=inputText[i]
      }
    }
    return resultEncode
  },

  decode: (inputTextDescipher, offsetDescipher) => {
    let resultDecode = "";
    let backToAlphabetDecode;
    let backToAlphabetDecodeMin;
    let numberToDecipher;
    for (let i = 0; i < inputTextDescipher.length; i++) {
      let asciiDecode =inputTextDescipher[i].charCodeAt();
      if (asciiDecode === 32) {
        resultDecode += String.fromCharCode(asciiDecode)
      }
      if (asciiDecode >= 97 && asciiDecode <= 122) {
        backToAlphabetDecodeMin = (asciiDecode - 97- parseInt(offsetDescipher))
      while (backToAlphabetDecodeMin < 0) {
        backToAlphabetDecodeMin = (backToAlphabetDecodeMin + 26)
      }  
        let formulaDecodeMin = ((backToAlphabetDecodeMin)%26 + 97) - 32;
        resultDecode += String.fromCharCode(formulaDecodeMin)
      } 
      if (asciiDecode >= 65 && asciiDecode <= 90) {
        backToAlphabetDecode = (asciiDecode - 65 - parseInt(offsetDescipher))
        while(backToAlphabetDecode < 0){
        backToAlphabetDecode = (backToAlphabetDecode + 26)
        }
        let formulaDecode = (backToAlphabetDecode) % 26 + 65;
        resultDecode += String.fromCharCode(formulaDecode);
      }
        if (asciiDecode >= 48 && asciiDecode <=57){
          numberToDecipher= (asciiDecode-48-parseInt(offsetDescipher))
          while (numberToDecipher < 0) {
            numberToDecipher = (numberToDecipher + 10)
          } 
          let formulaDecodeNumber= (numberToDecipher)%10 +48;
          resultDecode += String.fromCharCode(formulaDecodeNumber)
        }
      if (asciiDecode <=96 && asciiDecode >= 91) {
        resultDecode += inputTextDescipher[i]
      }
      if(asciiDecode >=33 && asciiDecode <=47 ){
        resultDecode += inputTextDescipher[i]
      }
      if(asciiDecode >=58 && asciiDecode <=64){
        resultDecode += inputTextDescipher[i]
      }
      if(asciiDecode >=123 && asciiDecode <=126){
        resultDecode +=inputTextDescipher[i]
      }
    }
    return resultDecode
  }
};

document.getElementById('cipher').addEventListener('click', (evento) => {
   evento.preventDefault();
   let inputText = document.getElementById('inputText').value;
   let offset = parseInt(document.getElementById('offset').value);
   document.getElementById("newText").innerHTML = window.cipher.encode(inputText, offset);
})

document.getElementById("desCipher").addEventListener("click", (evento) => {
   evento.preventDefault()
   let inputTextDescipher = document.getElementById('inputText').value;
   let offsetDescipher = parseInt(document.getElementById('offset').value);
   document.getElementById("newText").innerHTML = window.cipher.decode(inputTextDescipher, offsetDescipher);
})

  
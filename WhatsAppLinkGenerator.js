function generateQR() {
  var number = document.getElementById("number").value;
  var text = document.getElementById("text").value;

  if(number.length != 11) {
      alert("O número deve contar DDD seguido de 9 dígitos'");
      return;
  }

  var whatsappUrl = `https://wa.me/+55${number}?text=${text}`;

  // Clear the QR code div
  var qrcodeDiv = document.getElementById("qrcode");
  qrcodeDiv.innerHTML = "";

  var qrcode = new QRCode(qrcodeDiv, {
      text: whatsappUrl,
      width: 196,
      height: 196
  });

  document.getElementById("number").value = "";
  document.getElementById("text").value = "";
}
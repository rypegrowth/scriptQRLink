window.onload = function() {
document.getElementById('contatoEmpresa').addEventListener('submit', function(event) {
  event.preventDefault();

  var formData = new FormData(this);

  fetch('https://script.google.com/macros/s/AKfycbzjU_QUoGYcWLfJmvY75ZXcJBwp4SE83K4dMEJOh19_AEYwzX4WKWK-VGCz8PihXLpNKQ/exec', {
    method: 'POST',
    body: formData
  })
  generateQR()
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    generateQR();
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  })
});
};




function generateQR() {
    var number = document.getElementById("number").value;
    var message = document.getElementById("message").value;
    var empresa = document.getElementById("company").value

    if(number.length != 11) {
      alert("O número deve conter DDD seguido de 9 dígitos");
      return;
    }

    var whatsappUrl = `https://wa.me/+55${number}?text=${message}`;

    // Clear the QR code div
    var qrcodeDiv = document.getElementById("qrcode");
    qrcodeDiv.innerHTML = "";

    var qrcode = new QRCode(qrcodeDiv, {
      text: whatsappUrl,
      width: 196,
      height: 196
    });

    // Mostrar dialogbox
    window.location.href = "#dialog";

    document.getElementById("number").value = "";
    document.getElementById("message").value = "";
    document.getElementById("email").value = "";
    document.getElementById("company").value = "";

    return

}

function closeDialog(event) {
    if (event.target.id === "dialog") {
      window.location.href = "#!";
}}
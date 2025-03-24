$(document).ready(function () {
     $('.generate').on('click', function (e) {
          e.preventDefault();
          var inputtedValue = $('#inputted-val').val().trim();  // Trim extra spaces
          if (inputtedValue) {
               $('.qrcode').empty();
               const qrcode = new QRCode(document.createElement('div'), {
                    text: `${inputtedValue}`,
                    width: 350,
                    height: 350,
                    colorDark: '#000',
                    colorLight: '#fff',
                    correctLevel: QRCode.CorrectLevel.H
               });

               qrcode._el.removeAttribute('title');
               $('.qrcode').append(qrcode._el);

               $('.download').show();
               var qrCanvas = qrcode._el.querySelector('canvas');

               $('.download').on('click', function () {
                    var imgData = qrCanvas.toDataURL('image/png');
                    var link = document.createElement('a');
                    link.href = imgData;
                    link.download = 'qr-code.png';
                    link.click();
               });
          } else {
               Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Please enter something to generate a QR code.",
                    confirmButtonText: "OK",
                    allowOutsideClick: false,
               });
          }
     });
});
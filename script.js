function generateQRCode() {
    var text = document.getElementById("text").value;
    if (text) {
        document.getElementById("qrcode").innerHTML = "";
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: text,
            width: 128,
            height: 128,
        });
    } else {
        alert("Please enter a text or URL");
    }
}

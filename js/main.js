console.log("JS file connected");



const imgSvg = document.querySelectorAll('#Cherry, #Peach');

    function logId() {
        console.log(`The ID of this element is: ${this.id}`);
    }

    imgSvg.forEach(function(imgSvg) {
        imgSvg.addEventListener("click", logId);
    });

const inlineSvg = document .querySelector("#Lemon");

    function logInlineSvgId() {
        console.log(`The ID of this element is: ${this.id}`);
    }
    
    inlineSvg.addEventListener("click", logInlineSvgId);
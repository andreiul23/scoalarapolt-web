let valueDisplays = document.querySelectorAll(".num");
let interval = 1000; 

function startCountingWhenVisible() {
    valueDisplays.forEach((valueDisplay)=>{
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-target"));
        let duration = Math.floor(interval/endValue);
        let counter = setInterval (function() {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if(startValue == endValue){
                clearInterval(counter);
            };
        }, duration);
    });
}

let isCountingStarted = false;

window.addEventListener('scroll', function() {
    if (!isCountingStarted && isElementInViewport(valueDisplays[0])) {
        startCountingWhenVisible();
        isCountingStarted = true;
    }
});

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

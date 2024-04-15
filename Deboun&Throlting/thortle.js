//create throttle () polyfill implementation

const btn = document.querySelector(".inc_btn");
const btnPress = document.querySelector(".inc_pressed");
const count = document.querySelector(".inc_count");

var pressedcount = 0;
var triggerCount = 0;

const start = new Date().getTime();

//creatingthrottle method.
const myThrottle = (cb, d) => {
  let last = 0;

  return (...args) => {
    let now = new Date().getTime(); //present time
    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
};

var throttle = myThrottle(() => {
  triggerCount += 1;
  count.innerHTML = triggerCount;
}, 1000);

btn.addEventListener("click", () => {
  btnPress.innerHTML = pressedcount++;
  const now = new Date().getTime();
  const seconds = (now - start) / 1000;
  console.log(seconds.toFixed());
  throttle();
});

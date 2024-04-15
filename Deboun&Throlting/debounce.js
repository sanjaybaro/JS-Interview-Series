/* 
Q 1.
create a button UI and add debounce as follows=>
 -->Show "Button pressed <x> Times" every time button is pressed
 -->Increase "Triggered <y> Times" count after 800ms of debounce
--> Create Debounce() polyfill implementation.
*/

const btn = document.querySelector(".inc_btn");
const btnPress = document.querySelector(".inc_pressed");
const count = document.querySelector(".inc_count");

var pressedcount = 0;
var triggerCount = 0;

//creatingdebounce method.
const myDebounce = (cb, d) => {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

const debouncedCount = myDebounce(() => {
  triggerCount += 1;
  count.innerHTML = triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedcount;
  debouncedCount();
});

//lodash debounce library // import cdn lodash to use debounce and throtling.

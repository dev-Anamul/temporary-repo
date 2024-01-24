const input = document.getElementById("text-input");
const dflt = document.getElementById("default");
const debounce = document.getElementById("debounce");

input.addEventListener("input", (e) => {
  dflt.textContent = e.target.value;
});

input.addEventListener(
  "input",
  debounceFn((e) => {
    debounce.textContent = e.target.value;
  }, 500)
);

function debounceFn(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

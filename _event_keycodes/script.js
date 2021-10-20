const insert = document.getElementById('insert')
const key = document.querySelector('.key')

window.addEventListener("keydown", function(event) {
    const p = document.createElement("p");
    key.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
    insert.appendChild(key);
  }, true);

  window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
    <div class="key">
    ${event.key === ' ' ? 'Space' : event.key} 
    <small>event.key</small>
  </div>
  <div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
  </div>
  <div class="key">
    ${event.code}
    <small>event.code</small>
  </div>
    `
  })
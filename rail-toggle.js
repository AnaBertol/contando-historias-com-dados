(function (global) {
  if (global.__kunumiRailToggleInit) return;
  global.__kunumiRailToggleInit = true;

  var STORAGE_KEY = 'deck-stage.railVisible';

  function isRailHidden() {
    try { return localStorage.getItem(STORAGE_KEY) === '0'; } catch (e) { return false; }
  }

  function render(btn) {
    btn.textContent = isRailHidden() ? '▤ Mostrar slides' : '⛶ Tela cheia';
  }

  function wire(attempts) {
    var btn = document.getElementById('rail-toggle-btn');
    if (!btn) {
      if (attempts > 0) setTimeout(function () { wire(attempts - 1); }, 200);
      return;
    }
    render(btn);
    btn.addEventListener('click', function () {
      var turnOn = isRailHidden();
      global.postMessage({ type: '__deck_rail_visible', on: turnOn }, '*');
      setTimeout(function () { render(btn); }, 80);
    });
  }

  function start() { wire(25); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})(window);

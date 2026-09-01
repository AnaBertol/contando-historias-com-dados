(function (global) {
  if (global.KunumiAuth) return;

  var STORAGE_KEY = 'kunumi_course_auth_v1';
  var PASSWORD = 'kunumi2026';
  var readyCallbacks = [];
  var authed = false;

  function fireReady() {
    var callbacks = readyCallbacks;
    readyCallbacks = [];
    callbacks.forEach(function (fn) { fn(); });
  }

  function removeGate() {
    var style = document.getElementById('kunumi-auth-style');
    var overlay = document.getElementById('kunumi-auth-gate');
    if (style) style.parentNode.removeChild(style);
    if (overlay) overlay.parentNode.removeChild(overlay);
  }

  function markAuthed() {
    authed = true;
    try { localStorage.setItem(STORAGE_KEY, '1'); } catch (e) {}
    removeGate();
    fireReady();
  }

  function showGate() {
    var style = document.createElement('style');
    style.id = 'kunumi-auth-style';
    style.textContent = 'html,body{visibility:hidden !important;}';
    document.head.appendChild(style);

    var overlay = document.createElement('div');
    overlay.id = 'kunumi-auth-gate';
    overlay.style.cssText = 'visibility:visible !important;position:fixed;inset:0;z-index:2147483647;background:#1c2127;display:flex;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;padding:24px;box-sizing:border-box;';
    overlay.innerHTML =
      '<form id="kunumi-auth-form" style="visibility:visible;background:#252b33;padding:40px 36px;border-radius:16px;width:320px;max-width:100%;display:flex;flex-direction:column;gap:14px;box-shadow:0 24px 64px rgba(0,0,0,.5);box-sizing:border-box;">' +
        '<div style="color:#f0f0f0;font-size:17px;font-weight:600;">Contando Histórias com Dados</div>' +
        '<div style="color:rgba(240,240,240,.6);font-size:13px;line-height:1.5;">Este conteúdo é restrito aos participantes do curso. Digite a senha para continuar.</div>' +
        '<input type="password" id="kunumi-auth-input" placeholder="Senha" autocomplete="off" style="padding:12px 14px;border-radius:8px;border:1px solid rgba(240,240,240,.18);background:#1c2127;color:#f0f0f0;font-size:15px;outline:none;box-sizing:border-box;">' +
        '<div id="kunumi-auth-error" style="color:#f04e44;font-size:13px;display:none;">Senha incorreta, tente novamente.</div>' +
        '<button type="submit" style="padding:12px 14px;border-radius:8px;border:none;background:#3a2fdf;color:#fff;font-size:15px;font-weight:600;cursor:pointer;">Entrar</button>' +
      '</form>';

    document.body.appendChild(overlay);

    var form = document.getElementById('kunumi-auth-form');
    var input = document.getElementById('kunumi-auth-input');
    var error = document.getElementById('kunumi-auth-error');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (input.value === PASSWORD) {
        markAuthed();
      } else {
        error.style.display = 'block';
        input.value = '';
        input.focus();
      }
    });

    setTimeout(function () { input.focus(); }, 0);
  }

  try {
    authed = localStorage.getItem(STORAGE_KEY) === '1';
  } catch (e) {
    authed = false;
  }

  if (!authed) showGate();

  global.KunumiAuth = {
    onReady: function (fn) {
      if (authed) fn();
      else readyCallbacks.push(fn);
    }
  };
})(window);

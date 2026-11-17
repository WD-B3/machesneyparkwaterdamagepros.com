(function () {
  var root = document.documentElement;
  var burger = document.getElementById('burger');
  if (burger) {
    burger.addEventListener('click', function () {
      var open = root.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && root.classList.contains('menu-open')) {
      root.classList.remove('menu-open');
      if (burger) { burger.setAttribute('aria-expanded', 'false'); burger.focus(); }
    }
  });
  var qs = document.querySelectorAll('.faq-q');
  for (var i = 0; i < qs.length; i++) {
    qs[i].addEventListener('click', function () {
      var btn = this;
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      panel.style.maxHeight = open ? '0px' : panel.scrollHeight + 'px';
    });
  }
})();

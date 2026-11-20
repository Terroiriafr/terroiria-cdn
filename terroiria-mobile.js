/* Terroiria – réglages téléphone pour toutes les pages (20/11/2026)
   1. Menu du haut toujours visible quand on fait défiler la page.
   2. Tailles adaptées au téléphone : titres, textes, marges, icônes rondes, boutons.
   Ne touche ni à la carte plein écran (.trc), ni au menu, ni au pied de page. */
(function () {
  var LARGEUR = 760;
  var mq = window.matchMedia('(max-width: ' + LARGEUR + 'px)');

  var style = document.createElement('style');
  style.textContent = '@media (max-width:' + LARGEUR + 'px){html{scroll-padding-top:80px}'
    + '.tr-haut-fixe{position:-webkit-sticky!important;position:sticky!important;top:0!important;z-index:40!important;background:#FBF7EC!important}'
    + '.tr-haut-fixe header{background:#FBF7EC}}';
  document.head.appendChild(style);

  function arrondi(x) { return Math.round(x * 2) / 2; }

  // Menu du haut collant : on remonte jusqu'au bloc qui est un enfant direct de la page
  // (sinon « sticky » resterait coincé dans son petit conteneur).
  function menuFixe() {
    var nav = document.querySelector('nav[aria-label="Navigation principale"]');
    if (!nav || nav.closest('.trc')) return;
    var e = nav.closest('header') || nav;
    while (e.parentElement && e.parentElement !== document.body && e.parentElement.offsetHeight < e.offsetHeight + 120) e = e.parentElement;
    e.classList.add('tr-haut-fixe');
  }

  var EXCLUS = '.trc, .tr-menu, .tr-burger, nav[aria-label="Navigation principale"], footer.tr-pied, script, style, svg';

  function texteDirect(e) {
    for (var n = e.firstChild; n; n = n.nextSibling) if (n.nodeType === 3 && n.nodeValue.trim()) return true;
    return /^(INPUT|TEXTAREA|SELECT|BUTTON)$/.test(e.tagName);
  }

  function ajuster() {
    if (!mq.matches || document.querySelector('.trc--complet')) return;
    var vw = document.documentElement.clientWidth;
    var ops = [];
    var tous = document.body.getElementsByTagName('*');
    // 1) Lecture de toutes les mesures, 2) écriture : pas de recalcul de page à chaque élément.
    for (var i = 0; i < tous.length; i++) {
      var e = tous[i];
      if (e.closest(EXCLUS)) continue;
      var cs = getComputedStyle(e);
      if (cs.display === 'none') continue;
      var o = { e: e };
      var fs = parseFloat(cs.fontSize);
      if (fs > 17.5 && texteDirect(e)) {
        var titre = /^H[1-6]$/.test(e.tagName) || fs >= 28 || (parseInt(cs.fontWeight, 10) >= 700 && fs >= 22);
        var nf = arrondi(titre ? 16 + (fs - 16) * 0.62 : 16 + (fs - 16) * 0.35);
        o.fs = nf + 'px';
        if (cs.lineHeight !== 'normal') o.lh = (parseFloat(cs.lineHeight) * nf / fs).toFixed(1) + 'px';
        if (parseFloat(cs.letterSpacing) < 0) o.ls = (parseFloat(cs.letterSpacing) * nf / fs).toFixed(2) + 'px';
      }
      var pt = parseFloat(cs.paddingTop), pb = parseFloat(cs.paddingBottom), pl = parseFloat(cs.paddingLeft), pr = parseFloat(cs.paddingRight);
      if (pt >= 40) o.pt = Math.max(28, Math.round(pt * 0.6)) + 'px';
      if (pb >= 40) o.pb = Math.max(28, Math.round(pb * 0.6)) + 'px';
      if (pl >= 22 && pr >= 22 && e.offsetWidth < vw - 8) { o.pl = Math.max(16, Math.round(pl * 0.7)) + 'px'; o.pr = Math.max(16, Math.round(pr * 0.7)) + 'px'; }
      var mt = parseFloat(cs.marginTop), mb = parseFloat(cs.marginBottom);
      if (mt >= 36) o.mt = Math.round(mt * 0.6) + 'px';
      if (mb >= 36) o.mb = Math.round(mb * 0.6) + 'px';
      var rg = parseFloat(cs.rowGap);
      if (rg >= 28) o.rg = Math.round(rg * 0.6) + 'px';
      // Pastilles rondes (icônes) : 72 % de leur taille
      var w = e.offsetWidth, h = e.offsetHeight;
      if (w >= 56 && w <= 150 && Math.abs(w - h) <= 2 && parseFloat(cs.borderTopLeftRadius) >= w / 2 - 1) {
        o.w = Math.round(w * 0.72) + 'px';
      }
      // Boutons et champs trop hauts
      if (/^(A|BUTTON|INPUT|SELECT)$/.test(e.tagName) && h >= 58 && h < 90 && cs.display !== 'inline') {
        var red = (h - 50) / 2;
        o.btn = [Math.max(8, pt - red), Math.max(8, pb - red)];
      }
      if (o.fs || o.pt || o.pb || o.pl || o.mt || o.mb || o.rg || o.w || o.btn) ops.push(o);
    }
    ops.forEach(function (o) {
      var s = o.e.style;
      if (o.fs) s.setProperty('font-size', o.fs, 'important');
      if (o.lh) s.setProperty('line-height', o.lh, 'important');
      if (o.ls) s.setProperty('letter-spacing', o.ls, 'important');
      if (o.pt) s.setProperty('padding-top', o.pt, 'important');
      if (o.pb) s.setProperty('padding-bottom', o.pb, 'important');
      if (o.pl) { s.setProperty('padding-left', o.pl, 'important'); s.setProperty('padding-right', o.pr, 'important'); }
      if (o.mt) s.setProperty('margin-top', o.mt, 'important');
      if (o.mb) s.setProperty('margin-bottom', o.mb, 'important');
      if (o.rg) s.setProperty('row-gap', o.rg, 'important');
      if (o.w) { ['width', 'height', 'min-width', 'min-height', 'flex-basis'].forEach(function (p) { s.setProperty(p, o.w, 'important'); }); s.setProperty('flex-shrink', '0', 'important'); }
      if (o.btn) { s.setProperty('padding-top', o.btn[0] + 'px', 'important'); s.setProperty('padding-bottom', o.btn[1] + 'px', 'important'); s.setProperty('min-height', '48px', 'important'); s.setProperty('height', 'auto', 'important'); }
    });
    document.documentElement.setAttribute('data-tr-mobile', '1');
  }

  function demarrer() {
    if (mq.matches) menuFixe();
    ajuster();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', demarrer); else demarrer();
})();

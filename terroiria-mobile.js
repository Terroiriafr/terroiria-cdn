/* Terroiria – réglages téléphone pour toutes les pages (v2, 20/11/2026)
   1. Menu du haut toujours visible quand on fait défiler la page.
   2. Mise en page compacte des sections (cartes deux par deux, étapes en ligne…).
   3. Tailles adaptées au téléphone ailleurs : titres, textes, marges, icônes.
   Ne touche ni à la carte plein écran (.trc), ni au menu, ni au pied de page. */
(function () {
  var L = 760;
  var mq = window.matchMedia('(max-width: ' + L + 'px)');
  var I = '!important';

  var css = [
    'html{scroll-padding-top:76px}',
    '.tr-haut-fixe{position:-webkit-sticky' + I + ';position:sticky' + I + ';top:0' + I + ';z-index:40' + I + ';background:#FBF7EC' + I + '}',
    '.tr-haut-fixe header{background:#FBF7EC}',
    // Titres
    'main h1,.tr-pg h1,.tr-ap h1,section h1,div.w-embed h1{font-size:28px' + I + ';line-height:1.12' + I + ';letter-spacing:-.02em' + I + '}',
    'h2:not(.trc h2){font-size:23px' + I + ';line-height:1.18' + I + ';letter-spacing:-.015em' + I + '}',
    'h3:not(.trc h3){font-size:18px' + I + ';line-height:1.25' + I + '}',
    '.tf-eyebrow{font-size:12px' + I + ';margin-bottom:4px' + I + '}',
    // Accueil : « Comment ça marche » en lignes compactes
    '.trm-pas{gap:10px' + I + '}',
    '.trm-pas>li{display:grid' + I + ';grid-template-columns:40px 1fr;column-gap:12px;row-gap:2px' + I + ';padding:14px 16px' + I + ';border-radius:18px' + I + ';align-items:start}',
    '.trm-pas>li>span:first-child{grid-row:1/3;width:40px' + I + ';height:40px' + I + '}',
    '.trm-pas>li>span:first-child svg{width:20px;height:20px}',
    '.trm-pas h3{font-size:17px' + I + '}',
    '.trm-pas p{font-size:14.5px' + I + ';line-height:1.4' + I + '}',
    '.tf-bloc-badges{padding:16px 14px' + I + ';border-radius:20px' + I + '}',
    '.tf-bloc-badges>p{font-size:15px' + I + ';margin-bottom:12px' + I + '}',
    '.tf-bgrid{gap:8px' + I + '}',
    '.tf-bcard{padding:12px 12px 14px' + I + ';gap:8px' + I + ';border-radius:16px' + I + '}',
    '.tf-bcard p{font-size:14px' + I + ';line-height:1.4' + I + '}',
    // Accueil : bloc « Membre fondateur »
    '.trm-membre{padding:20px 16px' + I + ';gap:16px' + I + ';border-radius:24px' + I + '}',
    '.trm-membre h2{font-size:22px' + I + ';margin:10px 0 8px' + I + '}',
    '.trm-membre ul{gap:4px' + I + ';margin:0 0 10px' + I + '}',
    '.trm-membre li{font-size:15px' + I + ';line-height:1.4' + I + '}',
    '.trm-membre>div:first-child>span:first-child{font-size:13px' + I + ';padding:5px 12px 5px 8px' + I + '}',
    '.trm-membre>div:first-child>p{font-size:14px' + I + ';line-height:1.45' + I + ';margin:0' + I + '}',
    '.trm-membre>div:last-child{padding:14px 12px' + I + ';border-radius:18px' + I + '}',
    '.trm-membre>div:last-child>p{font-size:15px' + I + ';margin-bottom:6px' + I + '}',
    '.trm-membre>div:last-child>p:last-child{font-size:12.5px' + I + ';margin:6px 0 0' + I + '}',
    // Comment ça marche : critères deux par deux
    '.tf-crits{grid-template-columns:1fr 1fr' + I + ';gap:10px' + I + '}',
    '.tf-crit{padding:14px 12px 16px' + I + ';border-radius:18px' + I + '}',
    '.tf-crit-i{width:34px' + I + ';height:34px' + I + ';border-radius:11px' + I + ';margin-bottom:8px' + I + '}',
    '.tf-crit-i svg{width:18px;height:18px}',
    '.tf-crit-n{font-size:24px' + I + ';line-height:1.1' + I + ';margin:0 0 4px' + I + '}',
    '.tf-crit-t{font-size:13.5px' + I + ';line-height:1.4' + I + '}',
    '.tf-niv{padding:14px' + I + '}',
    // Pour les lieux : avantages deux par deux
    'div:has(>.tf-ben){grid-template-columns:1fr 1fr' + I + ';gap:10px' + I + '}',
    '.tf-ben{padding:14px 12px' + I + ';border-radius:18px' + I + '}',
    '.tf-ben-i{width:36px' + I + ';height:36px' + I + ';margin-bottom:8px' + I + '}',
    '.tf-ben-i svg{width:18px;height:18px}',
    '.tf-ben-t{font-size:15px' + I + ';line-height:1.25' + I + ';margin-bottom:4px' + I + '}',
    '.tf-ben-d{font-size:13.5px' + I + ';line-height:1.4' + I + '}',
    // Pour les lieux : « Comment ça se passe ? » en lignes, sans flèches
    'div:has(>.tf-etapes){padding:20px 16px' + I + ';border-radius:24px' + I + '}',
    'div:has(>.tf-etapes)>h2{margin-bottom:16px' + I + '}',
    '.tf-etapes{gap:14px' + I + '}',
    '.tf-fl{display:none' + I + '}',
    '.tf-et{display:grid' + I + ';grid-template-columns:44px 1fr;column-gap:14px;align-items:start;flex:none' + I + '}',
    '.tf-et-i{grid-row:1/3;width:44px' + I + ';height:44px' + I + ';margin:0' + I + '}',
    '.tf-et-i svg{width:22px;height:22px}',
    '.tf-et-n{width:20px' + I + ';height:20px' + I + ';font-size:11px' + I + ';top:-5px' + I + ';right:-7px' + I + ';box-shadow:0 0 0 2px #1F5A2C' + I + '}',
    '.tf-et>p:nth-of-type(1){font-size:16.5px' + I + ';margin:0 0 2px' + I + '}',
    '.tf-et>p:nth-of-type(2){font-size:14.5px' + I + ';line-height:1.4' + I + '}',
    'div:has(>.tf-etapes)>div{padding-top:18px' + I + ';gap:10px' + I + '}',
    'div:has(>.tf-etapes) .tf-btn{width:100%;justify-content:center;min-height:46px' + I + ';font-size:15.5px' + I + '}',
    'div:has(>.tf-etapes)>div>span{font-size:13.5px' + I + '}',
    // À propos : chiffres deux par deux, cartes avec icône à gauche, citation
    '.tf-stats{grid-template-columns:1fr 1fr' + I + ';gap:10px' + I + '}',
    '.tf-stat{padding:14px 12px' + I + ';border-radius:18px' + I + '}',
    '.tf-stat-n{font-size:30px' + I + ';line-height:1.1' + I + ';margin-bottom:4px' + I + '}',
    '.tf-stat-t{font-size:13px' + I + ';line-height:1.35' + I + '}',
    '.tf-grid{gap:10px' + I + '}',
    '.tf-grid>.tf-card{display:grid' + I + ';grid-template-columns:40px 1fr;column-gap:12px;padding:14px 16px' + I + ';border-radius:18px' + I + ';align-items:start}',
    '.tf-grid>.tf-card>.tf-ico{grid-row:1/3;width:40px' + I + ';height:40px' + I + ';margin:0' + I + ';border-radius:12px' + I + '}',
    '.tf-grid>.tf-card>.tf-ico svg{width:20px;height:20px}',
    '.tf-grid>.tf-card>h3{margin:0 0 4px' + I + ';font-size:16.5px' + I + '}',
    '.tf-grid>.tf-card>p{font-size:14.5px' + I + ';line-height:1.45' + I + ';margin:0' + I + '}',
    'figure:has(>blockquote){padding:16px' + I + ';border-radius:22px' + I + '}',
    'figure:has(>blockquote)>span:first-child{font-size:40px' + I + ';line-height:1' + I + ';height:auto' + I + '}',
    'figure:has(>blockquote) blockquote{padding:4px 0 4px 14px' + I + ';margin:0' + I + '}',
    'figure:has(>blockquote) blockquote p{font-size:15.5px' + I + ';line-height:1.5' + I + ';margin:0 0 10px' + I + '}',
    'figure:has(>blockquote) figcaption{font-size:13.5px' + I + ';margin-top:6px' + I + '}',
    '.trm-photo{width:108px' + I + ';height:108px' + I + ';min-width:0' + I + '}',
    '.trm-ico{width:32px' + I + ';height:32px' + I + ';min-width:32px' + I + '}',
    '.trm-ico svg{width:17px;height:17px}'
  ].join('');

  var style = document.createElement('style');
  style.textContent = '@media (max-width:' + L + 'px){' + css + '}';
  (document.head || document.documentElement).appendChild(style);

  function arrondi(x) { return Math.round(x * 2) / 2; }
  function titre(re) {
    var t = document.querySelectorAll('h1,h2,h3');
    for (var i = 0; i < t.length; i++) if (re.test(t[i].textContent.trim())) return t[i];
    return null;
  }

  function menuFixe() {
    var nav = document.querySelector('nav[aria-label="Navigation principale"]');
    if (!nav || nav.closest('.trc')) return;
    var e = nav.closest('header') || nav;
    while (e.parentElement && e.parentElement !== document.body && e.parentElement.offsetHeight < e.offsetHeight + 120) e = e.parentElement;
    e.classList.add('tr-haut-fixe');
  }

  // Sections sans classe, repérées par leur titre
  function reperer() {
    var h = titre(/^Comment ça marche$/);
    var ol = h && h.closest('section') && h.closest('section').querySelector('ol');
    if (ol && !ol.classList.contains('tf-etapes')) ol.classList.add('trm', 'trm-pas');
    h = titre(/^Deviens membre fondateur/);
    if (h && h.parentElement && h.parentElement.parentElement) h.parentElement.parentElement.classList.add('trm', 'trm-membre');
    ['.tf-crits', '.tf-etapes', '.tf-stats', '.tf-grid', '.tf-bloc-badges', 'figure'].forEach(function (s) {
      Array.prototype.forEach.call(document.querySelectorAll(s), function (e) { e.classList.add('trm'); });
    });
    Array.prototype.forEach.call(document.querySelectorAll('.tf-ben'), function (e) { e.parentElement.classList.add('trm'); });
  }

  var EXCLUS = '.trc, .trm, .tr-menu, .tr-burger, nav[aria-label="Navigation principale"], footer.tr-pied, script, style, svg';

  function texteDirect(e) {
    for (var n = e.firstChild; n; n = n.nextSibling) if (n.nodeType === 3 && n.nodeValue.trim()) return true;
    return /^(INPUT|TEXTAREA|SELECT|BUTTON)$/.test(e.tagName);
  }

  function ajuster() {
    var vw = document.documentElement.clientWidth;
    var ops = [];
    var tous = document.body.getElementsByTagName('*');
    for (var i = 0; i < tous.length; i++) {
      var e = tous[i];
      if (e.closest(EXCLUS)) continue;
      var cs = getComputedStyle(e);
      if (cs.display === 'none') continue;
      var o = { e: e };
      var fs = parseFloat(cs.fontSize);
      var w = e.offsetWidth, h = e.offsetHeight;
      // Textes (les titres h1-h3 sont réglés par la feuille de style)
      if (!/^H[1-3]$/.test(e.tagName) && fs > 16.5 && texteDirect(e)) {
        var gros = fs >= 26;
        var nf = gros ? arrondi(Math.max(20, 14 + (fs - 16) * 0.55)) : (fs > 18.5 && parseInt(cs.fontWeight, 10) >= 700 ? 17 : 16);
        o.fs = nf + 'px';
        if (cs.lineHeight !== 'normal') o.lh = (parseFloat(cs.lineHeight) * nf / fs).toFixed(1) + 'px';
      }
      var pt = parseFloat(cs.paddingTop), pb = parseFloat(cs.paddingBottom), pl = parseFloat(cs.paddingLeft), pr = parseFloat(cs.paddingRight);
      if (pt >= 30) o.pt = Math.max(20, Math.round(pt * 0.55)) + 'px';
      if (pb >= 30) o.pb = Math.max(20, Math.round(pb * 0.55)) + 'px';
      if (pl >= 20 && pr >= 20 && w < vw - 8) { o.pl = Math.max(14, Math.round(pl * 0.7)) + 'px'; o.pr = Math.max(14, Math.round(pr * 0.7)) + 'px'; }
      var mt = parseFloat(cs.marginTop), mb = parseFloat(cs.marginBottom);
      if (mt >= 28) o.mt = Math.round(mt * 0.5) + 'px';
      if (mb >= 28) o.mb = Math.round(mb * 0.5) + 'px';
      var rg = parseFloat(cs.rowGap);
      if (rg >= 20) o.rg = Math.round(rg * 0.5) + 'px';
      // Pastilles d'icône (rondes ou carrées arrondies) et photo ronde
      if (w >= 44 && w <= 160 && Math.abs(w - h) <= 2 && parseFloat(cs.borderTopLeftRadius) >= 10) {
        if (e.tagName === 'IMG' || e.querySelector('img') || cs.backgroundImage !== 'none') { if (w >= 110) e.classList.add('trm-photo'); }
        else if (e.querySelector('svg') && e.textContent.trim().length < 3) e.classList.add('trm-ico');
      }
      if (/^(A|BUTTON|INPUT|SELECT)$/.test(e.tagName) && h >= 54 && h < 90 && cs.display !== 'inline') {
        var red = (h - 48) / 2;
        o.btn = [Math.max(8, pt - red), Math.max(8, pb - red)];
      }
      if (o.fs || o.pt || o.pb || o.pl || o.mt || o.mb || o.rg || o.btn) ops.push(o);
    }
    ops.forEach(function (o) {
      var s = o.e.style;
      if (o.fs) s.setProperty('font-size', o.fs, 'important');
      if (o.lh) s.setProperty('line-height', o.lh, 'important');
      if (o.pt) s.setProperty('padding-top', o.pt, 'important');
      if (o.pb) s.setProperty('padding-bottom', o.pb, 'important');
      if (o.pl) { s.setProperty('padding-left', o.pl, 'important'); s.setProperty('padding-right', o.pr, 'important'); }
      if (o.mt) s.setProperty('margin-top', o.mt, 'important');
      if (o.mb) s.setProperty('margin-bottom', o.mb, 'important');
      if (o.rg) s.setProperty('row-gap', o.rg, 'important');
      if (o.btn) { s.setProperty('padding-top', o.btn[0] + 'px', 'important'); s.setProperty('padding-bottom', o.btn[1] + 'px', 'important'); s.setProperty('min-height', '46px', 'important'); s.setProperty('height', 'auto', 'important'); }
    });
  }

  function demarrer() {
    if (!mq.matches || document.querySelector('.trc--complet')) return;
    menuFixe();
    reperer();
    ajuster();
    document.documentElement.setAttribute('data-tr-mobile', '2');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', demarrer); else demarrer();
})();

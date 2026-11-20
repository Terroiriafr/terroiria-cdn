/* Terroiria – finitions d'interface pour tout le site (v1, 20/11/2026)
   Priorités 1 et 2 validées par Jules :
   1. Boutons principaux avec flèche qui glisse
   2. Choix en liste qui se colore (questionnaire, Signaler)
   3. Interrupteurs pour les filtres oui/non (carte)
   4. Info-bulles sur les badges de vérification
   5. Notification de confirmation (« Merci, c'est noté ! »)
   6. Onglets Carte / Liste avec curseur qui glisse
   7. Recherche qui s'éclaire au clic
   8. Chargement aux couleurs du site (carte, photos)
   9. Choix multiples en pastilles avec coche ronde
  10. Étiquettes avec point de couleur (labels, points forts)
   Effets adaptés d'éléments Uiverse (licence MIT) : alexmaracinaru/perfect-panda-77, d4niz/good-octopus-19,
   ozgeozkaraa01/wet-emu-59, PriyanshuGupta28/new-dog-15, Cksunandh/afraid-snail-51, Gianluks90/funny-impala-78,
   Spacious74/lovely-goose-53, alexruix/plastic-shrimp-54, ashish-yadv/heavy-walrus-26, catraco/hungry-squid-59,
   Javierrocadev/young-panda-66. */
(function () {
  if (window.__trUI) return; window.__trUI = 1;
  var I = '!important';
  var COCHE = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='3.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m5 12.5 4.5 4.5L19 7.5'/%3E%3C/svg%3E\")";
  var css = [
    // 1. Flèche
    '.tr-fl{display:inline-flex' + I + ';align-items:center;justify-content:center;gap:10px;padding-right:6px' + I + '}',
    '.tr-fl-rond{flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background:#1D2A20;color:#F5B800;transition:transform .3s ease}',
    '.tr-fl-rond svg{display:block}',
    '.tf-green.tr-fl .tr-fl-rond,.trq-btn--vert.tr-fl .tr-fl-rond,.trs-btn.tr-fl .tr-fl-rond{background:#FFFFFF;color:#1F5A2C}',
    '.tr-fl:hover .tr-fl-rond,.tr-fl:focus-visible .tr-fl-rond{transform:translateX(4px)}',
    '.tr-fl:active{transform:scale(.97)}',
    // le bouton ne suit plus la souris (ancien effet « aimanté » de l'accueil) : seule la flèche bouge
    '.tf-aimant{transform:none' + I + '}',
    // 2. Choix en liste (radios)
    '.trq-opts:has(> .trq-opt input[type=radio]),.trs-opts{gap:0' + I + ';background:#FFFFFF;border-radius:16px;box-shadow:0 2px 12px rgba(29,42,32,.10),0 0 0 1px #E6DFCB;overflow:hidden}',
    '.trq-opts > .trq-opt:has(input[type=radio]),label.trs-opt{border:0' + I + ';border-radius:0' + I + ';background:transparent;min-height:48px;margin:0' + I + ';transition:background-color .2s ease,color .2s ease}',
    '.trq-opts > .trq-opt:has(input[type=radio]) + .trq-opt,label.trs-opt + label.trs-opt{border-top:1px solid #E6DFCB' + I + '}',
    '.trq-opt:has(input[type=radio]):hover,label.trs-opt:hover{background:#FFF4D1' + I + '}',
    '.trq-opt:has(input[type=radio]:checked),label.trs-opt:has(input:checked){background:#F5B800' + I + ';color:#1D2A20;font-weight:700}',
    '.trq-opt input[type=radio],.trs-opt input[type=radio]{-webkit-appearance:none;appearance:none;flex:0 0 auto;width:20px' + I + ';height:20px' + I + ';margin:0;border-radius:50%;box-shadow:inset 0 0 0 2px #F5B800;background:#FFFFFF;transition:box-shadow .2s ease;cursor:pointer}',
    '.trq-opt input[type=radio]:checked,.trs-opt input[type=radio]:checked{box-shadow:inset 0 0 0 6px #1D2A20}',
    '.trq-opt input[type=radio]:focus-visible,.trs-opt input[type=radio]:focus-visible{outline:3px solid #2F7A3D;outline-offset:2px}',
    // 9. Choix multiples en pastilles (questionnaire)
    '.trq-opts:has(> .trq-opt input[type=checkbox]){display:flex' + I + ';flex-direction:row' + I + ';flex-wrap:wrap;gap:8px' + I + '}',
    '.trq-opts > .trq-opt:has(input[type=checkbox]){border-radius:999px' + I + ';min-height:44px;padding:4px 16px 4px 8px' + I + ';font-size:16px;transition:background-color .2s ease,border-color .2s ease}',
    '.trq-opt input[type=checkbox],.trs-opt input[type=checkbox]{-webkit-appearance:none;appearance:none;flex:0 0 auto;width:24px' + I + ';height:24px' + I + ';margin:0;border-radius:50%;box-shadow:inset 0 0 0 2px #C9BFA5;background:#FFFFFF center/14px no-repeat;transition:background-color .2s ease,box-shadow .2s ease,transform .25s cubic-bezier(.3,1.6,.5,1);cursor:pointer}',
    '.trq-opt input[type=checkbox]:checked,.trs-opt input[type=checkbox]:checked{background-color:#2F7A3D;background-image:' + COCHE + ';box-shadow:none;transform:scale(1.06)}',
    '.trq-opt input[type=checkbox]:focus-visible{outline:3px solid #F5B800;outline-offset:2px}',
    '.trq-opt:has(input[type=checkbox]:checked){background:#EAF3EC' + I + ';border-color:#2F7A3D' + I + '}',
    // 3. Interrupteurs (filtres de la carte)
    '.trc-coche{gap:12px' + I + ';cursor:pointer}',
    '.trc-coche input[type=checkbox]{-webkit-appearance:none;appearance:none;position:relative;flex:0 0 auto;width:48px' + I + ';height:28px' + I + ';margin:0;border-radius:999px;background:#E6DFCB;transition:background-color .25s ease;cursor:pointer}',
    '.trc-coche input[type=checkbox]::after{content:"";position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:#FFFFFF;box-shadow:0 1px 3px rgba(0,0,0,.3);transition:transform .25s ease}',
    '.trc-coche input[type=checkbox]:checked{background:#2F7A3D}',
    '.trc-coche input[type=checkbox]:checked::after{transform:translateX(20px)}',
    '.trc-coche input[type=checkbox]:focus-visible{outline:3px solid #F5B800;outline-offset:2px}',
    // 6. Onglets Carte / Liste
    '.trc-vues{position:relative;display:inline-grid' + I + ';grid-template-columns:1fr 1fr}',
    '.trc-vues::before{content:"";position:absolute;top:4px;bottom:4px;left:4px;width:calc(50% - 4px);border-radius:999px;background:#1F5A2C;transition:transform .3s cubic-bezier(.3,.7,.2,1)}',
    '.trc-vues:has([data-vue=liste][aria-pressed=true])::before{transform:translateX(100%)}',
    '.trc-vues button{position:relative;z-index:1;min-width:72px;background:transparent' + I + ';transition:color .25s ease}',
    '.trc-vues button[aria-pressed=true]{color:#FFFFFF' + I + '}',
    // 7. Recherche
    'form:has(> input[type=search]),form.trc-rech{transition:box-shadow .2s ease,background-color .2s ease' + I + '}',
    'form:has(> input[type=search]):not(.trc-rech){background:#EAF3EC' + I + '}',
    'form:has(> input[type=search]):focus-within,form.trc-rech:focus-within{background:#FFFFFF' + I + ';box-shadow:inset 0 0 0 2px #2F7A3D,0 8px 22px -10px rgba(29,42,32,.35)' + I + '}',
    'form:has(> input[type=search]) input[type=search]{outline:0}',
    // 8. Chargement
    '.trc:not([data-tr-pret]) .trc-nombre::before{content:"";display:inline-block;vertical-align:middle;width:8px;height:8px;margin:0 22px 0 14px;border-radius:50%;background:#2F7A3D;box-shadow:-14px 0 0 #2F7A3D,14px 0 0 #F5B800;animation:trPouls 1s ease-in-out infinite}',
    '@keyframes trPouls{0%,100%{opacity:.45}50%{opacity:1}}',
    '.trc:not([data-tr-pret]) .trc-liste{min-height:330px;background:linear-gradient(90deg,#E9E1CC 25%,#F7F2E4 50%,#E9E1CC 75%) 0 0/200% 96px,linear-gradient(90deg,#E9E1CC 25%,#F7F2E4 50%,#E9E1CC 75%) 0 112px/200% 96px,linear-gradient(90deg,#E9E1CC 25%,#F7F2E4 50%,#E9E1CC 75%) 0 224px/200% 96px;background-repeat:no-repeat;border-radius:16px;animation:trBrille 1.4s linear infinite}',
    '@keyframes trBrille{to{background-position:-200% 0,-200% 112px,-200% 224px}}',
    '.tf-hero-photo[data-tr-photos]:empty{min-height:200px;border-radius:20px;background:linear-gradient(90deg,#E9E1CC 25%,#F7F2E4 50%,#E9E1CC 75%) 0 0/200% 100%;animation:trBrille2 1.4s linear infinite}',
    '@keyframes trBrille2{to{background-position:-200% 0}}',
    // 9 bis. Pastilles produits de la carte : petite coche quand elles sont choisies
    '.trc-chip[data-groupe=produits][aria-pressed=true]::after{content:"";flex:0 0 auto;width:18px;height:18px;margin-left:2px;border-radius:50%;background:#1F5A2C ' + COCHE + ' center/11px no-repeat;animation:trPop .25s cubic-bezier(.3,1.6,.5,1)}',
    '@keyframes trPop{from{transform:scale(.3);opacity:0}}',
    // 10. Étiquettes
    '.tr-tags{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:0}',
    '.tr-tags-l{font-weight:700;color:#1D2A20;margin-right:2px}',
    '.tr-tag,.tf-fort{display:inline-flex' + I + ';align-items:center;gap:7px;padding:6px 12px' + I + ';border-radius:999px' + I + ';font:700 13px/1.2 "Bricolage Grotesque",system-ui,sans-serif' + I + ';background:#EAF3EC' + I + ';color:#1F5A2C' + I + ';box-shadow:none' + I + '}',
    '.tr-tag::before,.tf-fort::before{content:"";flex:0 0 auto;width:7px;height:7px;border-radius:50%;background:currentColor}',
    '.tf-fort{background:#FFF4D1' + I + ';color:#1D2A20' + I + '}',
    '.tf-fort::before{background:#F5B800}',
    // 4. Info-bulles
    '.tr-bdg-info{cursor:help}',
    '#tr-bulle{position:fixed;z-index:1000;max-width:250px;padding:10px 12px;border-radius:12px;background:#1D2A20;color:#FBF7EC;font:500 13px/1.4 "Bricolage Grotesque",system-ui,sans-serif;box-shadow:0 10px 24px -10px rgba(0,0,0,.5);pointer-events:none;opacity:0;transform:translateY(6px);transition:opacity .18s ease,transform .18s ease}',
    '#tr-bulle.on{opacity:1;transform:none}',
    '#tr-bulle::after{content:"";position:absolute;left:var(--x,50%);top:100%;margin-left:-7px;border:7px solid transparent;border-top-color:#1D2A20}',
    '#tr-bulle.bas::after{top:auto;bottom:100%;border-top-color:transparent;border-bottom-color:#1D2A20}',
    // 5. Notification
    '#tr-toasts{position:fixed;z-index:1001;left:50%;bottom:calc(20px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);display:flex;flex-direction:column;gap:8px;width:min(340px,calc(100vw - 32px));pointer-events:none}',
    '.tr-toast{display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:16px;background:#FFFFFF;border-left:5px solid #2F7A3D;box-shadow:0 14px 30px -14px rgba(29,42,32,.5),0 0 0 1px #E6DFCB;font-family:"Bricolage Grotesque",system-ui,sans-serif;color:#1D2A20;animation:trEntre .45s cubic-bezier(.3,.7,.2,1)}',
    '.tr-toast.sort{opacity:0;transform:translateY(10px);transition:opacity .3s ease,transform .3s ease}',
    '.tr-toast-i{flex:0 0 auto;width:34px;height:34px;border-radius:50%;background:#EAF3EC;display:flex;align-items:center;justify-content:center;color:#1F5A2C}',
    '.tr-toast-t{flex:1;min-width:0}.tr-toast b{display:block;font-size:15px;line-height:1.25}.tr-toast-d{display:block;font-size:13px;color:#5C6B5F;line-height:1.35}',
    '@keyframes trEntre{from{opacity:0;transform:translateY(14px) scale(.97)}}',
    '@media (max-width:760px){body:has(.tr-barre) #tr-toasts{bottom:calc(92px + env(safe-area-inset-bottom,0px))}}',
    '@media (prefers-reduced-motion:reduce){.tr-fl-rond,.trc-vues::before,.tr-toast,#tr-bulle,.trc-coche input::after,.trq-opt input{transition:none' + I + ';animation:none' + I + '}.trc:not([data-tr-pret]) .trc-liste,.tf-hero-photo[data-tr-photos]:empty,.trc:not([data-tr-pret]) .trc-nombre::before{animation:none' + I + '}}'
  ].join('');
  var st = document.createElement('style'); st.id = 'tr-ui-css'; st.textContent = css;
  (document.head || document.documentElement).appendChild(st);

  var FLECHE = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var OK = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>';

  // 5. Notification réutilisable : window.trNotifier('Titre', 'Détail')
  function notifier(titre, detail) {
    var z = document.getElementById('tr-toasts');
    if (!z) { z = document.createElement('div'); z.id = 'tr-toasts'; z.setAttribute('role', 'status'); z.setAttribute('aria-live', 'polite'); document.body.appendChild(z); }
    var t = document.createElement('div'); t.className = 'tr-toast';
    t.innerHTML = '<span class="tr-toast-i">' + OK + '</span><div class="tr-toast-t"><b></b><span class="tr-toast-d"></span></div>';
    t.querySelector('b').textContent = titre; t.querySelector('.tr-toast-d').textContent = detail || '';
    z.appendChild(t);
    setTimeout(function () { t.classList.add('sort'); setTimeout(function () { t.remove(); }, 350); }, 4200);
  }
  window.trNotifier = notifier;

  // 1. Flèche sur les boutons principaux
  var SEL_FL = 'a.tf-btn.tf-green, a.tf-btn.tf-sun, a.trc-ouvrir, button.trq-btn--vert, button.trs-btn';
  function fleches(racine) {
    Array.prototype.forEach.call((racine || document).querySelectorAll(SEL_FL), function (b) {
      if (b.classList.contains('tr-fl') || b.querySelector('.tr-fl-rond') || b.closest('.tr-menu, nav')) return;
      var txt = b.textContent.trim();
      if (!txt || txt.length > 42 || /^(Oui|Non)\b/.test(txt) || b.offsetHeight && b.offsetHeight < 38) return;
      // retire la flèche écrite à la main en fin de texte
      for (var n = b.lastChild; n; n = n.previousSibling) {
        if (n.nodeType === 3) { if (/\S/.test(n.nodeValue)) { n.nodeValue = n.nodeValue.replace(/\s*[→➜➔]\s*$/, ''); break; } }
        else break;
      }
      var r = document.createElement('span'); r.className = 'tr-fl-rond'; r.setAttribute('aria-hidden', 'true'); r.innerHTML = FLECHE;
      b.appendChild(r); b.classList.add('tr-fl');
    });
  }

  // 4. Info-bulles sur les badges
  var SENS = [
    [/^Vérifié sur place/, 'Terroiria est allé sur place : produits, étiquettes et prix vus en rayon.'],
    [/^Validé par le lieu/, 'Le lieu a relu sa page et confirmé les infos.'],
    [/^Infos données par le lieu/, 'Le lieu a répondu à notre questionnaire ; sa page n’a pas encore été relue par le lieu.'],
    [/^À découvrir/, 'Page préparée à partir d’infos publiques, avec les sources citées en bas de page. Pas encore vérifiée.']
  ];
  var bulle;
  function badges(racine) {
    Array.prototype.forEach.call((racine || document).querySelectorAll('.tf-bdg'), function (b) {
      if (b.hasAttribute('data-tr-info') || b.closest('a, button, .tf-bcard, dt')) return;
      var t = b.textContent.trim(), s = null;
      SENS.forEach(function (x) { if (!s && x[0].test(t)) s = x[1]; });
      if (!s) return;
      b.setAttribute('data-tr-info', s); b.classList.add('tr-bdg-info');
      b.setAttribute('tabindex', '0'); b.setAttribute('role', 'note'); b.setAttribute('aria-label', t.replace(/\s+/g, ' ') + '. ' + s);
    });
  }
  function montrer(b) {
    if (!bulle) { bulle = document.createElement('div'); bulle.id = 'tr-bulle'; bulle.setAttribute('aria-hidden', 'true'); document.body.appendChild(bulle); }
    bulle.textContent = b.getAttribute('data-tr-info');
    var r = b.getBoundingClientRect(), vw = document.documentElement.clientWidth;
    bulle.style.left = '0px'; bulle.style.top = '0px'; bulle.classList.remove('bas');
    var w = bulle.offsetWidth, h = bulle.offsetHeight;
    var x = Math.max(8, Math.min(vw - w - 8, r.left + r.width / 2 - w / 2));
    var y = r.top - h - 12;
    if (y < 8) { y = r.bottom + 12; bulle.classList.add('bas'); }
    bulle.style.left = x + 'px'; bulle.style.top = y + 'px';
    bulle.style.setProperty('--x', Math.round(r.left + r.width / 2 - x) + 'px');
    bulle.classList.add('on'); bulle._b = b; bulle._t = Date.now();
  }
  function cacher() { if (bulle) { bulle.classList.remove('on'); bulle._b = null; } }
  if (window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.addEventListener('mouseover', function (e) { var b = e.target.closest && e.target.closest('[data-tr-info]'); if (b) montrer(b); });
    document.addEventListener('mouseout', function (e) { var b = e.target.closest && e.target.closest('[data-tr-info]'); if (b && !b.contains(e.relatedTarget)) cacher(); });
  }
  document.addEventListener('focusin', function (e) { var b = e.target.closest && e.target.closest('[data-tr-info]'); if (b) montrer(b); });
  document.addEventListener('focusout', function (e) { if (e.target.closest && e.target.closest('[data-tr-info]')) cacher(); });
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-tr-info]');
    if (b) { if (bulle && bulle._b === b && bulle.classList.contains('on') && Date.now() - bulle._t > 400) cacher(); else montrer(b); } else cacher();
  });
  window.addEventListener('scroll', cacher, { passive: true });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') cacher(); });

  // 10. « Labels : Bio (AB), AOP » → étiquettes
  function etiquettes(racine) {
    Array.prototype.forEach.call((racine || document).querySelectorAll('p.tf-muted'), function (p) {
      if (p.hasAttribute('data-tr-tags')) return;
      var s = p.querySelector('strong');
      if (!s || !/^Labels\s*:/.test(s.textContent.trim())) return;
      var reste = p.textContent.replace(s.textContent, '').trim();
      var items = reste.split(/,|\bou\b/).map(function (x) { return x.trim(); }).filter(Boolean);
      if (!items.length) return;
      p.setAttribute('data-tr-tags', '1'); p.classList.add('tr-tags');
      p.innerHTML = '<span class="tr-tags-l">Labels</span>';
      items.forEach(function (x) { var t = document.createElement('span'); t.className = 'tr-tag'; t.textContent = x; p.appendChild(t); });
    });
  }

  // 5 bis. Moments où l'on confirme : « Oui », signalement envoyé, questionnaire envoyé
  document.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('[data-tf-oui]')) notifier('Merci, c’est noté !', 'Tu aides les prochains visiteurs.');
  });
  var vus = new WeakSet();
  function confirmations() {
    var m = document.querySelector('.trs-merci'); if (m && !vus.has(m)) { vus.add(m); notifier('Signalement envoyé', 'On vérifie avant de modifier quoi que ce soit.'); }
    var q = document.querySelector('.trq-succes'); if (q && !vus.has(q)) { vus.add(q); notifier('Réponses envoyées', 'Merci ! Votre page est en préparation.'); }
  }

  function tout(r) { fleches(r); badges(r); etiquettes(r); confirmations(); }
  var attente = null; var dernier = 0;
  function plusTard() { if (attente) return; attente = setTimeout(function () { attente = null; tout(); }, 120); }
  function demarrer() {
    tout();
    try { new MutationObserver(plusTard).observe(document.body, { childList: true, subtree: true }); } catch (e) {}
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', demarrer); else demarrer();
})();

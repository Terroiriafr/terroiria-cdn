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
    // 11. Accueil : chiffres clés en cartes + badge « Daté et sourcé »
    '.trh-stats{display:grid' + I + ';grid-template-columns:repeat(3,minmax(0,1fr));gap:12px' + I + ';border-top:0' + I + ';padding-top:0' + I + ';margin-top:32px' + I + '}',
    '.trh-stat{display:flex;flex-direction:column;align-items:flex-start;gap:6px;margin:0' + I + ';padding:14px 16px 16px;border-radius:18px;background:#FFFFFF;box-shadow:0 0 0 1px #E6DFCB,0 10px 22px -18px rgba(29,42,32,.45);max-width:none' + I + '}',
    '.trh-ico{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:12px;background:#EAF3EC;color:#1F5A2C}',
    '.trh-stat.j .trh-ico{background:#FFF4D1;color:#1D2A20}',
    '.trh-n{display:block;font-size:44px' + I + ';line-height:.95' + I + ';font-weight:800' + I + ';font-stretch:75%;font-variation-settings:"opsz" 96,"wdth" 75;color:#1F5A2C' + I + ';letter-spacing:-.025em;font-variant-numeric:tabular-nums;margin-top:2px}',
    '.trh-stat{position:relative;overflow:hidden;transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s ease;will-change:transform}',
    '.trh-stat::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;background:radial-gradient(220px circle at var(--rx,50%) var(--ry,0%),rgba(245,184,0,.22),transparent 60%);opacity:0;transition:opacity .3s ease}',
    '.trh-stat:hover::before{opacity:1}',
    '.trh-stat:hover{box-shadow:0 0 0 1.5px #F5B800,0 22px 34px -22px rgba(29,42,32,.55)}',
    '.trh-stat > *{position:relative}',
    '.trh-ico{transition:transform .35s cubic-bezier(.3,1.6,.5,1)}',
    '.trh-stat:hover .trh-ico{transform:translateY(-3px) rotate(-8deg) scale(1.08)}',
    '.trh-stats.attente .trh-stat{opacity:0;transform:translateY(18px) rotate(-1.5deg)}',
    '.trh-stats.vu .trh-stat{animation:trCarte .6s cubic-bezier(.2,1.2,.4,1) both}',
    '.trh-stats.vu .trh-stat:nth-child(2){animation-delay:.12s}.trh-stats.vu .trh-stat:nth-child(3){animation-delay:.24s}',
    '@keyframes trCarte{0%{opacity:0;transform:translateY(18px) rotate(-1.5deg)}100%{opacity:1;transform:none}}',
    '.trh-n.saute{animation:trSaute .45s cubic-bezier(.3,1.6,.5,1)}',
    '@keyframes trSaute{0%{transform:scale(1)}40%{transform:scale(1.12)}100%{transform:scale(1)}}',
    '.trh-l{font-size:14px' + I + ';line-height:1.35' + I + ';color:#3F4D42' + I + '}',
    '.trh-bdg{display:inline-flex;align-items:center;gap:8px;padding:5px 12px 5px 5px;border-radius:999px;background:#1F5A2C;color:#FFFFFF;font:800 14px/1.2 "Bricolage Grotesque",system-ui,sans-serif;box-shadow:0 0 0 2px #F5B800;white-space:nowrap;position:relative;overflow:hidden;cursor:help;margin:4px 0 2px}',
    '.trh-bdg .trh-bi{flex:0 0 auto;display:flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;background:#F5B800;color:#1D2A20}',
    '.trh-bdg::after{content:"";position:absolute;top:0;bottom:0;left:-60%;width:40%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.35),transparent);transform:skewX(-20deg);opacity:0}',
    '.trh-bdg.pose{animation:trTampon .6s cubic-bezier(.2,1.4,.4,1) both}',
    '.trh-bdg.pose::after{animation:trReflet 1s .65s ease-out both}',
    '.trh-bdg.pose .trh-bi{animation:trCoche .5s .45s cubic-bezier(.3,1.6,.5,1) both}',
    '@keyframes trTampon{0%{opacity:0;transform:scale(1.7) rotate(-10deg)}60%{opacity:1;transform:scale(.94) rotate(2deg)}100%{transform:none}}',
    '@keyframes trReflet{0%{left:-60%;opacity:1}100%{left:130%;opacity:1}}',
    '@keyframes trCoche{0%{transform:scale(.3) rotate(-30deg)}100%{transform:none}}',
    '@media (max-width:640px){.trh-stats{grid-template-columns:1fr 1fr' + I + ';gap:10px' + I + ';margin-top:24px' + I + '}.trh-stat{padding:12px 14px 14px}.trh-stat.b{grid-column:1 / -1;flex-direction:row;flex-wrap:wrap;align-items:center;gap:6px 12px}.trh-n{font-size:38px' + I + '}.trh-ico{width:32px;height:32px;border-radius:10px}}',
    '@media (prefers-reduced-motion:reduce){.trh-bdg.pose,.trh-bdg.pose::after,.trh-bdg.pose .trh-bi,.trh-stats.vu .trh-stat,.trh-n.saute{animation:none' + I + '}.trh-stats.attente .trh-stat{opacity:1;transform:none}.trh-stat,.trh-ico{transition:none' + I + '}}',
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


  // 11. Accueil : chiffres clés
  var ICO_PIN = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>';
  var ICO_CADEAU = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.7c0 5.6-7.5 10.2-7.5 10.2Z"/></svg>';
  var ICO_SOURCE = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="3"/><path d="M8 3v4M16 3v4M8.5 13.5l2.5 2.5 4.5-5"/></svg>';
  function chiffres() {
    var c = document.querySelector('[data-tf-compte]');
    var bloc = c && c.closest('p') && c.closest('p').parentElement;
    if (!bloc || bloc.classList.contains('trh-stats')) return;
    var ps = Array.prototype.filter.call(bloc.children, function (x) { return x.tagName === 'P'; });
    if (ps.length !== 3) return;
    bloc.classList.add('trh-stats', 'trm');
    ps.forEach(function (p, i) {
      var sp = p.querySelectorAll('span'); if (sp.length < 2) return;
      p.classList.add('trh-stat'); p.removeAttribute('style');
      var n = sp[0], l = sp[1];
      [n, l].forEach(function (x) { ['font-size', 'line-height', 'letter-spacing'].forEach(function (k) { x.style.removeProperty(k); }); });
      l.classList.add('trh-l');
      if (i < 2) {
        n.classList.add('trh-n');
        var ic = document.createElement('span'); ic.className = 'trh-ico'; ic.innerHTML = i === 0 ? ICO_PIN : ICO_CADEAU;
        if (i === 1) p.classList.add('j');
        p.insertBefore(ic, n);
      } else {
        p.classList.add('b');
        var b = document.createElement('span');
        b.className = 'trh-bdg'; b.setAttribute('tabindex', '0'); b.setAttribute('role', 'note');
        b.setAttribute('data-tr-info', 'Chaque page indique quand ses infos ont été vérifiées, et d’où elles viennent (le lieu, nos visites ou des sources publiques citées).');
        b.innerHTML = '<span class="trh-bi">' + ICO_SOURCE + '</span>Daté et sourcé';
        p.replaceChild(b, n);
        var poser = function () { b.classList.add('pose'); };
        if ('IntersectionObserver' in window) {
          var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { setTimeout(poser, 350); io.disconnect(); } }); }, { threshold: .6 });
          io.observe(b);
        } else poser();
      }
    });
    // Police des chiffres : Bricolage Grotesque en version serrée (même famille que le reste du site)
    if (!document.getElementById('tr-police-chiffres')) {
      var lk = document.createElement('link'); lk.id = 'tr-police-chiffres'; lk.rel = 'stylesheet';
      lk.href = 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@96,75,800&display=swap';
      document.head.appendChild(lk);
    }
    var calme = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var nums = bloc.querySelectorAll('.trh-n');
    // compte de « depuis » vers la valeur finale, au format français
    function compter(el, depuis, vers, duree) {
      if (calme) return;
      var t0 = null, fmt = function (v) { return Math.round(v).toLocaleString('fr-FR').replace(/\u202f|\u00a0/g, ' '); };
      var suffixe = el.getAttribute('data-trh-suffixe') || '';
      el.classList.remove('saute');
      (function pas(t) {
        if (!t0) t0 = t; var k = Math.min(1, (t - t0) / duree), e = 1 - Math.pow(1 - k, 3);
        el.textContent = fmt(depuis + (vers - depuis) * e) + suffixe;
        if (k < 1) requestAnimationFrame(pas); else { void el.offsetWidth; el.classList.add('saute'); }
      })(performance.now());
    }
    var cibles = [];
    Array.prototype.forEach.call(nums, function (el) {
      var fin = el.hasAttribute('data-tf-compte') ? +el.getAttribute('data-tf-compte') : 0;
      if (!el.hasAttribute('data-tf-compte')) el.setAttribute('data-trh-suffixe', ' €');
      cibles.push({ el: el, fin: fin, depuis: el.hasAttribute('data-tf-compte') ? 0 : 25 });
    });
    // Apparition en cascade quand le bloc arrive à l'écran (téléphone et ordinateur)
    if (!calme && 'IntersectionObserver' in window) {
      bloc.classList.add('attente');
      var io2 = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return;
          io2.disconnect(); bloc.classList.remove('attente'); bloc.classList.add('vu');
          cibles.forEach(function (c) { if (!c.el.hasAttribute('data-tf-compte')) compter(c.el, c.depuis, c.fin, 1100); });
        });
      }, { threshold: .35 });
      io2.observe(bloc);
    }
    // Survol à la souris : la carte s'incline et suit la souris, le chiffre se recompte
    if (!calme && window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches) {
      Array.prototype.forEach.call(bloc.querySelectorAll('.trh-stat'), function (carte, i) {
        carte.addEventListener('mouseenter', function () { var c = cibles[i]; if (c) compter(c.el, c.depuis, c.fin, 700); });
        carte.addEventListener('mousemove', function (e) {
          var r = carte.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
          carte.style.transform = 'perspective(700px) rotateY(' + ((x - .5) * 10).toFixed(2) + 'deg) rotateX(' + (-(y - .5) * 10).toFixed(2) + 'deg) translateY(-4px)';
          carte.style.setProperty('--rx', (x * 100) + '%'); carte.style.setProperty('--ry', (y * 100) + '%');
        });
        carte.addEventListener('mouseleave', function () { carte.style.transform = ''; });
      });
    }
  }

  function tout(r) { chiffres(); fleches(r); badges(r); etiquettes(r); confirmations(); }
  var attente = null; var dernier = 0;
  function plusTard() { if (attente) return; attente = setTimeout(function () { attente = null; tout(); }, 120); }
  function demarrer() {
    tout();
    try { new MutationObserver(plusTard).observe(document.body, { childList: true, subtree: true }); } catch (e) {}
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', demarrer); else demarrer();
})();

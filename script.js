(function () {
  'use strict';

  var STORAGE_KEY = 'portfolio-lang';

  var translations = {
    'pt-BR': {
      'nav.home': 'Início',
      'nav.about': 'Sobre',
      'nav.projects': 'Projetos',
      'nav.contact': 'Contato',
      'hero.tag': 'Olá, eu sou',
      'hero.name': 'Luan Nicolau',
      'hero.subtitle': 'Desenvolvedor & Criativo',
      'hero.desc': 'Crio experiências digitais que unem design e código.',
      'hero.btnProjects': 'Ver projetos',
      'hero.btnContact': 'Fale comigo',
      'hero.scroll': 'Role para explorar',
      'about.label': 'Sobre mim',
      'about.title': 'Um pouco da minha história',
      'about.text1': 'Sou apaixonado por transformar ideias em realidade digital. Com experiência em desenvolvimento web e design, busco sempre entregar projetos que impactam e encantam.',
      'about.text2': 'Trabalho com tecnologias modernas e acredito que um bom código deve ser limpo, acessível e performático.',
      'about.skill1': 'HTML, CSS & JavaScript',
      'about.skill2': 'React / Vue',
      'about.skill3': 'Design responsivo',
      'about.skill4': 'UI/UX',
      'about.cardLabel': 'Anos de experiência',
      'projects.label': 'Projetos',
      'projects.title': 'Trabalhos recentes',
      'projects.project1': 'Projeto 1',
      'projects.project2': 'Projeto 2',
      'projects.project3': 'Projeto 3',
      'projects.projectTitle': 'Nome do Projeto',
      'projects.projectDesc': 'Breve descrição do projeto e das tecnologias utilizadas.',
      'projects.gymlogTitle': 'GymLog',
      'projects.gymlogDesc': 'Rastreador de treinos fullstack com React e Flask. Exercícios, treinos diários, PRs e suporte a 3 idiomas (EN, PT-BR, PT-PT).',
      'projects.taskmanagerTitle': 'Task Manager',
      'projects.taskmanagerDesc': 'Aplicação simples e útil para organizar e acompanhar tarefas do dia a dia.',
      'projects.gymremakeTitle': 'Gym Website Remake',
      'projects.gymremakeDesc': 'Redesign completo de site para academia, com foco em layout moderno, responsivo e experiência do usuário.',
      'projects.viewProject': 'Website →',
      'projects.code': 'Código →',
      'contact.label': 'Contato',
      'contact.title': 'Vamos conversar?',
      'contact.desc': 'Estou aberto a novos projetos e oportunidades. Entre em contato!',
      'footer.text': 'Feito com cuidado',
      'aria.menu': 'Abrir menu',
      'aria.menuClose': 'Fechar menu',
      'aria.lang': 'Selecionar idioma',
      'aria.fullscreen': 'Tela cheia',
      'aria.exitFullscreen': 'Sair da tela cheia'
    },
    'pt-PT': {
      'nav.home': 'Início',
      'nav.about': 'Sobre',
      'nav.projects': 'Projetos',
      'nav.contact': 'Contacto',
      'hero.tag': 'Olá, eu sou',
      'hero.name': 'Luan Nicolau',
      'hero.subtitle': 'Desenvolvedor & Criativo',
      'hero.desc': 'Crio experiências digitais que unem design e código.',
      'hero.btnProjects': 'Ver projetos',
      'hero.btnContact': 'Fale comigo',
      'hero.scroll': 'Deslize para explorar',
      'about.label': 'Sobre mim',
      'about.title': 'Um pouco da minha história',
      'about.text1': 'Sou apaixonado por transformar ideias em realidade digital. Com experiência em desenvolvimento web e design, procuro sempre entregar projetos que impactam e encantam.',
      'about.text2': 'Trabalho com tecnologias modernas e acredito que um bom código deve ser limpo, acessível e performático.',
      'about.skill1': 'HTML, CSS & JavaScript',
      'about.skill2': 'React / Vue',
      'about.skill3': 'Design responsivo',
      'about.skill4': 'UI/UX',
      'about.cardLabel': 'Anos de experiência',
      'projects.label': 'Projetos',
      'projects.title': 'Trabalhos recentes',
      'projects.project1': 'Projeto 1',
      'projects.project2': 'Projeto 2',
      'projects.project3': 'Projeto 3',
      'projects.projectTitle': 'Nome do Projeto',
      'projects.projectDesc': 'Breve descrição do projeto e das tecnologias utilizadas.',
      'projects.gymlogTitle': 'GymLog',
      'projects.gymlogDesc': 'Rastreador de treinos fullstack com React e Flask. Exercícios, treinos diários, PRs e suporte a 3 idiomas (EN, PT-BR, PT-PT).',
      'projects.taskmanagerTitle': 'Task Manager',
      'projects.taskmanagerDesc': 'Aplicação simples e útil para organizar e acompanhar tarefas do dia a dia.',
      'projects.gymremakeTitle': 'Gym Website Remake',
      'projects.gymremakeDesc': 'Redesign completo de site para academia, com foco em layout moderno, responsivo e experiência do utilizador.',
      'projects.viewProject': 'Website →',
      'projects.code': 'Código →',
      'contact.label': 'Contacto',
      'contact.title': 'Vamos conversar?',
      'contact.desc': 'Estou aberto a novos projetos e oportunidades. Entre em contacto!',
      'footer.text': 'Feito com cuidado',
      'aria.menu': 'Abrir menu',
      'aria.menuClose': 'Fechar menu',
      'aria.lang': 'Selecionar idioma',
      'aria.fullscreen': 'Tela cheia',
      'aria.exitFullscreen': 'Sair da tela cheia'
    },
    'en': {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'hero.tag': "Hi, I'm",
      'hero.name': 'Luan Nicolau',
      'hero.subtitle': 'Developer & Creative',
      'hero.desc': 'I create digital experiences that combine design and code.',
      'hero.btnProjects': 'View projects',
      'hero.btnContact': 'Get in touch',
      'hero.scroll': 'Scroll to explore',
      'about.label': 'About me',
      'about.title': 'A bit of my story',
      'about.text1': "I'm passionate about turning ideas into digital reality. With experience in web development and design, I always aim to deliver projects that impact and delight.",
      'about.text2': 'I work with modern technologies and believe that good code should be clean, accessible and performant.',
      'about.skill1': 'HTML, CSS & JavaScript',
      'about.skill2': 'React / Vue',
      'about.skill3': 'Responsive design',
      'about.skill4': 'UI/UX',
      'about.cardLabel': 'Years of experience',
      'projects.label': 'Projects',
      'projects.title': 'Recent work',
      'projects.project1': 'Project 1',
      'projects.project2': 'Project 2',
      'projects.project3': 'Project 3',
      'projects.projectTitle': 'Project name',
      'projects.projectDesc': 'Short description of the project and technologies used.',
      'projects.gymlogTitle': 'GymLog',
      'projects.gymlogDesc': 'Fullstack gym workout tracker with React and Flask. Manage exercises, daily workouts, PRs, and switch between 3 languages (EN, PT-BR, PT-PT).',
      'projects.taskmanagerTitle': 'Task Manager',
      'projects.taskmanagerDesc': 'A simple but useful app to keep track of your daily tasks.',
      'projects.gymremakeTitle': 'Gym Website Remake',
      'projects.gymremakeDesc': 'Complete gym website redesign with a modern, responsive layout and focus on user experience.',
      'projects.viewProject': 'Website →',
      'projects.code': 'Code →',
      'contact.label': 'Contact',
      'contact.title': "Let's talk?",
      'contact.desc': "I'm open to new projects and opportunities. Get in touch!",
      'footer.text': 'Made with care',
      'aria.menu': 'Open menu',
      'aria.menuClose': 'Close menu',
      'aria.lang': 'Select language',
      'aria.fullscreen': 'Fullscreen',
      'aria.exitFullscreen': 'Exit fullscreen'
    }
  };

  var langLabels = { 'pt-BR': 'PT-BR', 'pt-PT': 'PT-PT', 'en': 'EN' };
  var langIcons = { 'pt-BR': 'images/brazil.png', 'pt-PT': 'images/portugal.png', 'en': 'images/united-states.png' };

  function getStoredLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && translations[stored]) return stored;
    } catch (e) {}
    return 'pt-BR';
  }

  function setLang(lang) {
    if (!translations[lang]) return;
    document.documentElement.lang = lang === 'en' ? 'en' : lang;
    document.querySelector('title').textContent = lang === 'en' ? 'Luan Nicolau | Portfolio' : 'Luan Nicolau — Portfolio';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[lang][key]) el.textContent = translations[lang][key];
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (translations[lang][key]) el.setAttribute('aria-label', translations[lang][key]);
    });

    var trigger = document.getElementById('lang-trigger');
    if (trigger) {
      var current = trigger.querySelector('.lang-current');
      if (current) current.textContent = langLabels[lang];
      trigger.setAttribute('aria-label', translations[lang]['aria.lang']);
    }
    var btnIcon = document.getElementById('lang-btn-icon');
    if (btnIcon && langIcons[lang]) btnIcon.src = langIcons[lang];

    document.querySelectorAll('.lang-list li').forEach(function (li) {
      li.classList.toggle('active', li.getAttribute('data-lang') === lang);
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  // Ano no footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Aplicar idioma guardado ao carregar
  setLang(getStoredLang());

  // Seletor de idioma
  var langTrigger = document.getElementById('lang-trigger');
  var langDropdown = document.getElementById('lang-dropdown');
  var langSwitcher = document.querySelector('.lang-switcher');

  if (langTrigger && langDropdown) {
    langTrigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = langDropdown.hidden === false;
      langDropdown.hidden = isOpen;
      langSwitcher.classList.toggle('open', !isOpen);
      langTrigger.setAttribute('aria-expanded', !isOpen);
    });

    langDropdown.addEventListener('click', function (e) {
      e.stopPropagation();
    });

    langDropdown.querySelectorAll('[data-lang]').forEach(function (li) {
      li.addEventListener('click', function () {
        var lang = this.getAttribute('data-lang');
        setLang(lang);
        langDropdown.hidden = true;
        langSwitcher.classList.remove('open');
        langTrigger.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', function () {
      langDropdown.hidden = true;
      langSwitcher.classList.remove('open');
      if (langTrigger) langTrigger.setAttribute('aria-expanded', 'false');
    });
  }

  // Menu mobile
  var nav = document.querySelector('.header .nav');
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelectorAll('.nav-links a');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('active');
      var isActive = nav.classList.contains('active');
      var key = isActive ? 'aria.menuClose' : 'aria.menu';
      var t = translations[getStoredLang()];
      toggle.setAttribute('aria-label', t ? t[key] : 'Menu');
    });
  }

  links.forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768 && nav) nav.classList.remove('active');
    });
  });

  document.addEventListener('click', function (e) {
    if (nav && nav.classList.contains('active') && !nav.contains(e.target)) {
      nav.classList.remove('active');
    }
  });

  // Animação dos cards ao entrar na viewport
  var cards = document.querySelectorAll('.project-card[data-aos]');
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  cards.forEach(function (card) {
    observer.observe(card);
  });

  // Modal do projeto (expandir ao clicar no card)
  var modal = document.getElementById('project-modal');
  var modalBackdrop = modal && modal.querySelector('.project-modal-backdrop');
  var modalClose = modal && modal.querySelector('.project-modal-close');
  var modalTitle = modal && modal.querySelector('.project-modal-title');
  var modalDesc = modal && modal.querySelector('.project-modal-desc');
  var modalImg = modal && modal.querySelector('.project-modal-img');
  var modalTech = modal && modal.querySelector('.project-modal-tech');
  var modalWebsite = modal && modal.querySelector('.project-modal-website');
  var modalCode = modal && modal.querySelector('.project-modal-code');
  var modalGallery = modal && modal.querySelector('.project-modal-gallery');
  var modalThumbs = modal && modal.querySelector('.project-modal-thumbs');
  var modalPrev = modal && modal.querySelector('.project-modal-prev');
  var modalNext = modal && modal.querySelector('.project-modal-next');
  var modalFullscreen = modal && modal.querySelector('.project-modal-fullscreen');

  var fullscreenViewer = document.getElementById('fullscreen-viewer');
  var fullscreenImg = fullscreenViewer && fullscreenViewer.querySelector('.fullscreen-viewer-img');
  var fullscreenClose = fullscreenViewer && fullscreenViewer.querySelector('.fullscreen-viewer-close');
  var fullscreenPrev = fullscreenViewer && fullscreenViewer.querySelector('.fullscreen-viewer-prev');
  var fullscreenNext = fullscreenViewer && fullscreenViewer.querySelector('.fullscreen-viewer-next');
  var fullscreenThumbs = fullscreenViewer && fullscreenViewer.querySelector('.fullscreen-viewer-thumbs');

  var currentImages = [];
  var currentImageIndex = 0;

  function updateModalThumbsActive() {
    if (!modalThumbs) return;
    modalThumbs.querySelectorAll('.thumb').forEach(function (el, i) {
      el.classList.toggle('active', i === currentImageIndex);
    });
  }

  function openProjectModal(card) {
    if (!modal) return;
    var titleEl = card.querySelector('.project-info h3');
    var descEl = card.querySelector('.project-info p');
    var imagesStr = card.getAttribute('data-images') || '';
    var techStr = card.getAttribute('data-tech') || '';
    currentImages = imagesStr ? imagesStr.split(',').map(function (s) { return s.trim(); }) : [];
    currentImageIndex = 0;

    modalTitle.textContent = titleEl ? titleEl.textContent : '';
    modalDesc.textContent = descEl ? descEl.textContent : '';
    modalWebsite.href = card.getAttribute('data-website') || '#';
    modalCode.href = card.getAttribute('data-code') || '#';

    if (currentImages.length > 0) {
      modalImg.src = currentImages[0];
      modalImg.alt = titleEl ? titleEl.textContent : 'Preview';
    }
    if (currentImages.length <= 1) {
      modalGallery.classList.add('single');
      if (modalThumbs) { modalThumbs.classList.add('hidden'); modalThumbs.innerHTML = ''; }
    } else {
      modalGallery.classList.remove('single');
      if (modalThumbs) {
        modalThumbs.classList.remove('hidden');
        modalThumbs.innerHTML = '';
        currentImages.forEach(function (src, i) {
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'thumb' + (i === 0 ? ' active' : '');
          btn.setAttribute('aria-label', 'Ver imagem ' + (i + 1));
          var img = document.createElement('img');
          img.src = src;
          img.alt = '';
          btn.appendChild(img);
          btn.addEventListener('click', function () {
            showModalImage(i);
          });
          modalThumbs.appendChild(btn);
        });
      }
    }

    modalTech.innerHTML = '';
    if (techStr) {
      techStr.split(',').forEach(function (t) {
        var li = document.createElement('li');
        li.textContent = t.trim();
        modalTech.appendChild(li);
      });
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function showModalImage(index) {
    if (currentImages.length === 0) return;
    currentImageIndex = (index + currentImages.length) % currentImages.length;
    modalImg.src = currentImages[currentImageIndex];
    updateModalThumbsActive();
  }

  document.querySelectorAll('.project-card').forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;
      e.preventDefault();
      openProjectModal(card);
    });
    card.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      if (e.target.closest('a')) return;
      e.preventDefault();
      openProjectModal(card);
    });
  });

  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);
  if (modalClose) modalClose.addEventListener('click', closeProjectModal);

  document.addEventListener('keydown', function (e) {
    var isFullscreen = fullscreenViewer && fullscreenViewer.classList.contains('active');
    if (isFullscreen) {
      if (e.key === 'Escape') closeFullscreenViewer();
      else if (e.key === 'ArrowLeft' && currentImages.length > 1) { showModalImage(currentImageIndex - 1); updateFullscreenImage(); updateFullscreenThumbsActive(); }
      else if (e.key === 'ArrowRight' && currentImages.length > 1) { showModalImage(currentImageIndex + 1); updateFullscreenImage(); updateFullscreenThumbsActive(); }
      return;
    }
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) closeProjectModal();
  });

  if (modalPrev) modalPrev.addEventListener('click', function () { showModalImage(currentImageIndex - 1); });
  if (modalNext) modalNext.addEventListener('click', function () { showModalImage(currentImageIndex + 1); });

  function updateFullscreenImage() {
    if (fullscreenImg && currentImages.length > 0) {
      fullscreenImg.src = currentImages[currentImageIndex];
      fullscreenImg.alt = modalTitle ? modalTitle.textContent : 'Preview';
    }
  }

  function updateFullscreenThumbsActive() {
    if (!fullscreenThumbs) return;
    fullscreenThumbs.querySelectorAll('.thumb').forEach(function (el, i) {
      el.classList.toggle('active', i === currentImageIndex);
    });
  }

  function openFullscreenViewer() {
    if (!fullscreenViewer || currentImages.length === 0) return;
    fullscreenViewer.classList.add('active');
    fullscreenViewer.classList.toggle('single', currentImages.length <= 1);
    updateFullscreenImage();
    if (fullscreenThumbs) {
      fullscreenThumbs.classList.toggle('hidden', currentImages.length <= 1);
      fullscreenThumbs.innerHTML = '';
      if (currentImages.length > 1) {
        currentImages.forEach(function (src, i) {
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'thumb' + (i === currentImageIndex ? ' active' : '');
          btn.setAttribute('aria-label', 'Ver imagem ' + (i + 1));
          var img = document.createElement('img');
          img.src = src;
          img.alt = '';
          btn.appendChild(img);
          btn.addEventListener('click', function () {
            showModalImage(i);
            updateFullscreenImage();
            updateFullscreenThumbsActive();
          });
          fullscreenThumbs.appendChild(btn);
        });
      }
    }
    fullscreenViewer.setAttribute('aria-hidden', 'false');
    var el = fullscreenViewer;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
    else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
  }

  function closeFullscreenViewer() {
    var doc = document;
    if (doc.fullscreenElement || doc.webkitFullscreenElement || doc.msFullscreenElement || doc.mozFullScreenElement) {
      if (doc.exitFullscreen) doc.exitFullscreen();
      else if (doc.webkitExitFullscreen) doc.webkitExitFullscreen();
      else if (doc.msExitFullscreen) doc.msExitFullscreen();
      else if (doc.mozCancelFullScreen) doc.mozCancelFullScreen();
    }
    fullscreenViewer.classList.remove('active');
    fullscreenViewer.setAttribute('aria-hidden', 'true');
    if (modalImg) modalImg.src = currentImages[currentImageIndex] || '';
    updateModalThumbsActive();
  }

  function handleFullscreenChange() {
    var doc = document;
    var isFullscreen = !!(doc.fullscreenElement || doc.webkitFullscreenElement || doc.msFullscreenElement || doc.mozFullScreenElement);
    if (!isFullscreen && fullscreenViewer && fullscreenViewer.classList.contains('active')) {
      fullscreenViewer.classList.remove('active');
      fullscreenViewer.setAttribute('aria-hidden', 'true');
      if (modalImg) modalImg.src = currentImages[currentImageIndex] || '';
      updateModalThumbsActive();
    }
  }

  document.addEventListener('fullscreenchange', handleFullscreenChange);
  document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
  document.addEventListener('MSFullscreenChange', handleFullscreenChange);
  document.addEventListener('mozfullscreenchange', handleFullscreenChange);

  if (modalFullscreen) modalFullscreen.addEventListener('click', openFullscreenViewer);
  if (fullscreenClose) fullscreenClose.addEventListener('click', closeFullscreenViewer);
  if (fullscreenPrev) fullscreenPrev.addEventListener('click', function () {
    showModalImage(currentImageIndex - 1);
    updateFullscreenImage();
    updateFullscreenThumbsActive();
  });
  if (fullscreenNext) fullscreenNext.addEventListener('click', function () {
    showModalImage(currentImageIndex + 1);
    updateFullscreenImage();
    updateFullscreenThumbsActive();
  });
})();

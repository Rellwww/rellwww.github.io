const root = document.documentElement;
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const themeButton = document.querySelector('.theme-toggle');
const languageButton = document.querySelector('.language-toggle');
const figureDialog = document.querySelector('#figure-viewer');
const figureImage = document.querySelector('#figure-image');
const figureCaption = document.querySelector('#figure-caption');
const englishTitle = document.title;
let language = 'en';
let activeFigureLink = null;

// Preserve English markup so switching back restores the original content.
const translatedContent = Array.from(document.querySelectorAll('[data-zh]'), element => ({
  element, en: element.innerHTML, zh: element.dataset.zh
}));
const translatedAttributes = ['aria-label', 'alt'].flatMap(attribute =>
  Array.from(document.querySelectorAll(`[data-zh-${attribute}]`), element => ({
    element, attribute,
    en: element.getAttribute(attribute),
    zh: element.getAttribute(`data-zh-${attribute}`)
  }))
);

function readLanguage() {
  try { return localStorage.getItem('dingli-language') === 'zh' ? 'zh' : 'en'; }
  catch (_) { return language; }
}

function syncMenuButton() {
  const expanded = !navigation.hidden;
  const label = language === 'zh'
    ? (expanded ? '关闭目录' : '打开目录')
    : (expanded ? 'Close menu' : 'Open menu');
  menuButton.setAttribute('aria-expanded', String(expanded));
  menuButton.setAttribute('aria-label', label);
  menuButton.title = label;
}

function setMenuOpen(open, restoreFocus = false) {
  navigation.hidden = !open;
  syncMenuButton();
  if (restoreFocus) menuButton.focus();
}

function syncThemeButton() {
  const dark = root.dataset.theme === 'dark';
  const label = language === 'zh'
    ? (dark ? '切换为浅色模式' : '切换为深色模式')
    : (dark ? 'Switch to light theme' : 'Switch to dark theme');
  themeButton.setAttribute('aria-pressed', String(dark));
  themeButton.setAttribute('aria-label', label);
  themeButton.title = label;
}

function syncFigureCaption() {
  if (!activeFigureLink) return;
  const caption = language === 'zh'
    ? (activeFigureLink.dataset.figureTitleZh || activeFigureLink.dataset.figureTitle || '论文配图')
    : (activeFigureLink.dataset.figureTitle || 'Research figure');
  figureImage.alt = caption;
  figureCaption.textContent = caption;
}

function applyLanguage(nextLanguage, persist = false) {
  language = nextLanguage === 'zh' ? 'zh' : 'en';
  translatedContent.forEach(entry => { entry.element.innerHTML = entry[language]; });
  translatedAttributes.forEach(entry => { entry.element.setAttribute(entry.attribute, entry[language]); });
  root.lang = language === 'zh' ? 'zh-Hans' : 'en';
  document.title = language === 'zh' ? (root.dataset.titleZh || englishTitle) : englishTitle;
  languageButton.setAttribute('aria-pressed', String(language === 'zh'));
  const label = language === 'zh' ? '切换为英文' : 'Switch to Chinese';
  languageButton.setAttribute('aria-label', label);
  languageButton.title = label;
  languageButton.querySelectorAll('[data-language]').forEach(span => {
    span.classList.toggle('is-active', span.dataset.language === language);
  });
  syncMenuButton();
  syncThemeButton();
  syncFigureCaption();
  if (persist) {
    try { localStorage.setItem('dingli-language', language); } catch (_) {}
  }
}

menuButton.addEventListener('click', () => setMenuOpen(navigation.hidden));
menuButton.addEventListener('keydown', event => {
  if (event.key !== 'ArrowDown') return;
  event.preventDefault();
  setMenuOpen(true);
  navigation.querySelector('a')?.focus();
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) setMenuOpen(false);
});
document.addEventListener('click', event => {
  if (!navigation.hidden && !navigation.contains(event.target) && !menuButton.contains(event.target)) {
    setMenuOpen(false);
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !navigation.hidden) setMenuOpen(false, true);
});

themeButton.addEventListener('click', () => {
  const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = theme;
  try { localStorage.setItem('dingli-theme', theme); } catch (_) {}
  syncThemeButton();
});
languageButton.addEventListener('click', () => applyLanguage(language === 'en' ? 'zh' : 'en', true));
applyLanguage(readLanguage());
window.addEventListener('pageshow', () => {
  const preferred = readLanguage();
  if (preferred !== language) applyLanguage(preferred);
});

document.querySelectorAll('.figure-link').forEach(link => {
  link.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (typeof figureDialog.showModal !== 'function') return;
    event.preventDefault();
    activeFigureLink = link;
    figureImage.src = link.href;
    syncFigureCaption();
    figureDialog.showModal();
  });
});
document.querySelector('.close-figure').addEventListener('click', () => figureDialog.close());
figureDialog.addEventListener('click', event => {
  if (event.target !== figureDialog) return;
  const bounds = figureDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
    figureDialog.close();
  }
});

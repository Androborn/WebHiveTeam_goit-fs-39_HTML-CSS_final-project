const currentOrigin = location.origin;
const currentPath =
  location.pathname === '/' ? '/index.html' : location.pathname;
const anchors = document.querySelectorAll('a.link');
anchors.forEach(a => {
  const url = new URL(a.href);
  const isActive =
    url.origin === currentOrigin && url.pathname === currentPath;
  if (isActive) {
    a.classList.add('link--active');
  }
});

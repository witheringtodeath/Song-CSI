// witheringtodeath_ projects: download links and gentle reveal-on-scroll.
(function () {
  // The Mac app is attached to the newest GitHub release as Song-CSI-mac-arm64.zip.
  // On github.io the user and repository come from the address; set SITE_REPO ("user/repo") if you use your own domain.
  var SITE_REPO = '';
  var ASSET = 'Song-CSI-mac-arm64.zip';
  function repo() {
    if (SITE_REPO) return SITE_REPO;
    var host = location.hostname;
    if (!/\.github\.io$/i.test(host)) return '';
    var user = host.split('.')[0], first = location.pathname.split('/').filter(Boolean)[0] || '';
    var isPage = !first || first === 'song-csi' || first === 'coop-radar' || /\.html?$/i.test(first);
    return user + '/' + (isPage ? user + '.github.io' : first);
  }
  var r = repo();
  document.querySelectorAll('[data-download]').forEach(function (a) {
    if (r) {
      a.href = 'https://github.com/' + r + '/releases/latest/download/' + ASSET;
    } else {
      a.title = 'The download link works once the site is on GitHub Pages with a release attached.';
    }
  });
  document.querySelectorAll('[data-releases]').forEach(function (a) { a.href = r ? 'https://github.com/' + r + '/releases' : '#get-it'; });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
})();

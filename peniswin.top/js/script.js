var moonPath = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
var sunPath = '<circle cx="12" cy="12" r="4.2"></circle><path d="M12 2.5v2.4M12 19.1v2.4M4.4 4.4l1.7 1.7M17.9 17.9l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.4 19.6l1.7-1.7M17.9 6.1l1.7-1.7"></path>';
var root = document.documentElement;
var toggleBtn = document.getElementById('themeToggle');
var icon = document.getElementById('themeIcon');

function applyTheme(theme){
  if(theme === 'light'){
    root.setAttribute('data-theme','light');
    icon.innerHTML = sunPath;
  } else {
    root.removeAttribute('data-theme');
    icon.innerHTML = moonPath;
  }
}

applyTheme('dark');

toggleBtn.addEventListener('click', function(){
  var isLight = root.getAttribute('data-theme') === 'light';
  applyTheme(isLight ? 'dark' : 'light');
});

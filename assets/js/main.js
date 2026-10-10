// Current year in footer
(function() {
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();

// IntersectionObserver reveal animations
(function() {
  var elements = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(function(el) { el.classList.add('show'); });
    return;
  }
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  elements.forEach(function(el) { observer.observe(el); });
})();

// jQuery: smooth scroll for in-page anchors (enhanced)
$(document).on('click', 'a[href^="#"]', function(e) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    e.preventDefault();
    $('html, body').stop().animate({ scrollTop: target.offset().top - 72 }, 500, 'swing');
  }
});



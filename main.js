

// ==========================================
// نافذة الترحيب بالمهندس المناقش
// ==========================================
(function () {
  const overlay = document.getElementById('welcomeOverlay');
  const welcomeBtn = document.getElementById('welcomeBtn');

  if (!overlay) return; // النافذة موجودة فقط في الصفحة الرئيسية

  // إظهار النافذة بعد 400ms من تحميل الصفحة
  window.addEventListener('load', () => {
    setTimeout(() => {
      overlay.classList.add('show');
      document.body.style.overflow = 'hidden'; // منع التمرير
    }, 400);
  });

  // إغلاق النافذة عند الضغط على الزر
  function closeWelcome() {
    overlay.classList.remove('show');
    overlay.classList.add('hide');
    document.body.style.overflow = ''; // استعادة التمرير
    setTimeout(() => overlay.remove(), 500);
  }

  if (welcomeBtn) {
    welcomeBtn.addEventListener('click', closeWelcome);
  }

  // إغلاق النافذة عند الضغط خارجها
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeWelcome();
  });

  // إغلاق النافذة بمفتاح Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('show')) {
      closeWelcome();
    }
  });
})();


document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.getElementById('theme-text');

  // 1. التحقق من التفضيل المحفوظ سابقاً
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeIcon) themeIcon.textContent = '☀️';
    if (themeText) themeText.textContent = 'الوضع الفاتح';
  }

  // 2. عند الضغط على الزر
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      
      const isDark = document.body.classList.contains('dark-mode');
      
      // تغيير الأيقونة والنص
      if (themeIcon) themeIcon.textContent = isDark ? '☀️' : '🌙';
      if (themeText) themeText.textContent = isDark ? 'الوضع الفاتح' : 'الوضع الداكن';
      
      // حفظ التفضيل في المتصفح
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
});
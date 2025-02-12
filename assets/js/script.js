
// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// // 滚动时改变导航栏样式
// window.addEventListener('scroll', function() {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > 50) {
//         navbar.style.background = 'rgba(51, 51, 51, 0.9)';
//     } else {
//         navbar.style.background = '#333';
//     }
// });

// 表单提交处理
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // 这里添加表单提交逻辑
        alert('表单提交成功！');
        this.reset();
    });
}

// 添加页面加载动画
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});


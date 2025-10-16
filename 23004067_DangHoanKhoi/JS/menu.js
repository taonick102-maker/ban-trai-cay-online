// Xử lý đổi màu khi chọn menu
const links = document.querySelectorAll('.menu-doc a');
links.forEach(link => {
    link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    });
});

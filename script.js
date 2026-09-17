const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
menu?.addEventListener('click', () => {
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  if (window.innerWidth <= 700 && links.style.display === 'flex') {
    links.style.position = 'absolute';
    links.style.top = '68px';
    links.style.right = '20px';
    links.style.flexDirection = 'column';
    links.style.background = '#11141b';
    links.style.padding = '18px';
    links.style.border = '1px solid #292d37';
    links.style.borderRadius = '12px';
  }
});

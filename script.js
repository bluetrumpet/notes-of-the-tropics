const winds = document.getElementById('winds');
const activeDiv = winds.closest('.active');

winds.addEventListener('mouseenter', () => {
  activeDiv.style.width = '50%';
});
winds.addEventListener('mouseleave', () => {
  activeDiv.style.width = '30%';
});

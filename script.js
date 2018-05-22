const list = document.querySelector('ul');
const toggler = document.querySelector('.triangle');
toggler.addEventListener('click',()=>{
  list.classList.toggle('show');
  toggler.classList.toggle('flip')
})
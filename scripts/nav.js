let isActive = false;

function toggle () {
  if (isActive) { 
    document.querySelector('.hamburger').classList.remove('active')
    document.querySelector('.shadow').classList.remove('active')
    document.querySelector('.mobile-nav').classList.remove('active')
    isActive = false;
  } else {
    document.querySelector('.hamburger').classList.add('active')
    document.querySelector('.shadow').classList.add('active')
    document.querySelector('.mobile-nav').classList.add('active')
    isActive = true;
  }
}
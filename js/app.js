const navbar = document.querySelector('.navbar');
const close = document.querySelector('.close-btn');
const modale = document.querySelector('.modale');
const gallery_item = document.querySelectorAll('.gallery_item');
const imgModale = document.querySelector('#modal-img');


// navbarScroll
window.addEventListener('scroll', function() {
  var scroll = navbar.scrollTop;
  if (this.scrollY >= 550) {
    navbar.style.backgroundColor = '#000';
  } else {
    navbar.style.backgroundColor = 'transparent';
  }
});


// Modale

gallery_item.forEach((el, i, arr) => {
  arr[i].addEventListener('click', () => {
    modale.style.display = 'block';
    img.forEach( (a, i,x) =>{imgModale.src = el.firstElementChild.src});
  });
});

close.addEventListener('click',()=>{
    modale.style.display = 'none';
});

//Lax js

window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}

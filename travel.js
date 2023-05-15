// for navbar
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick =() => {
    navbar.classList.toggle('active');

}

// for search bar
let searchForm = document.querySelector('search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}


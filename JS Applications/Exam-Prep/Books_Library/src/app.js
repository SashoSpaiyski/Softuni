<<<<<<< HEAD
import { logout } from './api/data.js';
import { render, page } from './lib.js';
import { getUserData } from './util.js';
import { dashboardPage } from './views/dashboard.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { detailsPage } from './views/details.js';
import { addBookPage } from './views/add-book.js';
import { editPage } from './views/edit.js';
import { myBooksPage } from './views/my-books.js';

const root = document.querySelector('main');
document.querySelector('#logoutBtn').addEventListener('click', onLogout);

page(decorateCtx);
page('/', dashboardPage);
page('/login', loginPage);
page('/register', registerPage);
page('/add-book', addBookPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/my-books', myBooksPage);

updateUserNav();

page.start();

function decorateCtx(ctx, next){
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav=updateUserNav;

    next();
}

function updateUserNav(){
    const userData = getUserData();
    if(userData){
        document.querySelector('#user').style.display = 'inline-block';
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`;
        document.querySelector('#guest').style.display = 'none';
    } else {
        document.querySelector('#user').style.display = 'none';
        document.querySelector('#guest').style.display = 'inline-block';
    }
}

function onLogout(){
    logout();
    updateUserNav();
    page.redirect('/');
=======
import { logout } from './api/data.js';
import { render, page } from './lib.js';
import { getUserData } from './util.js';
import { dashboardPage } from './views/dashboard.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { detailsPage } from './views/details.js';
import { addBookPage } from './views/add-book.js';
import { editPage } from './views/edit.js';
import { myBooksPage } from './views/my-books.js';

const root = document.querySelector('main');
document.querySelector('#logoutBtn').addEventListener('click', onLogout);

page(decorateCtx);
page('/', dashboardPage);
page('/login', loginPage);
page('/register', registerPage);
page('/add-book', addBookPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/my-books', myBooksPage);

updateUserNav();

page.start();

function decorateCtx(ctx, next){
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav=updateUserNav;

    next();
}

function updateUserNav(){
    const userData = getUserData();
    if(userData){
        document.querySelector('#user').style.display = 'inline-block';
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`;
        document.querySelector('#guest').style.display = 'none';
    } else {
        document.querySelector('#user').style.display = 'none';
        document.querySelector('#guest').style.display = 'inline-block';
    }
}

function onLogout(){
    logout();
    updateUserNav();
    page.redirect('/');
>>>>>>> b784f9252f16cdbfa9606cbc4e8408d538877fdf
}
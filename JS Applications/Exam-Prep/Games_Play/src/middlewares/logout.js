<<<<<<< HEAD
import { page } from '../lib.js';
import { logout } from '../api/data.js';
import { updateUserNav } from '../middlewares/decorateCtx.js';

export default function attachLogoutEventListener() {
    document.querySelector('#logoutBtn').addEventListener('click', onLogout);

    function onLogout() {
        logout();
        updateUserNav();
        page.redirect('/');
    }
=======
import { page } from '../lib.js';
import { logout } from '../api/data.js';
import { updateUserNav } from '../middlewares/decorateCtx.js';

export default function attachLogoutEventListener() {
    document.querySelector('#logoutBtn').addEventListener('click', onLogout);

    function onLogout() {
        logout();
        updateUserNav();
        page.redirect('/');
    }
>>>>>>> b784f9252f16cdbfa9606cbc4e8408d538877fdf
}
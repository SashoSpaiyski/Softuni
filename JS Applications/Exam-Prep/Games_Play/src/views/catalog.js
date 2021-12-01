<<<<<<< HEAD
import { html } from '../lib.js';
import { getAllGames } from '../api/data.js';

const catalogTemplate = (games) => html`
<section id="catalog-page">
    <h1>All Games</h1>
    ${games.length>0
        ? html`${games.map(gameCard)}`
        : html`<h3 class="no-articles">No articles yet</h3>`}
</section>`;

const gameCard = (game) => html`
<div class="allGames">
    <div class="allGames-info">
        <img src=${game.imageUrl}>
        <h6>${game.category}</h6>
        <h2>${game.title}</h2>
        <a href="/details/${game._id}" class="details-button">Details</a>
    </div>
</div>`;

export async function catalogPage(ctx) {
    const games = await getAllGames();
    ctx.render(catalogTemplate(games));
=======
import { html } from '../lib.js';
import { getAllGames } from '../api/data.js';

const catalogTemplate = (games) => html`
<section id="catalog-page">
    <h1>All Games</h1>
    ${games.length>0
        ? html`${games.map(gameCard)}`
        : html`<h3 class="no-articles">No articles yet</h3>`}
</section>`;

const gameCard = (game) => html`
<div class="allGames">
    <div class="allGames-info">
        <img src=${game.imageUrl}>
        <h6>${game.category}</h6>
        <h2>${game.title}</h2>
        <a href="/details/${game._id}" class="details-button">Details</a>
    </div>
</div>`;

export async function catalogPage(ctx) {
    const games = await getAllGames();
    ctx.render(catalogTemplate(games));
>>>>>>> b784f9252f16cdbfa9606cbc4e8408d538877fdf
}
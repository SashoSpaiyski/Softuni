<<<<<<< HEAD
import { html } from '../lib.js';
import { getGameById, deleteGame, getComments, addComment } from '../api/data.js';
import { getUserData } from '../util.js';

const detailsTemplate = (game, isOwner, onDelete, comments, seeAddComment, onSubmit) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">${game.summary}</p>

        <div class="details-comments">
            <h2>Comments:</h2>
            ${comments.length > 0 ? html`<ul>${comments.map(commentCard)}</ul>` : html`<p class="no-comment">No
                comments.
            </p>`}
        </div>

        ${isOwner ? html`<div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
        </div>` : null}

        ${seeAddComment ? addCommentCard(onSubmit) : null};
    </div>
</section>`;

const commentCard = (comment) => html`
<li class="comment">
    <p>Content: ${comment.comment}</p>
</li>`

const addCommentCard = (onSubmit) => html`
<article class="create-comment">
    <label>Add new comment:</label>
    <form @submit=${onSubmit} class="form">
        <textarea name="comment" placeholder="Comment......"></textarea>
        <input class="btn submit" type="submit" value="Add Comment">
    </form>
</article>`

export async function detailsPage(ctx) {
    const userData = getUserData();
    const [game, comments] = await Promise.all([
        getGameById(ctx.params.id),
        getComments(ctx.params.id)]);

    const isOwner = userData && userData.id == game._ownerId;
    const seeAddComment = userData && !isOwner;

    ctx.render(detailsTemplate(game, isOwner, onDelete, comments, seeAddComment, onSubmit));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this game?');
        if (choice) {
            await deleteGame(game._id);
            ctx.page.redirect('/');
        }
    }

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const comment = formData.get('comment');

        event.target.reset();
        await addComment(game._id, comment);
        ctx.page.redirect('/details/'+game._id);
    }
=======
import { html } from '../lib.js';
import { getGameById, deleteGame, getComments, addComment } from '../api/data.js';
import { getUserData } from '../util.js';

const detailsTemplate = (game, isOwner, onDelete, comments, seeAddComment, onSubmit) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">${game.summary}</p>

        <div class="details-comments">
            <h2>Comments:</h2>
            ${comments.length > 0 ? html`<ul>${comments.map(commentCard)}</ul>` : html`<p class="no-comment">No
                comments.
            </p>`}
        </div>

        ${isOwner ? html`<div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
        </div>` : null}

        ${seeAddComment ? addCommentCard(onSubmit) : null};
    </div>
</section>`;

const commentCard = (comment) => html`
<li class="comment">
    <p>Content: ${comment.comment}</p>
</li>`

const addCommentCard = (onSubmit) => html`
<article class="create-comment">
    <label>Add new comment:</label>
    <form @submit=${onSubmit} class="form">
        <textarea name="comment" placeholder="Comment......"></textarea>
        <input class="btn submit" type="submit" value="Add Comment">
    </form>
</article>`

export async function detailsPage(ctx) {
    const userData = getUserData();
    const [game, comments] = await Promise.all([
        getGameById(ctx.params.id),
        getComments(ctx.params.id)]);

    const isOwner = userData && userData.id == game._ownerId;
    const seeAddComment = userData && !isOwner;

    ctx.render(detailsTemplate(game, isOwner, onDelete, comments, seeAddComment, onSubmit));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this game?');
        if (choice) {
            await deleteGame(game._id);
            ctx.page.redirect('/');
        }
    }

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const comment = formData.get('comment');

        event.target.reset();
        await addComment(game._id, comment);
        ctx.page.redirect('/details/'+game._id);
    }
>>>>>>> b784f9252f16cdbfa9606cbc4e8408d538877fdf
}
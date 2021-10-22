class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }

        if (username === this.creator) {
            throw new Error("You can't like your own story!");
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        }

        let index = this._likes.indexOf(username);
        this._likes.splice(index,1);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id){
        let commentWithId=this._comments.find(c=>c.id===id);

        if(commentWithId){
            let replyId=Number(commentWithId.id + '.' +(commentWithId.replies.length+1));
            let reply={
                id: replyId,
                username: username,
                content: content
            }

            commentWithId.replies.push(reply);

            return 'You replied successfully'
        }

        let comment = {
            id: this._comments.length+1,
            username,
            content,
            replies: []
        }

        this._comments.push(comment);
        return `${username} commented on ${this.title}`;
    }

    toString(sortingType){
        let result=[];
        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes.length}`);
        result.push(`Comments:`)

        if(this._comments.length>0){
            if(sortingType==='asc'){
                let sortedComments=this._comments.sort((a,b)=>a.id - b.id);
                for (const comment of sortedComments) {
                    result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`)
                    if(comment.replies.length>0){
                        let sortedReplies=comment.replies.sort((a,b)=>a.id-b.id);
                        for (const reply of sortedReplies) {
                            result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`)
                        }
                    }
                }
            } 
            if(sortingType==='desc'){
                let sortedComments=this._comments.sort((a,b)=>b.id - a.id);
                for (const comment of sortedComments) {
                    result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`)
                    if(comment.replies.length>0){
                        let sortedReplies=comment.replies.sort((a,b)=>b.id-a.id);
                        for (const reply of sortedReplies) {
                            result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`)
                        }
                    }
                }
            } 
            if(sortingType==='username'){
                let sortedComments=this._comments.sort((a,b)=>a.username.localeCompare(b.username));
                for (const comment of sortedComments) {
                    result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`)
                    if(comment.replies.length>0){
                        let sortedReplies=comment.replies.sort((a,b)=>a.username.localeCompare(b.username));
                        for (const reply of sortedReplies) {
                            result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`)
                        }
                    }
                }
            }
        }

        return result.join('\n');
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));





module.exports = {
    displayPosts: async (req,res) => {
        const db = req.app.get('db');
        const posts = await db.posts.getPosts();

        res.status(200).json(posts)
    },

    addPost: async (req, res) => {
        const {title, address, description} = req.body;
        const db = req.app.get('db');
        console.log(req.session);
        if(req.session.user) {
            const post = await db.posts.addPost(req.session.user.user_id, title, address, description);
            res.status(200).json(post)
        } else {
            res.status(401).json("Please sign in or create an account to post a spot.");
        }
    }
}
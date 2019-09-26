module.exports = {
    displayPosts: async (req,res) => {
        const db = req.app.get('db');
        const posts = await db.posts.getPosts();

        res.status(200).json(posts)
    },

    addPost: async (req, res) => {
        const {title, address, description} = req.body;
        const db = req.app.get('db');
        console.log(req.session.user);
        if(req.session.user) {
            const post = await db.posts.addPost(req.session.user.id, title, address, description);
            res.status(200).json(post)
        } else {
            res.status(401).json("Please sign in or create an account to post a spot.");
        }
    },

    getUserPost: async (req, res) => {
        const db = req.app.get('db');
        const posts = await db.posts.getUserPosts(req.session.user.id);
        console.log(posts);
        if(req.session.user) {
            res.status(200).json(posts);
        } else {
            res.status(404).json("Nothing found here.");
        }
    } 
}
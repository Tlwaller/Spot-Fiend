module.exports = {
    displayPosts: async (req,res) => {
        const db = req.app.get('db');
        const posts = await db.posts.getPosts();

        res.status(200).json(posts)
    },

    addPost: async (req, res) => {
        const {title, address, latitude, longitude, description, url} = req.body;
        const db = req.app.get('db');
        if(req.session.user) {
            const post = await db.posts.addPost(req.session.user.id, title, address, latitude, longitude, description, url);
            res.status(200).json(post)
        } else {
            res.status(401).json("Please sign in or create an account to post a spot.");
        }
    },

    getUserPost: async (req, res) => {
        const db = req.app.get('db');
        const posts = await db.posts.getUserPosts(req.session.user.id);
        if(req.session.user) {
            res.status(200).json(posts);
        } else {
            res.status(404).json("Nothing found here.");
        }
    },

    deletePost: async (req, res) => {
        const {spot_id} = req.body;
        const db = req.app.get('db');
        const posts = await db.posts.deletePost(spot_id, req.session.user.id);

        if(req.session.user) {
            res.status(200).json(posts);
        } else {
            res.status(404).json("Nothing found here.");
        }
    },

    editPost: async (req, res) => {
        const {spot_id, title, address, longitude, latitude, description} = req.body;
        const db = req.app.get('db');
        const posts = await db.posts.updatePost(spot_id, title, address, longitude, latitude, description, req.session.user.id);

        if(req.session.user) {
            res.status(200).json(posts);
        } else {
            res.status(404).json("Nothing found here.");
        }
    }
}
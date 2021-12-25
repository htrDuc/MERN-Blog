const router = require("express").Router();
const Post = require("../models/Post");

//CREATE
router.post("/", async (req, res) => {
    const newPost = await Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err)
    }
})


//UPDATE
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
            try {
                const updatePost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                }, {new: true}) // response giá trị mới nhất

                res.status(200).json(updatePost);
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(401).json("You can update only your post")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

//DELETE
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json("Post has been deleted...");
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(401).json("You can update only your post")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET ALL POST
router.get("/", async (req, res) => {
    const username = req.query.user; //get theo username
    const catName = req.query.cat;
    console.log(catName)//get theo name category
    console.log(username)//get theo name category
    try {
        let posts;
        if (username) {
            posts = await Post.find({username});
        } else if (catName) {
            posts = await Post.find({
                categories: {
                    $in: [catName]
                }
            })
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;
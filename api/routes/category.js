const router = require("express").Router();
const Category = require("../models/Category");

//CREATE NEW CATEGORY
router.post("/", async (req, res) => {
    const newCat = new Category(req.body);
    const cats = await Category.find();
    for(let cat of cats){
       if(cat.name === newCat){
           try {
               const savedCat = await newCat.save();
               res.status(200).json(savedCat);
           } catch (err) {
               res.status(500).json(err)
           }
       }else {
           res.json("Category already exists ")
       }
    }

})

//GET ALL CATEGORY
router.get("/", async (req, res) => {
    try {
        const cats = await Category.find();
        res.status(200).json(cats);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;
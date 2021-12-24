const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },

    }, {timestamps: true} // createdate, updatedate
);

module.exports = mongoose.model("Category", CategorySchema)
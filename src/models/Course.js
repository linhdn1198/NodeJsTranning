const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, maxlength: 255 },
        slug: { type: String, slug: 'name', unique: true },
        description: { type: String, maxlength: 600 },
        image: { type: String, maxlength: 255 },
    },
    { timestamps: true },
);

// Plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    overrideMethods: true,
    deletedAt: true,
});

module.exports = mongoose.model('Course', Course);

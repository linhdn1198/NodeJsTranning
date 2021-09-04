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

Course.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidType = ['asc', 'desc'].includes(req.query.type);

        return this.sort({
            [req.query.column]: isValidType ? req.query.type : 'desc',
        });
    }

    return this;
};

// Plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    overrideMethods: true,
    deletedAt: true,
});

module.exports = mongoose.model('Course', Course);

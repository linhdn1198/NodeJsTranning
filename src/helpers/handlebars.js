const Handlebars = require('handlebars');

module.exports = {
    sortable: (column, sort) => {
        const sortType = column == sort.column ? sort.type : 'default';
        const icons = {
            default: 'fas fa-sort',
            asc: 'fas fa-sort-down',
            desc: 'fas fa-sort-up',
        };
        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        };

        const icon = icons[sortType];
        const type = types[sortType];
        const href = Handlebars.escapeExpression(
            `?_sort&column=${column}&type=${type}`,
        );

        return new Handlebars.SafeString(
            `<a href="${href}"><i class="${icon}"></i></a>`,
        );
    },
};

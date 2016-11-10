exports.seed = function(knex) {
    return knex('comments').del()
        .then(() => {
            return knex('comments').insert([{
                user_id: 1,
                post_id: 1,
                description: "Here is a comment! yay comments",
            }, {
                user_id: 2,
                post_id: 2,
                description: "Here is a comment! yay comments",
            }, {
                user_id: 3,
                post_id: 3,
                description: "Here is a comment! yay comments",
            }]);
        });
};

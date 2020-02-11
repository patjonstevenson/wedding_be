
exports.up = function (knex) {
    return knex.schema
        .createTable("guests", Guests => {
            Guests.increments();
            Guests.string("first").notNullable();
            Guests.string("last").notNullable();
            Guests.string("email");
            Guests.string("food");
            Guests.boolean("attending");
            Guests.string("group");
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("guests");
};

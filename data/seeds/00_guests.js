
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('guests').del()
    .then(function () {
      // Inserts seed entries
      return knex('guests').insert([
        { id: 1, first: 'Robert', last: 'Stevenson', group: 'A' },
        { id: 2, first: 'Linda', last: 'Stevenson', group: 'A' },
        { id: 3, first: 'Katherine', last: 'Gomez', group: 'B' },
        { id: 4, first: 'Severo', last: 'Gomez', group: 'B' }
      ]);
    });
};

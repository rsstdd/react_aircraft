
exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        email: 'rssmtdd@gmail.com',
        avatar_url: 'https://lh3.googleusercontent.com/-7QyIZEus-dM/AAAAAAAAAAI/AAAAAAAAABs/ISCk8Q6wI3M/photo.jpg?sz=50',
        auth_id: '7657375447662830',
        name: 'Ross Todd',
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        username: 'kelsey',
        hashed_pw: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS'
      },{
        username: 'jeff',
        hashed_pw: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS'
      },

      {
        username: 'tucker',
        hashed_pw: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS'
      }]);
    });
};

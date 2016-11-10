module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/colors_dev',
    pool: {
      min: 1,
      max: 1
    }
  }
}

const Customers = require('./controllers/customers');

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.send({ message: 'fruit from crack pipe'});
    });

    app.post('/reserve', Customers.reserve);

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
}
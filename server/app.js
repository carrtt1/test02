const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { swaggerUi, specs } = require('./src/swagger/swagger-specs');

const app = express();

app.use(function(err, req, res, next) {

    console.error(err.stack);
    res.status(500).send('Error')
});

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

const musicalRouter = require('./src/routes/musical-route');

app.use('/musicals', musicalRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {explorer: true}));

app.listen(8888, () => console.log('listening on port 8888'));
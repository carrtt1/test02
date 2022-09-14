const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {

    swaggerDefinition : {
        openapi: "3.0.1",
        info: {
            title: 'Musicals API',
            version: '1.0.0',
            description: 'Musicals API Swagger 연동 테스트'
        },
        servers: [{
            url: 'http://192.168.1.90:8888'
        }]
    },
    apis: ['./src/swagger/paths/*']
};

const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs
};
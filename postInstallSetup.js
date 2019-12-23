
const { exec } = require('child_process');

module.exports.initReqs = () => {

    exec('cd ../.. && npm i express body-parser mocha chai supertest');
    exec('cd ../.. && npm i nodemon --save-dev')
}

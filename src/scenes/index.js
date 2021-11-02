const { Scenes } = require('telegraf');

const stage = new Scenes.Stage([
    require('./start'),
    require('./admin:panel'),
    require('./admin:new-video')
]);

module.exports = stage;


const { Scenes } = require("telegraf");

const startScene = new Scenes.BaseScene('start');

startScene.enter((ctx) => {
    ctx.reply('Start');
})

module.exports = startScene;
require('./database');

const { session } = require("telegraf");
const bot = require("./core/bot");
const handleInlineQuery = require('./handlers/inlineQuery');
const isAdmin = require("./middlewares/isAdmin");
const stage = require('./scenes');

bot 
    .use(session())
    .use(stage.middleware())
    .start(ctx => ctx.scene.enter('start'))
    .command('admin', isAdmin, ctx => ctx.scene.enter('admin:panel'))

handleInlineQuery(bot);

bot
    .launch().then(() => {
        console.log(`Bot @${bot.botInfo.username} ishga tushdi`);
    })
    .catch((err) => {
        console.log(`Bot ishga tushishida xatolik yuz berdi: ${err.message}`);
    })
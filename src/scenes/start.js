const { Scenes } = require("telegraf");
const { startKeyboard } = require("../utils/keyboard");

const startScene = new Scenes.BaseScene('start');

startScene.enter((ctx) => {
    let text = "<b>👌 Istalgan chat qidirish uchun shunchaki <i>@videoqani_bot</i> usernameni yozing va davomiga qidirmoqchi bo'lgan kalit so'zingizni kiriting.\n✅ Bu juda oddiy</b>";
    let keyboard = startKeyboard;
    ctx.replyWithHTML(text, keyboard);
})

module.exports = startScene;
const { Scenes, Markup } = require("telegraf");
const { getAdminPanelKeyboard } = require("../utils/keyboard");

const adminPanelScene = new Scenes.BaseScene('admin:panel');

adminPanelScene.enter((ctx) => {
    let text = "🦦 Kerakli bo'limni tanlang:";
    let keyboard = getAdminPanelKeyboard();
    ctx.reply(text, keyboard);
});

adminPanelScene.action('videos', async (ctx) => {
    await ctx.deleteMessage();
    let text = 'Videolar';
    ctx.reply(text);
});

adminPanelScene.action('new_video', async (ctx) => {
    await ctx.deleteMessage();
    return ctx.scene.enter('admin:new-video');
});

module.exports = adminPanelScene;
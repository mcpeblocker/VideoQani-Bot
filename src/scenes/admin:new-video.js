const { Scenes } = require("telegraf");
const { videoService } = require("../database/services");
const { backKeyboard } = require("../utils/keyboard");

const adminNewVideoScene = new Scenes.WizardScene(
    'admin:new-video',
    async (ctx) => {
        let text = "📹 Videoni jo'nating";
        ctx.reply(text, backKeyboard);
        ctx.wizard.state.video = {};
        ctx.wizard.next();
    },
    (ctx) => {
        let text;
        let video = ctx.message?.video;
        if (!video) {
            text = "<b>❗️ Video formatida yuborganingizga ishonch hosil qiling.</b>";
            ctx.replyWithHTML(text);
            return;
        }
        ctx.wizard.state.video.file_id = video.file_id;
        text = "<b>✌️ Video uchun nom yuboring.</b>\n\n<i>Nom qidiruv natijalarida ko'rsatiladi.</i>";
        ctx.replyWithHTML(text, backKeyboard);
        ctx.wizard.next();
    },
    (ctx) => {
        let text;
        let name = ctx.message?.text;
        if (!name) {
            text = "<b>❗️ Matn shaklida yuborganingizga ishonch hosil qiling.</b>";
            ctx.replyWithHTML(text);
            return;
        }
        ctx.wizard.state.video.title = name;
        text = "<b>📝 Video haqida qisqacha ma'lumot yuboring.</b>";
        ctx.replyWithHTML(text, backKeyboard);
        ctx.wizard.next();
    },
    async (ctx) => {
        let text;
        let description = ctx.message?.text;
        if (!description) {
            text = "<b>❗️ Matn shaklida yuborganingizga ishonch hosil qiling.</b>";
            ctx.replyWithHTML(text);
            return;
        }
        ctx.wizard.state.video.description = description;
        try {
            await videoService.create(ctx.wizard.state.video);
            text = "<b>✅ Video muvaffaqiyatli qo'shildi.</b>";
            ctx.replyWithHTML(text);
            return ctx.scene.enter('admin:panel');
        }
        catch(err) {
            text = "<b>❗️ Video yaratishda xatolik yuz berdi!</b>";
            ctx.replyWithHTML(text);
            return ctx.scene.reenter();
        }
    }
);

adminNewVideoScene.action('back', async (ctx) => {
    await ctx.deleteMessage();
    return ctx.scene.enter('admin:panel')
});

module.exports = adminNewVideoScene;
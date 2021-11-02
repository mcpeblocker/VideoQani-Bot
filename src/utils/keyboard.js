const { Markup } = require("telegraf")

const getAdminPanelKeyboard = () => Markup.inlineKeyboard([
    [
        Markup.button.callback("📹 Videolar", "videos")
    ],
    [
        Markup.button.callback("➕ Yangi video qo'shish", "new_video"),
    ]
]);

const backKeyboard = Markup.inlineKeyboard([
    [
        Markup.button.callback("◀️ Orqaga", "back")
    ]
])

const startKeyboard = Markup.inlineKeyboard([
    [
        Markup.button.switchToChat("🔍 Video izlash", "")
    ]
])

module.exports = {
    getAdminPanelKeyboard,
    backKeyboard,
    startKeyboard
}
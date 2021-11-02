const { Markup } = require("telegraf")

const getAdminPanelKeyboard = () => Markup.inlineKeyboard([
    [
        Markup.button.callback("📹 Videolar", "videos")
    ],
    [
        Markup.button.callback("➕ Yangi video qo'shish", "new_video"),
    ]
]);

const getBackKeyboard = () => Markup.inlineKeyboard([
    [
        Markup.button.callback("◀️ Orqaga", "back")
    ]
]);

const backKeyboard = Markup.inlineKeyboard([
    [
        Markup.button.callback("◀️ Orqaga", "back")
    ]
])

module.exports = {
    getAdminPanelKeyboard,
    backKeyboard
}
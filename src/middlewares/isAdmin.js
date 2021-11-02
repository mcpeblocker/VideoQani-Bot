const config = require("../utils/config")

module.exports = (ctx, next) => {
    if (ctx.from.id === config.OWNER) {
        return next();
    }
    return;
}
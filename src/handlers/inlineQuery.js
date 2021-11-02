const { videoService } = require("../database/services")

function handleInlineQuery(bot) {
    bot.on('inline_query', async (ctx) => {
        let { query, offset } = ctx.inlineQuery;
        offset = isNaN(parseInt(offset)) ? 0 : parseInt(offset);
        let videos = await videoService.findAll({
            query,
            skip: offset,
            limit: 50
        });
        let results = videos.map(video => ({
            id: video._id,
            type: "video",
            video_file_id: video.file_id,
            title: video.title,
            description: video.description  
        }));
        ctx.answerInlineQuery(results, {
            offset
        })
    })
}

module.exports = handleInlineQuery;
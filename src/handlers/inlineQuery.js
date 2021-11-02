const { videoService } = require("../database/services")

function handleInlineQuery(bot) {
    bot.on('inline_query', async (ctx) => {
        let { query, offset } = ctx.inlineQuery;
        console.log(query, offset);
        let videos = await videoService.findAll({
            query,
            skip: parseInt(offset) || 0,
            limit: 50
        });
        console.log(videos);
        let results = videos.map(video => ({
            id: video._id,
            type: "video",
            video_file_id: video.file_id,
            title: video.title,
            description: video.description  
        }));
        ctx.answerInlineQuery(results)
    })
}

module.exports = handleInlineQuery;
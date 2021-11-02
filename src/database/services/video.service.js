const { Video } = require("../models");

async function create(data) {
    const video = new Video(data);
    return await video.save();
}

async function findAll({ skip = 0, limit = 50, query = "" }) {
    let regex = new RegExp(query);
    return await Video
        .find({
            $and: [
                {
                    $or: [
                        {
                            title: regex
                        },
                        {
                            description: regex
                        }
                    ]
                }
            ]
        })
        .skip(skip)
        .limit(limit);
}

async function findOne(id) {
    return await Video.findById(id);
}

async function deleteOne(id) {
    return await Video.findByIdAndDelete(id);
}

const videoService = {
    create,
    findAll,
    findOne,
    deleteOne
}

module.exports = { videoService };
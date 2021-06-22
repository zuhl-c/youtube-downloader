var ytdl = require('ytdl-core');

module.exports={
    async convertVideo(url,quality) {
        //ytdl(url).pipe(fs.createWriteStream('video.mp4'));
        var video = await ytdl.getInfo(url);
        //console.log(video);
        for (var i = 0; i < video.formats.length; i++) {
            if (video.formats[i].qualityLabel == quality) {
                console.log(video.formats[i]);
                var video_URL = video.formats[i]
                return video_URL;
            }
        }
    }
}


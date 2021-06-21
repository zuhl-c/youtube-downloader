function clearIn(){
    $('.url-box').val('');
}
function convert() {
    var url = $('.url-box').val();
    var format = $('#format').val();
    var quality;
    if (format == 'mp3') {
        quality = mp3Q.val();
    } else {
        quality = mp4Q.val();
    }
    var response = validURL(url);
    if (response) {
        $.ajax({
            url: '/download',
            data: {
                url: url,
                format: format,
                quality: quality
            },
            method: 'post',
            success: function (response) {
                //console.log(response);
            }
        })
    } else {
        alert('plaese enter valid url');
    }
}
function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}
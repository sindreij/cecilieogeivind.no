function updateImages(data) {
    "use strict";
    console.log(data);
    var element = $('#insta');
    element.html('');

    var elements = _.map(data.data, function(obj) {
        var div = $('<div class="instaimage"></div>');
        var a = $('<a></a>');
        a.attr('href', obj.link);
        a.attr('target', '_blank');
        var img = $('<img></img>');
        var caption = $('<div class="caption"></div>');
        caption.text('@' + obj.user.username);
        img.attr('src', obj.images.standard_resolution.url);
        a.append(img);
        div.append(a);
        div.append(caption);
        return div;
    });

    element.append(elements);
}


function fetchAndUpdateImages() {
    "use strict";
    $.ajax('https://api.instagram.com/v1/tags/cecilieogeivind/media/recent?client_id=1ed23d567e4c4f42852d1651286ed5a0&count=33', {
        dataType: 'jsonp'
    }).then(updateImages);
}

fetchAndUpdateImages();

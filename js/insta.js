function updateImages(data) {
    "use strict";
    console.log(data);
    var element = $('#insta');

    var elements = _.map(data.data, function(obj) {
        var div = $('<div></div>');
        var a = $('<a></a>');
        a.attr('href', obj.link);
        a.attr('target', '_blank');
        var img = $('<img></img>');
        img.attr('src', obj.images.thumbnail.url);
        a.append(img);
        div.append(a);
        return div;
    });

    element.append(elements);
}


function fetchAndUpdateImages() {
    "use strict";
    $.ajax('https://api.instagram.com/v1/tags/nrksommer/media/recent?client_id=1ed23d567e4c4f42852d1651286ed5a0', {
        dataType: 'jsonp'
    }).then(updateImages);
}

fetchAndUpdateImages();
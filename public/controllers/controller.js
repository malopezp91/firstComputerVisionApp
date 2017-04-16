
var columns = 640;
var rows = 480;
var data_type = jsfeat.U8_t | jsfeat.C1_t;

var my_matrix = new jsfeat.matrix_t(columns, rows, data_type, data_buffer = undefined);

console.log('Matrix Created!');


var errorCallback = function (e) {
    console.log('Reeeejected!', e);
};


var gray_img = new jsfeat.matrix_t(columns, rows, jsfeat.U8_t | jsfeat.C1_t);
var code = jsfeat.COLOR_RGBA2GRAY;


// Not showing vendor prefixes.
navigator.getUserMedia({ video: true, audio: true }, function (localMediaStream) {
    var video = document.querySelector('video');
    video.src = window.URL.createObjectURL(localMediaStream);


    // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
    // See crbug.com/110938.
    video.onloadedmetadata = function (e) {
        // Ready to go. Do some stuff.
    };
}, errorCallback);
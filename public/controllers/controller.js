
var columns = 640;
var rows = 480;
var data_type = jsfeat.U8_t | jsfeat.C1_t;

var my_matrix = new jsfeat.matrix_t(columns, rows, data_type, data_buffer = undefined);

console.log('Matrix Created, JsFeat Loaded Correctly!');

var size = 512;
var rgbCanvas = document.getElementById('rgbImageCanvas');
rgbCanvas = rgbCanvas.getContext('2d');

var grayCanvas = document.getElementById('grayImageCanvas');
grayCanvas = grayCanvas.getContext('2d');

var originalImage = new Image();
originalImage.src = 'lena10.jpg';

originalImage.onload = function () {
    rgbCanvas.drawImage(originalImage, 0, 0);

    var grayImage = new jsfeat.matrix_t(size, size, jsfeat.U8C1_t);
    var rgbImage = rgbCanvas.getImageData(0, 0, size, size);

    jsfeat.imgproc.grayscale(rgbImage.data, size, size, grayImage);


    ///////////////////
    let data_u32 = new Uint32Array(rgbImage.data.buffer);
    let i = grayImage.cols * grayImage.rows, pix = 0;

    let alpha = (0xff << 24);
    while (--i >= 0) {
        pix = grayImage.data[i];
        data_u32[i] = alpha | (pix << 16) | (pix << 8) | pix;
    }

    //The key of everything!!!
    //// http://stackoverflow.com/questions/37583915/modifying-image-pixels-using-bitwise-operators-jsfeat

    grayCanvas.putImageData(rgbImage, 0, 0);
}






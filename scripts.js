$(document).ready(function () {
    $('#image1').click(function () {
        $('.our').show();
        $('#image1').hide();

    })
    $('#image2').click(function () {
        $('.all').show();
        $('#image2').hide();
    })
    $('#image3').click(function () {
        $('.planning').show();
        $('#image3').hide();
    })

    $('.our').click(function () {
        $('#image1').show();
        $('.our').hide();
    })
    $('.all').click(function () {
        $('#image2').show();
        $('.all').hide();
    })
    $('.planning').click(function () {
        $('#image3').show();
        $('.planning').hide();
    })
})
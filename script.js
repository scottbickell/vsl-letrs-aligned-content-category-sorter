// cat-oral-language
// cat-phonological-awareness
// cat-phonemic-awareness
// cat-phonics-decoding
// cat-fluency
// cat-vocabulary
// cat-comprehension
// cat-language

// Shortcut list of all the categories
// .cat-oral-language, .cat-phonological-awareness, .cat-phonemic-awareness, .cat-phonics-decoding, .cat-fluency, .cat-vocabulary, .cat-comprehension, .cat-language

$('.btn-oral-language').on('click', function () {
    $('.cat-phonological-awareness, .cat-phonemic-awareness, .cat-phonics-decoding, .cat-fluency, .cat-vocabulary, .cat-comprehension, .cat-language').hide();
    $('.cat-oral-language').fadeIn();
});

$('.btn-phonological-awareness').on('click', function () {
    $('.cat-oral-language, .cat-phonemic-awareness, .cat-phonics-decoding, .cat-fluency, .cat-vocabulary, .cat-comprehension, .cat-language').hide();
    $('.cat-phonological-awareness').fadeIn();
});

$('.btn-phonemic-awareness').on('click', function () {
    $('.cat-oral-language, .cat-phonological-awareness, .cat-phonics-decoding, .cat-fluency, .cat-vocabulary, .cat-comprehension, .cat-language').hide();
    $('.cat-phonemic-awareness').fadeIn();
});

$('.btn-phonics-decoding').on('click', function () {
    $('.cat-oral-language, .cat-phonological-awareness, .cat-phonemic-awareness, .cat-fluency, .cat-vocabulary, .cat-comprehension, .cat-language').hide();
    $('.cat-phonics-decoding').fadeIn();
});

$('.btn-fluency').on('click', function () {
    $('.cat-oral-language, .cat-phonological-awareness, .cat-phonemic-awareness, .cat-phonics-decoding, .cat-fluency, .cat-vocabulary, .cat-comprehension, .cat-language').hide();
    $('.cat-fluency').fadeIn();
});

$('.btn-vocabulary').on('click', function () {
    $('.cat-oral-language, .cat-phonological-awareness, .cat-phonemic-awareness, .cat-phonics-decoding, .cat-fluency, .cat-comprehension, .cat-language').hide();
    $('.cat-vocabulary').fadeIn();
});

$('.btn-comprehension').on('click', function () {
    $('.cat-oral-language, .cat-phonological-awareness, .cat-phonemic-awareness, .cat-phonics-decoding, .cat-fluency, .cat-vocabulary, .cat-language').hide();
    $('.cat-comprehension').fadeIn();
});

$('.btn-language').on('click', function () {
    $('.cat-oral-language, .cat-phonological-awareness, .cat-phonemic-awareness, .cat-phonics-decoding, .cat-fluency, .cat-vocabulary, .cat-comprehension').hide();
    $('.cat-language').fadeIn();
});

$('.btn-show-all').on('click', function () {
    $('.cat-oral-language, .cat-phonological-awareness, .cat-phonemic-awareness, .cat-phonics-decoding, .cat-fluency, .cat-vocabulary, .cat-comprehension, .cat-language').fadeIn();
});
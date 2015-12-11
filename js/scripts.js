console.log('hello world');

//random

//make random number
var numRand = Math.floor(Math.random() * 3);
console.log(numRand);

//concatenate 'bg' + 'numRand'
var randPic = 'bg' + numRand;
console.log(randPic);

//change bg color
$('.randombg').addClass(randPic);




//tabs
$(document).ready(function () {
    $('.tabs').tabslet();
});

// lightbox
$('.gallery').lightGallery({
    selector: 'a'
}); 


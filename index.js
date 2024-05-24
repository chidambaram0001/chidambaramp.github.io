(function(){
 wow = new WOW({
 mobile: true,
 });
 wow.init();

 
window.onscroll = function() {
 myFunction()
};

var header = document.getElementsByTagName("header")[0];
var sticky = header.offsetTop;

function myFunction() {
 if (window.pageYOffset > sticky) {
 header.classList.add("sticky");
 } else {
 header.classList.remove("sticky");
 }
}

$(document).ready(function(){
 $('nav ul li a').click(function(){
 window.scrollTo({top:$($(this).attr('data-id')).offset().top - 130})
 })
})
$(".role").textrotator({
 animation: "dissolve",
 separator: "|",
 speed: 3000,
});

$('.menu-icon i.fa-bars').click(function(){
 $('nav').slideDown('slow')
});
$('.close').click(function(){
 $('nav').slideUp('slow')
})
})()

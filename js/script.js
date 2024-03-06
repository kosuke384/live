'use strict';
/*
jQuery(function($){
  var movie =document.getElementById('main_movie');
  movie.controls=false;
});
*/
const images =[
  '../images/concept/concept.png',
  '../images/about/about1.png',
  '../images/about/about2.png'
];
let current=0;

function changeImage(num){
  if(current+num>=0&&current+num<images.length){
    current+=num;
    document.getElementById('main_image').src=images[current];
    pageNum();
  }
}
function pageNum()
{
  document.getElementById('page').textContent=`${current+1}/${images.length}`;
}
pageNum();
document.getElementById('prev').onclick=function(){
  changeImage(-1);
};

document.getElementById('next').onclick=function(){
  changeImage(1);
};

$(document).ready(function(){
  $('.burger-btn').on('click',function(){
    $('.bar').toggleClass('close');
    $('.hamberger-menu').toggleClass('show');
  })
})

$(function () {
  $(".test-slick").slick({
      autoplay: true,
      autoplaySpeed: 0,
      speed: 8000,
      cssEase: 'linear',
      slidesToShow: 4,
      swipe: false,
      pauseOnFocus: false, 
      pauseOnHover: false,
      arrows: false,
      useTransform: false, 
      responsive: [
        {
          breakpoint: 1300,// 399px以下のサイズに適用
          useTransform: false, 
          settings: {
          slidesToShow: 3,
          },
        },
        {
          breakpoint: 431,// 399px以下のサイズに適用
          useTransform: false, 
          settings: {
          slidesToShow: 2,
          },
        },
      ],
  });
});
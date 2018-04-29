// Initialize Carousel
$(document).ready(function(){
   $('.carousel').carousel({
     duration: 200,
     padding: 500
   });
   setInterval(function() {
     $('.carousel').carousel('next');
   }, 2500); // every 2 seconds
});

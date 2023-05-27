// Preloader

//once the window is fully loaded then we hide the preloader gif
$(window).on('load', function () {
    $('#status').fadeOut(); // to hide the gif we use fadeOut method
    $('#preloader').delay(350).fadeOut('slow');
});

// End Preloader


// Team section start

$(function () {
    $('#team-members').owlCarousel({
        items: 2, // only two member will display
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ]

    });
})

// Progress bars
$(function () {

    $('#progress-elements').waypoint(function () {
        $('.progress-bar').each(function () { // we loop through the progress bar becasue we have more than one progress bar 
            $(this).animate({ // we call current progress bar and call animate function and insdie this fucntion we pass object and set the width of progress bar
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000); // this refer to current progress bar in the loop
        });

        this.destroy();  // this.destroy method will help it will only appear once .
    },
        { offset: 'bottom-in-view' } // jab progress bar ka bottom par ajaye ga then ya method call hoga .
    );
});

// responsive tab
$(function(){
 $("#services-tabs").responsiveTabs({
    startCollapsed: 'accordion'
 });
});


// Portfolio Work 
$(window).on('load' , function(){

    //Initialize Isotope
    $("#isotope-container").isotope({
    });

    // filter items on button click
    $("#isotope-filters").on('click','button',function(){
          // get filter value 
          var filterValue = $(this).attr('data-filter');
          
          // filter portfolio
          $('#isotope-container').isotope({
            filter:filterValue
          });
          

          //active button
          $('#isotope-filters').find('.active').removeClass('active');
          $(this).addClass("active");
    });
});

// Magnifier 
$(function(){
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery:{
        enabled:true
        }
      });
})

// Testimonial 

$(function(){
    $('#testimonial-slider').owlCarousel({
        items: 1, // only One member will display
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ]

    });
})

// Clients section
$(function(){
    $('#clients-list').owlCarousel({
        items: 6, // only One member will display
        autoplay: false,
        smartSpeed: 700,
        loop: false,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ]

    });
})

// States section
$(function(){
    $('.counter').counterUp({
        delay:10,
        time:2000
    })
})

// Google Maps
$(window).on('load',function(){
    // Map VAriables
        
    // var addressString = 'Rawalpindi';
    // var myLatlng  = {
    //     lat:33.5651,
    //     lng:73.0169
    // };

    // // 1.Render Map
    // var map = new google.maps.Map(document.getElementById('map'),{
    //     zoom:11,
    //     center:myLatlng
    // });


    // Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();

});


// Navigation  

// show and hide white navigation 
$(function(){

    // show and hide navigation on page load The reason we show the navigation on page load when user reached at the middle of the 
    // page and it just refresh the page then the white navigation will dispear therefore we also add that fucntion when page load 
    showhideNav();
    $(window).scroll(function(){
        // show and hide navigation when window scroll
      showhideNav();
    });


    function showhideNav(){

        if($(window).scrollTop() > 50){
            // show white nav
            $('nav').addClass('white-nav-top');

            //  show dark logo
            $('.navbar-brand img').attr('src' , "img/logo/logo-dark.png");

            // Show back to top button
            // FadeIn() method show the button
            $('.btn-back-to-top').fadeIn();
        }else{
            // hide white nav
            $('nav').removeClass('white-nav-top');
            // show normal logo
            $('.navbar-brand img').attr('src' , "img/logo/logo.png");
             // Show back to top button
             // fadeOUt() hide the button
            $('.btn-back-to-top').fadeOut();
        }
    }

    
});

// smoth scrolling
$(function() {
   
    $('a.smoth-scroll').click(function(event){
        event.preventDefault();

        // get section Id by #about, #service , #team etc
        let section_id  = $(this).attr('href');
        
        $("html, body").animate({
            // offset() will get the current positon of object
            scrollTop:$(section_id).offset().top - 64
        },1250 , "easeInOutExpo" );
    });
    
});


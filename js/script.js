
// main slides

$('.slider').slick({
    dots: true,
    arrows: true,
    infinite: true,  // бесконечный цикл
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows:false
          }
        },
        {
          breakpoint: 320,
          settings: {
          
          }
        }
    ]
});

// seti slides

$('.seti__items').slick({
  // initialSlide: 1, // номер слайда
  dots: true,
  arrows: true,
  infinite: true,  // бесконечный цикл
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 750,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,      
      }
    },
    {
      breakpoint: 500,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '8%',
      }
    },
    {
      breakpoint: 320,
      settings: {
        
      }
    }
  ]

});

// rolly slides

$('.rolly__items').slick({
  // initialSlide: 1, // номер слайда
  dots: true,
  arrows: true,
  infinite: true,  // бесконечный цикл
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 750,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,      
      }
    },
    {
      breakpoint: 500,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '8%',
      }
    },
    {
      breakpoint: 320,
      settings: {
        
      }
    }
  ]

});

// pizza slides

$('.pizza__items').slick({
  // initialSlide: 1, // номер слайда
  dots: true,
  arrows: true,
  infinite: true,  // бесконечный цикл
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 750,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,      
      }
    },
    {
      breakpoint: 500,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '8%',
      }
    },
    {
      breakpoint: 320,
      settings: {
        
      }
    }
  ]

});

// wok slides

$('.wok__items').slick({
  // initialSlide: 1, // номер слайда
  dots: true,
  arrows: true,
  infinite: true,  // бесконечный цикл
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 750,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,      
      }
    },
    {
      breakpoint: 500,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '8%',
      }
    },
    {
      breakpoint: 320,
      settings: {
        
      }
    }
  ]

});

// new slides

$('.new__items').slick({
  // initialSlide: 1, // номер слайда
  dots: true,
  arrows: true,
  infinite: true,  // бесконечный цикл
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 750,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,      
      }
    },
    {
      breakpoint: 500,
      settings: {
        initialSlide: 1, // номер слайда
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '8%',
      }
    },
    {
      breakpoint: 320,
      settings: {
        
      }
    }
  ]

});

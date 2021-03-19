(function() {
  "use strict";
  AOS.init();

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('fa-bars')
    this.classList.toggle('fa-times')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate gallery lightbox 
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });


  $("#casher").click(function () {
    $(this).css("background"," #fe97074d")
    $("#casher-span").css("color","#fe9807")
  })

  $("#delivery").click(function () {
    $(this).css("background"," #fe97074d")
    $("#delivery-span").css("color","#fe9807")
  })
  $("#chief").click(function () {
    $(this).css("background"," #fe97074d")
    $("#chief-span").css("color","#fe9807")
  })
  
  $("#order-details-2").click(function () {
    $("#done-1").show()
    $("#label-1").hide()
    $("#success-1").show()
    $("#order-details-window-2").show()
    $("#order-details-window").hide()
  })


  $("#order-details-3").click(function () {
    $("#order-details-2").addClass("Done")
    $("#done-2").show()
    $("#label-2").hide()
    $("#success-2").show()
    $("#order-details-window-2").hide()
    $("#order-details-window-3").show()
    $("#order-details-window").hide()
  })

  $("#add-client-btn").click(function(){
    $("#add-client-window").show()
    $("#order-details-3").addClass("Done")
    $("#order-details-window-3").hide()
  })

  $("#submit-client").click(function(){
    $("#order-details-window-2").show()
    $("#add-client-window").hide()
    $("#btn-1").hide()
    $("#btn-2").hide()
    $("#btn-3").show()
    $("#client-data").show()
  })
  $("#btn-3").click(function(){
    $("#order-details-window-4").show()
    $("#label-3").hide()
    $("#success-3").show()
    $("#order-details-window-2").hide()
    $("#btn-1").hide()
  })

  $("#confirm-btn").click(function(){
    $(".stopped").addClass("shipping")
  })

  $("#order-chiken-1").click(function () {
    $("#details-1").show()
  })
  $("#delete-details-1").click(function () {
    $("#details-1").hide()
  })
  $("#order-chiken-2").click(function () {
    $("#details-2").show()
  })
  $("#delete-details-2").click(function () {
    $("#details-2").hide()
  })
  $("#order-chiken-3").click(function () {
    $("#details-3").show()
  })
  $("#delete-details-3").click(function () {
    $("#details-3").hide()
  })

  $("#order-chiken-4").click(function () {
    $("#details-4").show()
  })
  $("#delete-details-4").click(function () {
    $("#details-4").hide()
  })

  $("#order-chiken-5").click(function () {
    $("#details-5").show()
  })
  $("#delete-details-5").click(function () {
    $("#details-5").hide()
  })
  $("#order-chiken-6").click(function () {
    $("#details-6").show()
  })
  $("#delete-details-6").click(function () {
    $("#details-6").hide()
  })

  $("#order-chiken-7").click(function () {
    $("#details-7").show()
  })
  $("#delete-details-7").click(function () {
    $("#details-7").hide()
  })
// //
  $("#order-beef-1").click(function () {
    $("#details-beef-1").show()
  })
  $("#delete-details-be1").click(function () {
    $("#details-beef-1").hide()
  })
  $("#order-beef-2").click(function () {
    $("#details-beef-2").show()
  })
  $("#delete-details-be2").click(function () {
    $("#details-beef-2").hide()
  })
  $("#order-beef-3").click(function () {
    $("#details-beef-3").show()
  })
  $("#delete-details-be3").click(function () {
    $("#details-beef-3").hide()
  })
  $("#order-beef-4").click(function () {
    $("#details-beef-4").show()
  })
  $("#delete-details-be4").click(function () {
    $("#details-beef-4").hide()
  })
  $("#order-beef-5").click(function () {
    $("#details-beef-5").show()
  })
  $("#delete-details-be5").click(function () {
    $("#details-beef-5").hide()
  })
  $("#order-beef-6").click(function () {
    $("#details-beef-6").show()
  })
  $("#delete-details-be6").click(function () {
    $("#details-beef-6").hide()
  })
  $("#order-beef-7").click(function () {
    $("#details-beef-7").show()
  })
  $("#delete-details-sp7").click(function () {
    $("#details-beef-7").hide()
  })

//////////
  $("#order-sideP-1").click(function () {
    $("#details-sideP-1").show()
  })
  $("#delete-details-sp1").click(function () {
    $("#details-sideP-1").hide()
  })
  $("#order-sideP-2").click(function () {
    $("#details-sideP-2").show()
  })
  $("#delete-details-sp2").click(function () {
    $("#details-sideP-2").hide()
  })
  $("#order-sideP-3").click(function () {
    $("#details-sideP-3").show()
  })
  $("#delete-details-sp3").click(function () {
    $("#details-sideP-3").hide()
  })
  $("#order-sideP-4").click(function () {
    $("#details-sideP-4").show()
  })
  $("#delete-details-sp4").click(function () {
    $("#details-sideP-4").hide()
  })
  $("#order-sideP-5").click(function () {
    $("#details-sideP-5").show()
  })
  $("#delete-details-sp5").click(function () {
    $("#details-sideP-5").hide()
  })
  $("#order-sideP-6").click(function () {
    $("#details-sideP-6").show()
  })
  $("#delete-details-sp6").click(function () {
    $("#details-sideP-6").hide()
  })

  $("#order-sideP-7").click(function () {
    $("#details-sideP-7").show()
  })
  $("#delete-details-sp7").click(function () {
    $("#details-sideP-7").hide()
  })

  $("#order-sideP-8").click(function () {
    $("#details-sideP-8").show()
  })
  $("#delete-details-sp8").click(function () {
    $("#details-sideP-8").hide()
  })
/////////////////\\\\\\\\\\\\\\\
$("#order-appetizers-1").click(function () {
  $("#details-appetizers-1").show()
})
$("#delete-details-ap1").click(function () {
  $("#details-appetizers-1").hide()
})
$("#order-appetizers-2").click(function () {
  $("#details-appetizers-2").show()
})
$("#delete-details-ap2").click(function () {
  $("#details-appetizers-2").hide()
})
$("#order-appetizers-3").click(function () {
  $("#details-appetizers-3").show()
})
$("#delete-details-ap3").click(function () {
  $("#details-appetizers-3").hide()
})
$("#order-appetizers-4").click(function () {
  $("#details-appetizers-4").show()
})
$("#delete-details-ap4").click(function () {
  $("#details-appetizers-4").hide()
})
$("#order-appetizers-5").click(function () {
  $("#details-appetizers-5").show()
})
$("#delete-details-ap5").click(function () {
  $("#details-appetizers-5").hide()
})
///////////////\\\\\\\\\\\\\

$("#order-drinks-1").click(function () {
  $("#details-drinks-1").show()
})
$("#delete-details-d1").click(function () {
  $("#details-drinks-1").hide()
})
$("#order-drinks-2").click(function () {
  $("#details-drinks-2").show()
})
$("#delete-details-d2").click(function () {
  $("#details-drinks-2").hide()
})
$("#order-drinks-3").click(function () {
  $("#details-drinks-3").show()
})
$("#delete-details-d3").click(function () {
  $("#details-drinks-3").hide()
})
$("#order-drinks-4").click(function () {
  $("#details-drinks-4").show()
})
$("#delete-details-d4").click(function () {
  $("#details-drinks-4").hide()
})
$("#order-drinks-5").click(function () {
  $("#details-drinks-5").show()
})
$("#delete-details-d5").click(function () {
  $("#details-drinks-5").hide()
})
/////////////////\\\\\\\\\\\\\\\
  $("#search-number").on('keyup', function (event) {
    if (event.keyCode === 13) {
      var s = document.getElementById("search-number").value;
      document.getElementById("result-table").style.display = "block";
      document.getElementById("search-result").innerHTML = s;
    }
  })

  
  
})()
function incrementCH1() {
  document.getElementById('ch-quantity-1').stepUp();
}
function decrementCH1() {
  document.getElementById('ch-quantity-1').stepDown();
}
function incrementCH2() {
  document.getElementById('ch-quantity-2').stepUp();
}
function decrementCH2() {
  document.getElementById('ch-quantity-2').stepDown();
}
function incrementCH3() {
  document.getElementById('ch-quantity-3').stepUp();
}
function decrementCH3() {
  document.getElementById('ch-quantity-3').stepDown();
}
function incrementCH4() {
  document.getElementById('ch-quantity-4').stepUp();
}
function decrementCH4() {
  document.getElementById('ch-quantity-4').stepDown();
}
function incrementCH5() {
  document.getElementById('ch-quantity-5').stepUp();
}
function decrementCH5() {
  document.getElementById('ch-quantity-5').stepDown();
}
function incrementCH6() {
  document.getElementById('ch-quantity-6').stepUp();
}
function decrementCH6() {
  document.getElementById('ch-quantity-6').stepDown();
}
function incrementCH7() {
  document.getElementById('ch-quantity-7').stepUp();
}
function decrementCH7() {
  document.getElementById('ch-quantity-7').stepDown();
}

function incrementBE1() {
  document.getElementById('be-quantity-1').stepUp();
}
function decrementBE1() {
  document.getElementById('be-quantity-1').stepDown();
}

function incrementBE2() {
  document.getElementById('be-quantity-2').stepUp();
}
function decrementBE2() {
  document.getElementById('be-quantity-2').stepDown();
}
function incrementBE3() {
  document.getElementById('be-quantity-3').stepUp();
}
function decrementBE3() {
  document.getElementById('be-quantity-3').stepDown();
}
function incrementBE4() {
  document.getElementById('be-quantity-4').stepUp();
}
function decrementBE4() {
  document.getElementById('be-quantity-4').stepDown();
}
function incrementBE5() {
  document.getElementById('be-quantity-5').stepUp();
}
function decrementBE5() {
  document.getElementById('be-quantity-5').stepDown();
}
function incrementBE6() {
  document.getElementById('be-quantity-6').stepUp();
}
function decrementBE6() {
  document.getElementById('be-quantity-6').stepDown();
}
function incrementBE7() {
  document.getElementById('be-quantity-7').stepUp();
}
function decrementBE7() {
  document.getElementById('be-quantity-7').stepDown();
}


///////////////\\\\\\\\\\\\\\\\\\

function incrementSP1() {
  document.getElementById('sp-quantity-1').stepUp();
}
function decrementSP1() {
  document.getElementById('sp-quantity-1').stepDown();
}

function incrementSP2() {
  document.getElementById('sp-quantity-2').stepUp();
}
function decrementSP2() {
  document.getElementById('sp-quantity-2').stepDown();
}
function incrementSP3() {
  document.getElementById('sp-quantity-3').stepUp();
}
function decrementSP3() {
  document.getElementById('sp-quantity-3').stepDown();
}
function incrementSP4() {
  document.getElementById('sp-quantity-4').stepUp();
}
function decrementSP4() {
  document.getElementById('sp-quantity-4').stepDown();
}
function incrementSP5() {
  document.getElementById('sp-quantity-5').stepUp();
}
function decrementSP5() {
  document.getElementById('sp-quantity-5').stepDown();
}
function incrementSP6() {
  document.getElementById('sp-quantity-6').stepUp();
}
function decrementSP6() {
  document.getElementById('sp-quantity-6').stepDown();
}
function incrementSP7() {
  document.getElementById('sp-quantity-7').stepUp();
}
function decrementSP7() {
  document.getElementById('sp-quantity-7').stepDown();
}

function incrementSP8() {
  document.getElementById('sp-quantity-8').stepUp();
}
function decrementSP8() {
  document.getElementById('sp-quantity-8').stepDown();
}

/////////////////\\\\\\\\\\\\\\\\\
function incrementAP1() {
  document.getElementById('ap-quantity-1').stepUp();
}
function decrementAP1() {
  document.getElementById('ap-quantity-1').stepDown();
}

function incrementAP2() {
  document.getElementById('ap-quantity-2').stepUp();
}
function decrementAP2() {
  document.getElementById('ap-quantity-2').stepDown();
}
function incrementAP3() {
  document.getElementById('ap-quantity-3').stepUp();
}
function decrementAP3() {
  document.getElementById('ap-quantity-3').stepDown();
}
function incrementAP4() {
  document.getElementById('ap-quantity-4').stepUp();
}
function decrementAP4() {
  document.getElementById('ap-quantity-4').stepDown();
}
function incrementAP5() {
  document.getElementById('ap-quantity-5').stepUp();
}
function decrementAP5() {
  document.getElementById('ap-quantity-5').stepDown();
}


/////////////////\\\\\\\\\\\\\\\\\
function incrementD1() {
  document.getElementById('d-quantity-1').stepUp();
}
function decrementD1() {
  document.getElementById('d-quantity-1').stepDown();
}
function incrementD2() {
  document.getElementById('d-quantity-2').stepUp();
}
function decrementD2() {
  document.getElementById('d-quantity-2').stepDown();
}
function incrementD3() {
  document.getElementById('d-quantity-3').stepUp();
}
function decrementD3() {
  document.getElementById('d-quantity-3').stepDown();
}
function incrementD4() {
  document.getElementById('d-quantity-4').stepUp();
}
function decrementD4() {
  document.getElementById('d-quantity-4').stepDown();
}
function incrementD5() {
  document.getElementById('d-quantity-5').stepUp();
}
function decrementD5() {
  document.getElementById('d-quantity-5').stepDown();
}

///////////////////\\\\\\\\\\\\\\\\\\\



    function retrive() {
  var x = document.getElementById("client-name").value;
  document.getElementById("clientname").innerHTML = x;

  var y = document.getElementById("phone-number").value;
  document.getElementById("phone").innerHTML = y;

  var z = document.getElementById("inputStreet").value;
  document.getElementById("address").innerHTML = z;
}




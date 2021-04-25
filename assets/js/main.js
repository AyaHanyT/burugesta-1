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
  ///////////////////\\\\\\\\\\\\\\\

  $("#order-details").click(function () {
    $("#done-1").hide()
    $("#label-1").show()
    $("#success-1").hide()
    $("#order-details-window").show()
    $("#order-details-window-2").hide()
    $("#order-details-window-3").hide()
    $("#add-client-window").hide()
  })


  $("#order-details-2").click(function () {
    $("#done-1").show()
    $("#label-1").hide()
    $("#success-1").show()
    $("#order-details-window-2").show()
    $("#order-details-window").hide()
    $("#add-client-window").hide()
  })


  $("#order-details-3").click(function () {
    $("#order-details-2").addClass("Done")
    $("#done-2").show()
    $("#label-2").hide()
    $("#success-2").show()
    $("#order-details-window-2").hide()
    $("#order-details-window-3").show()
    $("#order-details-window").hide()
    $("#add-client-window").hide()
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
// //
  $("#order-beef-1").click(function () {
    $("#details-beef-1").show()
  })
  $("#delete-details-be1").click(function () {
    $("#details-beef-1").hide()
  })

//////////
  $("#order-sideP-1").click(function () {
    $("#details-sideP-1").show()
  })
  $("#delete-details-sp1").click(function () {
    $("#details-sideP-1").hide()
  })
/////////////////\\\\\\\\\\\\\\\
$("#order-appetizers-1").click(function () {
  $("#details-appetizers-1").show()
})
$("#delete-details-ap1").click(function () {
  $("#details-appetizers-1").hide()
})
/////////////////\\\\\\\\\\\\\\\
  $("#search-number").on('keyup', function (event) {
    if (event.keyCode === 13) {
      document.getElementById("result-table").style.display = "block";
    }
  })
 
  
})()
function incrementCH1() {
  document.getElementById('ch-quantity-1').stepUp();
}
function decrementCH1() {
  document.getElementById('ch-quantity-1').stepDown();
}

function incrementBE1() {
  document.getElementById('be-quantity-1').stepUp();
}
function decrementBE1() {
  document.getElementById('be-quantity-1').stepDown();
}
///////////////\\\\\\\\\\\\\\\\\\

function incrementSP1() {
  document.getElementById('sp-quantity-1').stepUp();
}
function decrementSP1() {
  document.getElementById('sp-quantity-1').stepDown();
}
/////////////\\\\\\\\\\\\\\\\\
function incrementAP1() {
  document.getElementById('ap-quantity-1').stepUp();
}
function decrementAP1() {
  document.getElementById('ap-quantity-1').stepDown();
}
/////////////////\\\\\\\\\\\\\\\\\
function incrementD1() {
  document.getElementById('d-quantity-1').stepUp();
}
function decrementD1() {
  document.getElementById('d-quantity-1').stepDown();
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




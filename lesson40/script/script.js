"use strict";

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
    //     autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
    // loop: true,
});
  
var swiper2 = new Swiper(".mySwiperNews", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});


google.maps.event.addDomListener(window, "load", init);

function init() {
  let mapOptions = {
    zoom: 11,
    disableDefaultUI: true,
    center: new google.maps.LatLng(
      51.916649,
      4.4746764,
      12
    ),
    styles: [  // це в ідеалі закинути в json, шоб воно тут не займало місце
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#e2e2e2" }, { lightness: 17 }], // це колір поверхні мапи, я сам підлатшував, можно більш чи менш сірий
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ color: "#e7e7e7" }, { lightness: 20 }], // з водою так само
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{ color: "#ffffff" }, { lightness: 17 }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          { color: "#ffffff" },
          { lightness: 29 },
          { weight: 0.2 },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }, { lightness: 18 }],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }, { lightness: 16 }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#dedede" }, { lightness: 21 }],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          { visibility: "on" },
          { color: "#ffffff" },
          { lightness: 16 },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          { saturation: 36 },
          { color: "#333333" },
          { lightness: 40 },
        ],
      },
      {
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [{ color: "#fefefe" }, { lightness: 20 }],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          { color: "#fefefe" },
          { lightness: 17 },
          { weight: 1.2 },
        ],
      },
    ],
  };

  let mapElement = document.getElementById("map");

  let map = new google.maps.Map(mapElement, mapOptions);

  const iconBase = "icons/"; // назва папки де лежить іконка маркера, я щось туплю зі шляхами, тому в мене ця папка лежить не в assets, а в корені проекту. 

  const icons = {
    info: {
      icon: iconBase + "Pin.svg.svg", // назва іконки маркера
    },
  };

  const points = [
    {
      position: new google.maps.LatLng(
        51.922975,
        4.4639904,
        15
      ),
      type: "info",
    },
  ];

  for (let i = 0; i < points.length; i++) {
    const marker = new google.maps.Marker({
      position: points[i].position,
      icon: icons[points[i].type].icon,
      map: map,
      animation: google.maps.Animation.BOUNCE, // підскакування вверх вниз 
    });
  }
}

let error = document.getElementById("error");
let input = document.getElementById("input");

input.onblur = function() {
  if (!input.value.includes('@')) { // це не електронна адреса
    input.classList.add('invalid');
    error.innerHTML = 'Будь ласка, введіть правильну електронну адресу.'
  }
};

input.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // видалити індикатор помилки, тому що користувач хоче ввести дані заново
    this.classList.remove('invalid');
    error.innerHTML = "";
  }
};

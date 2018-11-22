particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#000000"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#003e6b",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCqkinZ05lkvK0ENls4DEksfIYJV-3LnVk",
    authDomain: "neucube-website.firebaseapp.com",
    databaseURL: "https://neucube-website.firebaseio.com",
    projectId: "neucube-website",
    storageBucket: "neucube-website.appspot.com",
    messagingSenderId: "921741648327"
  };
  firebase.initializeApp(config);

  var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

var emailIdButton = document.getElementById("emailIdButton");
var emailId = document.getElementById("emaildId");

// var spinnerRef = document.getElementById("spinnerRef")
// var checkRef = document.getElementById("checkRef")
var spinner = "<div uk-spinner></div>";
var tick = '<span uk-icon="icon: check"></span>';

var resetText = "";
var resetToButtonPrimary = "";
var resetRemoveButtonSuccess = "";
// var spinner = '<div class="uk-icon circle-loader" id="spinnerRef"><div class="checkmark draw" id="checkRef"></div></div>';

// Timer
// var delay = ( function() {
//     var timer = 0;
//     return function(callback, ms) {
//         clearTimeout (timer);
//         timer = setTimeout(callback, ms);
//     };
// })();

emailIdButton.onclick = function(){

    emailIdButton.innerHTML = spinner;

    db.collection("coming-soon-email-ids").add({
        emailID: emailId.value,
        date: new Date().toISOString()
    })
    .then(function(docRef) {
        emailIdButton.innerHTML = tick;
        emailIdButton.classList.remove("uk-button-primary")
        emailIdButton.classList.add("gol-button-success")

        // Delay for timer
        // delay(function(){
        //     console.log("hello")
        // }, 5000 ); // end delay
    })
    .catch(function(error) {
        emailIdButton.innerHTML = tick;
        console.error("Error adding document: ", error);
    })
};

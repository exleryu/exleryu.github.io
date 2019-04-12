
$(window).on('load', function () {
    $('#preloader').fadeOut(600);
});

$(window).scroll(function() {
    if($(this).scrollTop() > 300) {
        $('.navbar-fixed-top').addClass('opaque');
    } else {
        $('.navbar-fixed-top').removeClass('opaque');
    }
});

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
        "value": "#ffffff"
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
        "distance": 0,
        "color": "#00ffdf", 
        "opacity": 1,
        "width": 0.3
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
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "remove"
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


$(document).ready(function() {
  $('.btn').on('click', function() {

    // console.log($(this));

    $(this).toggleClass('active');

    return $('.box').toggleClass('open');
  });
});
  
consoleText(['FRONT-END DEVELOPER & UX DESIGNER'], 'text',['#ffffff;',]);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

$('.first-button').on('click', function () {

  $('.animated-icon1').toggleClass('open');
});
$('.second-button').on('click', function () {

  $('.animated-icon2').toggleClass('open');
});
$('.third-button').on('click', function () {

  $('.animated-icon3').toggleClass('open');
});






// /**
//  * 3D Software ocean effect with Canvas2D
//  * You can change properties under comment "Effect properties"
//  */

// // Init Context
// let c = document.createElement('canvas').getContext('2d')
// let postctx = document.body.appendChild(document.createElement('canvas')).getContext('2d')
// let canvas = c.canvas
// let vertices = []

// // Effect Properties
// let vertexCount = 7000
// let vertexSize = 3
// let oceanWidth = 204
// let oceanHeight = -80
// let gridSize = 32;
// let waveSize = 16;
// let perspective = 100;

// // Common variables
// let depth = (vertexCount / oceanWidth * gridSize)
// let frame = 0
// let { sin, cos, tan, PI } = Math

// // Render loop
// let loop = () => {
// 	let rad = sin(frame / 100) * PI / 20
//   let rad2 = sin(frame / 50) * PI / 10
// 	frame++
// 	if (postctx.canvas.width !== postctx.canvas.offsetWidth || postctx.canvas.height !== postctx.canvas.offsetHeight) { 
//   	postctx.canvas.width = canvas.width = postctx.canvas.offsetWidth
//     postctx.canvas.height = canvas.height = postctx.canvas.offsetHeight
//   }

  
// 	c.fillStyle = `hsl(200deg, 100%, 2%)`
//   c.fillRect(0, 0, canvas.width, canvas.height)
//   c.save()
//   c.translate(canvas.width / 2, canvas.height / 2)
  
//   c.beginPath()
//   vertices.forEach((vertex, i) => {
//   	let ni = i + oceanWidth
//   	let x = vertex[0] - frame % (gridSize * 2)
//     let z = vertex[2] - frame * 2 % gridSize + (i % 2 === 0 ? gridSize / 2 : 0)
//   	let wave = (cos(frame / 45 + x / 50) - sin(frame / 20 + z / 50) + sin(frame / 30 + z*x / 10000))
//     let y = vertex[1] + wave * waveSize
//     let a = Math.max(0, 1 - (Math.sqrt(x ** 2 + z ** 2)) / depth)
//     let tx, ty, tz
    
//     y -= oceanHeight
    
//     // Transformation variables
//    	tx = x
//     ty = y
//     tz = z

//     // Rotation Y
//     tx = x * cos(rad) + z * sin(rad)
//     tz = -x * sin(rad) + z * cos(rad)
    
//     x = tx
//     y = ty
//     z = tz
    
//     // Rotation Z
//     tx = x * cos(rad) - y * sin(rad)
//     ty = x * sin(rad) + y * cos(rad) 
    
//     x = tx;
//     y = ty;
//     z = tz;
    
//     // Rotation X
    
//     ty = y * cos(rad2) - z * sin(rad2)
//     tz = y * sin(rad2) + z * cos(rad2)
    
//     x = tx;
//     y = ty;
//     z = tz;

//     x /= z / perspective
//     y /= z / perspective
    
    
        
//     if (a < 0.01) return
//     if (z < 0) return
   
    
//     c.globalAlpha = a
//     c.fillStyle = `hsl(${180 + wave * 20}deg, 100%, 50%)`
//     c.fillRect(x - a * vertexSize / 2, y - a * vertexSize / 2, a * vertexSize, a * vertexSize)
//     c.globalAlpha = 1
//   })
//   c.restore()
  
//   // Post-processing
//   postctx.drawImage(canvas, 0, 0)
  
//   postctx.globalCompositeOperation = "screen"
//   postctx.filter = 'blur(16px)'
//   postctx.drawImage(canvas, 0, 0)
//   postctx.filter = 'blur(0)'
//   postctx.globalCompositeOperation = "source-over"
  
//   requestAnimationFrame(loop)
// }

// // Generating dots
// for (let i = 0; i < vertexCount; i++) {
// 	let x = i % oceanWidth
//   let y = 0
//   let z = i / oceanWidth >> 0
// 	let offset = oceanWidth / 2
// 	vertices.push([(-offset + x) * gridSize, y * gridSize, z * gridSize])
// }

// loop()
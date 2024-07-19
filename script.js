function locomotiveJs() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function loadingAnimation() {
  var tl = gsap.timeline();

  tl.from(".line h1, .line h2", {
    y: 120,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });

  tl.to(" .line h2", {
    animationName: "anime",
    opacity: 1,
  });

  tl.from(".line1-part1", {
    opacity: 0,
    duration: 3.5,
    onStart: function () {
      var h5 = document.querySelector(".line1-part1 h5");
      var cnt = 0;
      var int = setInterval(function () {
        if (cnt < 100) {
          h5.innerHTML = cnt++;
        } else {
          h5.innerHTML = cnt;
          clearInterval(int);
        }
      }, 27);
    },
  });

  tl.to(".loader", {
    opacity: 0,
    duration: 0.2,
    delay: 0,
  });

  tl.from(".page1", {
    delay: 0.2,
    opacity: 0,
    y: 1600,
    duration: 0.6,
    ease: Power4,
  });

  tl.to(".loader", {
    display: "none",
  });

  tl.from(".nav", {
    opacity: 0,
  });

  tl.from(".hero h1, .hero h2, .hero h3", {
    y: 120,
    stagger: 0.2,
  });
}

function cursorAnimatin() {
  // Shery.mouseFollower({
  //   skew: true,
  //   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  //   duration: 1,
  // });
  Shery.makeMagnet(".nav-part2 h4", {});

  var videoContainer = document.querySelector(".video-container");
  var video = document.querySelector(".video-container video");
  videoContainer.addEventListener("mouseenter", function (dts) {
    videoContainer.addEventListener("mousemove", function (dets) {
      gsap.to(".cursor", {
        display: "none",
      });
      gsap.to(".video-container .video-cursor", {
        x: dets.x - 1250,
        y: dets.y - 285,
      });
    });
  });
  videoContainer.addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      display: "initial",
    });
    gsap.to(".video-container .video-cursor", {
      x: "-10%",
      y: "-10%",
    });
  });

  var flag = 0;
  videoContainer.addEventListener("click", function () {
    if (flag == 0) {
      video.play();
      video.style.opacity = 1;
      document.querySelector(
        ".video-cursor"
      ).innerHTML = `<i class="ri-pause-mini-line"></i>`;
      gsap.to(".video-cursor", {
        scale: 0.5,
      });
      flag = 1;
    } else {
      video.pause();
      video.style.opacity = 0;
      document.querySelector(
        ".video-cursor"
      ).innerHTML = `<i class="ri-play-mini-line"></i>`;
      gsap.to(".video-cursor", {
        scale: 1,
      });
      flag = 0;
    }
  });
}

function sheryAnimation() {
  Shery.imageEffect(".image-div", {
    style: 5,
    gooey: true,
    // debug:true,
    config: {
      a: { value: 1.37, range: [0, 30] },
      b: { value: 0.74, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7272670892217997 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: true },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.31, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.84, range: [0, 10] },
      metaball: { value: 0.5, range: [0, 2] },
      discard_threshold: { value: 0.51, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.44, range: [0, 2] },
      noise_scale: { value: 6.87, range: [0, 100] },
    },
  });
}

function flagAnimation() {
  document.addEventListener("mousemove", function (dts) {
    gsap.to("#flag", {
      x: dts.x,
      y: dts.y,
    });
  });

  document.querySelector("#hero3").addEventListener("mouseenter", function () {
    gsap.to("#flag", {
      opacity: 1,
    });
  });

  document.querySelector("#hero3").addEventListener("mouseleave", function () {
    gsap.to("#flag", {
      transform: "translate(0,0)",
      opacity: 0,
    });
  });
}

function textAnimation() {
  // Using GSAP for animation
  document
    .querySelector(".footer h1")
    .addEventListener("mouseover", function () {
      // Select the h1 element
      const h1Element = document.querySelector(".footer h1");

      // Reset any existing textillate animation and start a new one
      $(h1Element).textillate({
        autoStart: false, // Disable autoStart to control animation manually
        in: {
          effect: "fadeInLeft",
          delayScale: 1.5,
          delay: 50,
          sync: false,
          shuffle: false,
        },
        out: {
          effect: "hinge",
          delayScale: 1.5,
          delay: 50,
          sync: false,
          shuffle: false,
          callback: function () {
            // Reset the text to its initial state
            $(h1Element).textillate("out");
          },
        },
      });

      // Start the animation manually
      $(h1Element).textillate("in");
    });
}

loadingAnimation();
cursorAnimatin();
locomotiveJs();
sheryAnimation();
flagAnimation();
textAnimation();

//custom mouse follower
// document.querySelector("body").addEventListener("mousemove", function (e) {
//   gsap.to(".cursor", {
//     left: e.clientX,
//     top: e.clientY,
//   });
// });

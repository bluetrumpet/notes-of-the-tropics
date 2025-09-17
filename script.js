const winds = document.getElementById('winds');
const pressure = document.getElementById('pressure');
const dir = document.getElementById('speed');

let index = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const total = images.length;

function getOffset(i) {
  let offset = 0;
  for (let j = 0; j < i; j++) {
    offset += images[j].offsetWidth; // add widths of all previous images
  }
  return offset;
}

function updateSlide() {
  const offset = getOffset(index);
  slides.style.transform = `translateX(${-offset}px)`;
}

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % total;
  updateSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + total) % total;
  updateSlide();
});

window.addEventListener('resize', updateSlide);

// winds
if (window.innerWidth > 580) {
winds.addEventListener('mouseenter', () => {
  document.getElementById("defineWinds").style.display = "block";
  document.getElementById("active").style.width = "40%";
  document.getElementById("mainHeader").style.width = "58%";
  document.getElementById("carousel").style.width = "58%";
});

winds.addEventListener('mouseleave', () => {
  document.getElementById("defineWinds").style.display = "none";
  document.getElementById("active").style.width = "30%";
  document.getElementById("mainHeader").style.width = "68%";
  document.getElementById("carousel").style.width = "68%";
});

pressure.addEventListener('mouseenter', () => {
  document.getElementById("definePressure").style.display = "block";
  document.getElementById("active").style.width = "40%";
  document.getElementById("mainHeader").style.width = "58%";
  document.getElementById("carousel").style.width = "58%";
});

pressure.addEventListener('mouseleave', () => {
  document.getElementById("definePressure").style.display = "none";
  document.getElementById("active").style.width = "30%";
  document.getElementById("mainHeader").style.width = "68%";
  document.getElementById("carousel").style.width = "68%";
});

dir.addEventListener('mouseenter', () => {
  document.getElementById("defineDir").style.display = "block";
  document.getElementById("active").style.width = "40%";
  document.getElementById("mainHeader").style.width = "58%";
  document.getElementById("carousel").style.width = "58%";
});

dir.addEventListener('mouseleave', () => {
  document.getElementById("defineDir").style.display = "none";
  document.getElementById("active").style.width = "30%";
  document.getElementById("mainHeader").style.width = "68%";
  document.getElementById("carousel").style.width = "68%";
});
} else {
  winds.addEventListener('mousedown', () => {
    document.getElementById("defineWinds").style.display = "block";
  });

  winds.addEventListener('mouseup', () => {
    document.getElementById("defineWinds").style.display = "none";
  });

  pressure.addEventListener('mousedown', () => {
    document.getElementById("definePressure").style.display = "block";
  });

  pressure.addEventListener('mouseup', () => {
    document.getElementById("definePressure").style.display = "none";
  });

  dir.addEventListener('mousedown', () => {
    document.getElementById("defineDir").style.display = "block";
  });

  dir.addEventListener('mouseup', () => {
    document.getElementById("defineDir").style.display = "none";
  });
}

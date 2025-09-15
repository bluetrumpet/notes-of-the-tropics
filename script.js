const winds = document.getElementById('winds');
const pressure = document.getElementById('pressure');
const dir = document.getElementById('speed');

// winds
winds.addEventListener('mouseenter', () => {
  document.getElementById("defineWinds").style.display = "block";
  document.getElementById("active").style.width = "40%";
});

winds.addEventListener('mouseleave', () => {
  document.getElementById("defineWinds").style.display = "none";
  document.getElementById("active").style.width = "30%";
});

pressure.addEventListener('mouseenter', () => {
  document.getElementById("definePressure").style.display = "block";
  document.getElementById("active").style.width = "40%";
});

pressure.addEventListener('mouseleave', () => {
  document.getElementById("definePressure").style.display = "none";
  document.getElementById("active").style.width = "30%";
});

dir.addEventListener('mouseenter', () => {
  document.getElementById("defineDir").style.display = "block";
  document.getElementById("active").style.width = "40%";
});

dir.addEventListener('mouseleave', () => {
  document.getElementById("defineDir").style.display = "none";
  document.getElementById("active").style.width = "30%";
});

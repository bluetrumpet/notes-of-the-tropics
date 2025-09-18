const winds = document.getElementById('winds');
const pressure = document.getElementById('pressure');
const dir = document.getElementById('speed');

// winds
///if (window.innerWidth > 580) {
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
///}

function showNotes() {
  if (document.getElementById("hidden").style.display == "none") {
    document.getElementById("hidden").style.display = "block";
    document.getElementById("showNotes").innerHTML = "Hide prior notes";
  } else {
    document.getElementById("hidden").style.display = "none";
    document.getElementById("showNotes").innerHTML = "Show prior notes";
  }
}


/*

 else {
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

*/

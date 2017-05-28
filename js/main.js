alert("Нажми: Ctrl+E и печатай!")

document.onkeydown = function(e) {
  if (e.keyCode == 27) { // escape
    cancel();
    return false;
  }

  if ((e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) && !area.offsetHeight) {
    edit();
    return false;
  }

  if ((e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) && area.offsetHeight) {
    save();
    return false;
  }
};

function edit() {
  view.style.display = 'none';
  area.value = view.innerHTML;
  area.style.display = 'block';
  area.focus();
}

function save() {
  area.style.display = 'none';
  view.innerHTML = area.value;
  view.style.display = 'block';
}

function cancel() {
  area.style.display = 'none';
  view.style.display = 'block';
}
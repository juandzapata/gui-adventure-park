document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instance = M.Sidenav.init(elems, {});
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instance = M.Dropdown.init(elems, {});
    
  });

  function ShowSlider() {
    //Slider
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {
      height: 450,
      duration: 500,
      interval: 3000
    });
  }

  function ShowToastMessage(message, className){
    var toastHTML = `<span class="${className}">${message}</span>`;
    M.toast({html: toastHTML});
  }
  
  
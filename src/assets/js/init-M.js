document.addEventListener('DOMContentLoaded', function() {
    //
    var elems = document.querySelectorAll('.sidenav');
    var instance = M.Sidenav.init(elems, {
    });
    //
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instance = M.Dropdown.init(elems, {
      hover: true      
    });
    //
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

  function OpenModal() {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
    let elem = document.querySelector("#AddModal");
    var instance = M.Modal.getInstance(elem);
    instance.open();
  }

  function firstReport(data) {
    new Chart(
        document.getElementById('acquisitions'),
        {
          type: 'bar',
          data: {
            labels: data.map(row => row.year),
            datasets: [
              {
                label: 'Acquisitions by year',
                data: data.map(row => row.count)
              }
            ]
          }
        }
      );
}
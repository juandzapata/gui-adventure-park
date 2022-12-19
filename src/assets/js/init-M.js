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
            labels: data.map(row => row.estado),
            datasets: [
              {
                label: 'Estado de las atracciones',
                data: data.map(row => row.count),
                backgroundColor: [
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                  'rgb(75, 192, 192)',
                  'rgb(255, 205, 86)',
                  'rgb(255, 99, 132)'
                ],
                borderWidth: 1
              }
            ]
          },
          options: {
            indexAxis: 'y',
          }
        }
      );
}

  function downloadChart() {
    const imageLink = document.createElement('a');
    const canvas = document.getElementById('acquisitions');
    imageLink.download = 'chart.png'; 
    imageLink.href = canvas.toDataURL("image/png", 1); // 1 is the quality 
    imageLink.click();
  }
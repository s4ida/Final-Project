const detailpagediv = document.getElementById('detailpagediv');
const table = document.getElementById('table')
const photos = document.getElementById('photos')
const descriptionsdiv = document.getElementById('descriptionsdiv')
function getproducts() {
table.innerHTML = ``;
photos.innerHTML = '';
descriptionsdiv.innerHTML = '' ;

    let detailpage = JSON.parse(localStorage.getItem('detailpage')) || [];
    console.log(detailpage);
      const thRow = document.createElement('tr');
      thRow.innerHTML = `
          <th>Name</th>
          <th>Current Bid</th>
          <th>Mileage</th>
          <th>Fuel Type</th>
          <th>Year</th>
          <th>Airbags</th>
          <th>Body</th>
          <th>Color</th>
          <th>Seats</th>
          <th>Door</th>
          <th>Gearbox</th>
          <th>Climatisation</th>
          <th>Parking</th>
          <th>Power</th>
      `;
      table.appendChild(thRow);
  
    detailpage.map((item) => {
        const tr= document.createElement('tr');
        tr.innerHTML = `
        <td>${item.Name}</td>
        <td>${item.CurrentBid}</td>
        <td>${item.Mileage}</td>
        <td>${item.FuelType}</td>
        <td>${item.Year}</td>
        <td>${item.Airbags}</td>
        <td>${item.Body}</td>
        <td>${item.Color}</td>
        <td>${item.Seats}</td>
        <td>${item.Door}</td>
        <td>${item.Gearbox}</td>
        <td>${item.Climatisation}</td>
        <td>${item.Parking}</td>
        <td>${item.Power}</td>
        

        `;
        const container= document.createElement('div');
        container.className = "container"
        container.innerHTML = `
        <div class="card">
        <img src="${item.image1}">
        <div class="card__head">Front view</div>
      </div>
      <div class="card">
      <img src="${item.image2}">
      <div class="card__head">Side view</div>
    </div>   
    <div class="card">
    <img src="${item.image3}">
    <div class="card__head">View from behind</div>
  </div>   <div class="card">
  <img src="${item.image4}">
  <div class="card__head">Internal view</div>
</div>   <div class="card">
<img src="${item.image5}">
<div class="card__head">General appearance</div>
</div>
   
        `;

const descriptions = document.createElement('div')
descriptions.innerHTML = `
<p><span>Description:</span>${item.Description}</p>
<p><span>Design:</span>${item.Description1}</p>
<p><span>Engine:</span>${item.Description2}</p>
<p><span>Transmission:</span>${item.Description3}</p>

`



        photos.appendChild(container);
     table.appendChild(tr);
     descriptionsdiv.appendChild(descriptions)
    });
}
getproducts();

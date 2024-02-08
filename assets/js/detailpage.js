const detailpagediv = document.getElementById('detailpagediv');
const table = document.getElementById('table')
const photos = document.getElementById('photos')

function getproducts() {
    detailpagediv.innerHTML = ``;
    let detailpage = JSON.parse(localStorage.getItem('detailpage')) || [];
    console.log(detailpage);
    detailpage.map((item) => {
        const tr= document.createElement('tr');
        tr.innerHTML = `
        <p>${item.Name}</p>
      
        `;
     table.appendChild(tr);
    });
}
getproducts();
const ourproducts = document.getElementById ('ourproducts')

function getproducts () {
    page = 1
    limit = 8
     axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products?page=${page}&limit=${limit}`)
    .then(res=>{
        products = res.data
       products.map(item=>{
            let box = document.createElement('div')
            box.className = 'box col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3'
        box.innerHTML = `
        <div class="boxproducts">
        <img src="${item.image}" alt="">
        <h1>${item.Name}</h1>
        <div class="detail">
        <p>${item.Year}</p>
        <p>${item.Mileage}KM</p>
        <p>${item.FuelType}</p>
</div>
<p>Current Bid:<span>${item.CurrentBid}</span></p>
        <button onclick="openProductDetail(${item.id})">View Details</button>
        </div>
        `
        ourproducts.appendChild(box)
        })
        page++
    })
}
function openProductDetail(productId) {
    window.location.href = `detailpage${productId}.html`;
}
getproducts()

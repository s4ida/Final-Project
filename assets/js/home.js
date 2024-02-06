const ourproducts = document.getElementById ('ourproducts')
// const pagination = document.getElementById ('pagination')
function getproducts () {
   
     axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
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
      
    })
}
function openProductDetail(productId) {
    window.location.href = `detailpage${productId}.html`;
}
getproducts()

const searchinput = document.getElementById('searchinput');
const searchform = document.getElementById('searchform');



function searchbyname(e) {
  ourproducts.innerHTML = '';
  e.preventDefault();
  axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
    .then(res => {
      const products = res.data;
      const searchdata = products.filter((item) => item.Name.toLowerCase().startsWith(searchinput.value.toLowerCase()));
      searchdata.map(item => {
        const sortproducts = document.createElement('div');
        sortproducts.className = "sortproducts col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"
        sortproducts.innerHTML = `
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
        `;
        ourproducts.appendChild(sortproducts);
      });
    });
}

searchform.addEventListener('submit', searchbyname);


const filterdata = document.getElementById('filterdata')
// function openProductDetail(productId) {
//     console.log(`Open product detail for ID: ${productId}`);
//   }
function sortdatadefault(){
   ourproducts.innerHTML = ''
    let selectvalue = filterdata.value
    if(selectvalue==='1'){
        axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
        .then(res=>{
            products = res.data
            products.map(item=>{
                let box= document.createElement('div')
                box.className = "box col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"

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
          
        })
    }
    }
    filterdata.addEventListener('change',sortdatadefault)


    function sortdataAZ(){
       ourproducts.innerHTML = ''
        let selectvalue = filterdata.value
        if(selectvalue==='2'){
            axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
            .then(res=>{
                products = res.data
                let sortaz = products.sort((a,b)=>a.Name.localeCompare(b.Name))
                sortaz.map(item=>{
                    let box = document.createElement('div')
                    box.className = "box col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"

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
              
            })
        }
        }
        filterdata.addEventListener('change',sortdataAZ)

        function sortdataZA(){
            ourproducts.innerHTML = ''
            let selectvalue = filterdata.value
            if(selectvalue==='3'){
                axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
                .then(res=>{
                    products = res.data
                    let sortza = products.sort((a,b)=>b.Name.localeCompare(a.Name))
                    sortza.map(item=>{
                        let box = document.createElement('div')
                        box.className = "box col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"
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
                  
                })
            }
            }
            filterdata.addEventListener('change',sortdataZA)

            function old() {
            ourproducts.innerHTML='';
                let selectvalue = filterdata.value;
                if(selectvalue==='4'){
                  axios.get('https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products')
                  .then(res=>{
                    products=res.data
                    let sorteddata=products.sort((a,b)=>a.Year-b.Year)
              sorteddata.map(item=>{
                let box = document.createElement('div')
                box.className = "box col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"
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
               ourproducts.appendChild(box);
              })
                  })
                }
              }
         filterdata.addEventListener('change',old)


         
         function newcars() {
            ourproducts.innerHTML='';
                let selectvalue = filterdata.value;
                if(selectvalue==='5'){
                  axios.get('https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products')
                  .then(res=>{
                    products=res.data
                    let sorteddata=products.sort((a,b)=>b.Year-a.Year)
              sorteddata.map(item=>{
                let box = document.createElement('div')
                box.className = "box col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"
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
               ourproducts.appendChild(box);
              })
                  })
                }
              }
         filterdata.addEventListener('change',newcars)






const ourproducts = document.getElementById ('ourproducts')
const pagination = document.getElementById('pagination')
const basketCount = document.getElementById('basketCount');


function getproducts () {

     axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
    .then(res=>{
        products = res.data
       products.map((item,index)=>{
            let box = document.createElement('div')
            box.className = 'box col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3'
        box.innerHTML = `
        <div class="boxproducts">
        <img src="${item.image}" alt="">
        <h1>${item.Name}</h1>
        <button class="detailbtn" onclick="addtodetailpage(${item.id})"><a href="/detailpage.html">View Details</a></button>

      <div class="btns">
    <button onclick="addtobasket(${item.id})"><i class="fa-solid fa-cart-shopping"></i>
    </button>
    <button onclick="addtowishlist(${item.id})"><i class="fa-regular fa-heart"></i></button>

</div>
</div>
        `
    
        ourproducts.appendChild(box)
        })
      
    })
}
function addtodetailpage(id) {
  let detailpage = JSON.parse(localStorage.getItem('detailpage')) || [];
      detailpage.push(products.find(item => item.id == id));
  const maxDetailPageItems = 1;
  if (detailpage.length > maxDetailPageItems) {
      detailpage.shift();
  }
  localStorage.setItem('detailpage', JSON.stringify(detailpage));
}
getproducts()

function addtobasket(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let productitem = cart.find((item) => item.id == id);

  if (productitem) {
    // Ürün zaten sepette, bulunduğu index'i bul ve kaldır
  
    const index = cart.indexOf(productitem);
    if (index !== -1) {
      cart.splice(index, 1);
    }
  } else {
    // Ürün sepette yok, sepete ekle
    cart.push(products.find(item => item.id == id));
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateBasketCount();
}




document.addEventListener('DOMContentLoaded', updateBasketCount);

function addtowishlist(id){
  let wishlist= JSON.parse(localStorage.getItem('wishlist')) || []
  let productitem = wishlist.find((item)=>item.id == id)
  if(productitem){
    alert('This product is already in favorites')
  }
  else{
      wishlist.push(products.find(item=>item.id == id))
      localStorage.setItem('wishlist',JSON.stringify(wishlist))

  }

}

function updateBasketCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemCount = cart.reduce((total, item) => total + (item.count || 0), 0);
    basketCount.textContent = itemCount.toString();
}

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
        sortproducts.className = "box col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"
        sortproducts.innerHTML = `
          <div class="boxproducts">
            <img src="${item.image}" alt="">
            <h1>${item.Name}</h1>
   
            <button class="detailbtn"   onclick="openProductDetail(${item.id})">View Details</button>
            <div class="btns">
            <button onclick="addtobasket(${item.id})"><i class="fa-solid fa-cart-shopping"></i></button>
            <button onclick="addtowishlist(${item.id})"><i class="fa-regular fa-heart"></i></button>
        
        </div>
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
  
                <button class="detailbtn"  onclick="openProductDetail(${item.id})">View Details</button>
                <div class="btns">
                <button onclick="addtobasket(${item.id})"><i class="fa-solid fa-cart-shopping"></i></button>
                <button onclick="addtowishlist(${item.id})"><i class="fa-regular fa-heart"></i></button>
            
            </div>
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
     
                    <button class="detailbtn"  onclick="openProductDetail(${item.id})">View Details</button>
                    <div class="btns">
                    <button onclick="addtobasket(${item.id})"><i class="fa-solid fa-cart-shopping"></i></button>
                    <button onclick="addtowishlist(${item.id})"><i class="fa-regular fa-heart"></i></button>
                
                </div>
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
                                            <button onclick="openProductDetail(${item.id})">View Details</button>
                        <div class="btns">
                        <button onclick="addtobasket(${item.id})"><i class="fa-solid fa-cart-shopping"></i></button>
                        <button onclick="addtowishlist(${item.id})"><i class="fa-regular fa-heart"></i></button>
                    
                    </div>
                      </div>
                        `
                       ourproducts.appendChild(box)
                    })
                  
                })
            }
            }
            filterdata.addEventListener('change',sortdataZA)




         






const basketdiv = document.getElementById('basketdiv')

function getproducts(){
    basketdiv.innerHTML = ''
    let cart = JSON.parse(localStorage.getItem('cart')) || []
  cart.map((item,index)=>{
        let box = document.createElement('div')
        box.className = 'box col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'
        box.innerHTML = `
        <div class="boxdiv">
        <img src="${item.image}">
        <p class="name">${item.Name}</p>
        <p>${item.CurrentBid}</p>
        <button onclick="remove(${index})"><i class="fa-solid fa-trash"></i></button>
        </div>
        `
        basketdiv.appendChild(box)
    })
}
getproducts()
function remove(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  if (cart[index].count > 1) {
    cart[index].count -= 1;
  } else {
    cart.splice(index, 1);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  getproducts();
}
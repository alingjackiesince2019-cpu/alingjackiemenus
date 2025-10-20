// --- CART USING LOCALSTORAGE ---

//COUNTER
function changeC(id,change){
  const qty = document.getElementById('qty-${id}');
  let qty = parseint(qtyEL.innerText);
  qty=Math.max(1,qty+change);
  qtyEL.innerText=qty;
}
function getC(id){
  return
  parseint(document.getElementById('qty-${id}').innerText);
}

  
// Add item to localStorage cart
function addtocart(name, price,quantity=1) {

  
  // Get existing cart or create an empty one
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existing = cart.find(item=>item.name===name);
  if(existing){
    existing.quantity+=quantity;
  } else{
    cart.push({name,price,quantity});
  }
  
  // Add new item
  //cart.push({ name, price });

  // Save back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  alert('${quantity} x ${name} added to cart!`);
}





// open cart
document.getElementById('cartlogo').addEventListener('click', () => {
  window.location.href='cart.html'; 
});


// search bar

document.getElementById("search").addEventListener("input",function(){
  const searchValue = this.value.toLowerCase();
  const a = document.querySelectorAll(".column");

  a.forEach(a=>{
    const text = a.textContent.toLowerCase();
    a.style.display=text.includes(searchValue)?"block":"none"
  }) 
})





// tab bar

function category(bundle) {
  const target = document.getElementById(bundle);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

function category(bilao) {
  const target = document.getElementById(bilao);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}

function category(partytray) {
  const target = document.getElementById(partytray);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}

function category(home) {
  const target = document.getElementById(home);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}

function category(solo) {
  const target = document.getElementById(solo);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}

function category(dessert) {
  const target = document.getElementById(dessert);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}










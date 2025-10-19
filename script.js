// --- CART USING LOCALSTORAGE ---

//COUNTER
let o=1;
let cartTotal=0;
function count(change){
  o=Math.max(1,o+change)
  document.getElementById("orders").innerText=o;
}

// Add item to localStorage cart
function addtocart(name, price) {

  //add the COUNTER
  const total = o * price
  cartTotal +=total
  document.getElementById("cartTotal").innerText = cartTotal;
  
  
  // Get existing cart or create an empty one
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Add new item
  cart.push({ name, price });

  // Save back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  alert('$(o) x `${name} added to cart!`);
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








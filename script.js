// --- CART USING LOCALSTORAGE ---

// Add item to localStorage cart
function addtocart(name, price) {
  const s=document.getElementById("btnclick");
  s.currentTime = 0;
  s.play();

  
  // Get existing cart or create an empty one
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  //ADDED-------------------------------------------------------------------
  const existing = cart.find(item=>item.name===name);
  if(existing){
    existing.quantity++;  
  }else{
    cart.push({name,price,quantity:1})
  }

  
  // Add new item
 //needed cart.push({ name, price });

  // Save back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  alert(`${name} added to cart!`);
  
}





// open cart
document.getElementById('cartlogo').addEventListener('click', () => {
  window.location.href='cart.html'; 
});

// open MAP
document.getElementById('map').addEventListener('click', () => {
  window.location.href='location.html'; 
});

// open tutorial
document.getElementById('tutorial').addEventListener('click', () => {
  window.location.href='tutorial.html'; 
});



// search bar

document.getElementById("search").addEventListener("input",function(){
  const searchValue = this.value.toLowerCase();
  const a = document.querySelectorAll(".column");
  const button = document.getElementByid('myButton');

  a.forEach(a=>{
    const text = a.textContent.toLowerCase();
    a.style.display=text.includes(searchValue)?"block":"none"
  })
  if(serarchValue.value.trim() !== ""{
  button.style.display = 'none';
}
else{
  button.style.display='inline-block';
}
  
})


//play button
function play(){
  const soundclick=document.getElementById("btnclick");
  soundclick.currentTime = 0;
  soundclick.play();  
}
function playshop(){
  const soundshop=document.getElementById("btnshop");
  soundshop.currentTime = 0;
  soundshop.play();  
}
function playwhoosh(){
  const soundwhoosh=document.getElementById("btnwhoosh");
  soundwhoosh.currentTime = 0;
  soundwhoosh.play();  
}





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

function category(drinks) {
  const target = document.getElementById(drinks);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}

function category(cakes) {
  const target = document.getElementById(cakes);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}

function category(partybox) {
  const target = document.getElementById(partybox);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}

function category(partytraychicken) {
  const target = document.getElementById(partytraychicken);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}

function category(partytraypork) {
  const target = document.getElementById(partytraypork);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}

function category(partytraybeef) {
  const target = document.getElementById(partytraybeef);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}

function category(partytraypasta) {
  const target = document.getElementById(partytraypasta);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}

function category(partytrayveggies) {
  const target = document.getElementById(partytrayveggies);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}

function category(partytrayseafood) {
  const target = document.getElementById(partytrayseafood);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}

function category(valuemeal) {
  const target = document.getElementById(valuemeal);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}

function category(muffin) {
  const target = document.getElementById(muffin);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}

function category(burger) {
  const target = document.getElementById(burger);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}

function category(sandwichandwaffle) {
  const target = document.getElementById(sandwichandwaffle);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}

function category(grahambar) {
  const target = document.getElementById(grahambar);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}


function category(ricemeal) {
  const target = document.getElementById(ricemeal);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}

function category(putocake) {
  const target = document.getElementById(putocake);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}

function category(premium) {
  const target = document.getElementById(premium);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}

function category(bar) {
  const target = document.getElementById(bar);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}

function category(primeputo) {
  const target = document.getElementById(primeputo);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}

function category(bento) {
  const target = document.getElementById(bento);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

}





























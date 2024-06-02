let div = document.querySelector('.main') 
axios('https://fakestoreapi.com/products')
.then((res)=>{
    console.log(res.data);
res.data.map((item)=>{
    div.innerHTML+=`
    
    <div class="card">
  <img class="card-img-top" src="${item.image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Title: ${item.title}</h5>
    <h5 class="card-title">Price: ${item.price}</h5>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `
})
})
.catch((err)=>{
console.log(err);
})
const product = [
    { id: 1, title: "Mini PC de escritorio OMnS", price: 299  , picUrl:"/assets/256x186.svg", stock: 8 ,description: "PC mini" }
];

 export const getProduct = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(product)
    }, 2000);
})
const products = [
    { id: 1, title: "Mini PC de escritorio OMnS", price: 299  , picUrl:"/assets/256x186.svg", stock: 8 ,description: "PC mini" ,category: "pc" },
    { id: 2, title: "Notebook Gamer Asus 3512", price: 419 ,picUrl:"/assets/256x186.svg" , stock: 5 ,description: "Notebook",category: "notebooks"},
    { id: 3, title: "Disco Estao Solido 32x151", price: 249 ,picUrl:"/assets/256x186.svg" , stock: 4 ,description: "Disco rigido solido",category: "discos"},
    { id: 4, title: "Mini PC de escritorio OMnS", price: 299  , picUrl:"/assets/256x186.svg", stock: 8 ,description: "PC mini",category: "placas" },
    { id: 5, title: "Notebook Gamer Asus 3512", price: 419 ,picUrl:"/assets/256x186.svg" , stock: 5 ,description: "Notebook",category: "notebooks"},
    { id: 6, title: "Disco Estao Solido 32x151", price: 249 ,picUrl:"/assets/256x186.svg" , stock: 4 ,description: "Disco rigido solido",category: "discos"},
    { id: 7, title: "Mini PC de escritorio OMnS", price: 299  , picUrl:"/assets/256x186.svg", stock: 8 ,description: "PC mini",category: "pc" },
    { id: 8, title: "Notebook Gamer Asus 3512", price: 419 ,picUrl:"/assets/256x186.svg" , stock: 5 ,description: "Notebook",category: "notebooks"},
    { id: 9, title: "Disco Estao Solido 32x151", price: 249 ,picUrl:"/assets/256x186.svg" , stock: 4 ,description: "Disco rigido solido",category: "discos"}
  ];

 export const getProducts = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(products)
    }, 2000);
})
const products = [
    { id: 1, title: "Mini pista de hockey sobre hielo", price: 299  , picUrl:'https://st2.depositphotos.com/2605379/6685/i/450/depositphotos_66850373-stock-photo-laptop-cup-and-diary.jpg', stock: 8 ,description: "1" },
    { id: 2, title: "Squishy Ardilla Apretar Antistress", price: 419 ,picUrl:'https://st2.depositphotos.com/2605379/6685/i/450/depositphotos_66850373-stock-photo-laptop-cup-and-diary.jpg' , stock: 5 ,description: "2"},
    { id: 3, title: "Juego pesca fishing peces mini pescamagic a rosca", price: 249 ,picUrl:'https://st2.depositphotos.com/2605379/6685/i/450/depositphotos_66850373-stock-photo-laptop-cup-and-diary.jpg' , stock: 4 ,description: "3"}
  ];

 export const getProducts = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(products)
    }, 2000);
})
const products = [
    { id: 1, title: "PC MX624", price: 299  , picUrl:"https://mexx-img-2019.s3.amazonaws.com/tumb_pc-armada_40256_2.jpeg", stock: 8 ,description: "• Motherboard AM4 - Galax A320M • Procesador Amd Athlon 320GE 3.5 Ghz + Vega 3 - AM4 Oem • Memoria Ram DDR4 - 8Gb 2666 Mhz Hp V6 Rojo •" ,category: "pc" },
    { id: 2, title: "Notebook Asus K513", price: 51989 ,picUrl:"https://mexx-img-2019.s3.amazonaws.com/tumb_40946_1.jpeg" , stock: 5 ,description: "Notebook Gamer Asus K513 Core i7 1165 G7 8Gb Ssd 512Gb 15.6" ,category: "notebooks"},
    { id: 3, title: "Disco Solido Ssd M2", price: 5749 ,picUrl:"https://mexx-img-2019.s3.amazonaws.com/tumb_40042_3.jpeg" , stock: 10 ,description: "Disco Solido Ssd M2 Pci-Nvme 500Gb Kingston NV1",category: "discos"},
    { id: 4, title: "Placa De Video GeForce GT 730 4Gb Msi Oc", price: 18299  , picUrl:"https://mexx-img-2019.s3.amazonaws.com/tumb_placa-video-gt_41084_1.jpeg", stock: 2 ,description: "Placa De Video GeForce GT 730 4Gb Msi Oc",category: "placas" },
    { id: 5, title: "Notebook Hp 240", price: 92187 ,picUrl:"https://mexx-img-2019.s3.amazonaws.com/tumb_notebook-hp_41133_1.jpeg" , stock: 3 ,description: "Notebook Hp 240 G8 Core i7 -1065G7 8Gb 1Tb 14",category: "notebooks"},
    { id: 6, title: "Disco Rigido 1Tb WD Black", price: 10899 ,picUrl:"https://mexx-img-2019.s3.amazonaws.com/tumb_28657_1.jpeg" , stock: 20 ,description: "Disco rigido notebook 1TB Western Digital Blue",category: "discos"},
    { id: 7, title: "PC TT95", price: 274569.99  , picUrl:"https://mexx-img-2019.s3.amazonaws.com/tumb_35185_1.jpeg", stock: 1 ,description: "• Motherboard AM4 - Gigabyte GA-A520M DS3H • Procesador Amd Ryzen 7 3700X 4.4 Ghz - AM4 • Memoria Ram DDR4 - 8Gb 3000 Mhz Hp V6 Azul",category: "pc" },
    { id: 8, title: "Notebook Exo Smart C25L PLUS", price: 49999.99 ,picUrl:"https://mexx-img-2019.s3.amazonaws.com/tumb_notebook-bangho_39895_1.jpeg" , stock: 2 ,description: "Notebook Exo Smart C25L PLUS Celeron N3350 4Gb+64 GB+ 500Gb 14 Win",category: "notebooks"},
    { id: 9, title: "PC Gamer MX686", price: 333249 ,picUrl:"https://mexx-img-2019.s3.amazonaws.com/tumb_40491_1.jpeg" , stock: 6 ,description: "PC MX686  • Motherboard AM4 - Asus Tuf X570-PLUS WIFI • Procesador Amd Ryzen 7 5800X 4.7 Ghz - AM4 Sin Cooler Sin Video • Memoria Ram DDR4 - 8Gb 3000 Mhz Hp V8 Negro Rgb •",category: "pc"}
  ];

 export const getProducts = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(products)
    }, 2000);
})

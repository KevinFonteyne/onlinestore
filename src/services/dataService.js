import axios from "axios";

const catalog = [
    {
        _id:"1",
        title: "HDD",
        price:295.00,
        stock: 25,
        description: "2.4TB",
        category: "Hardware",
        image: "HardDrive.jpg",
    },
    {
        _id:"2",
        title: "GPU",
        price:595.00,
        stock: 30,
        description: "2.4TB",
        category: "Hardware",
        image: "GPU.jpg",
    },
    {
        _id:"3",
        title: "RAM",
        price: 79.99,
        stock: 40,
        description: "16GB",
        category: "Hardware",
        image: "RAM.jpg",
    },   
    {
        _id:"4",
        title: "Motherboards",
        price:295.00,
        stock: 25,
        description: "2.4TB",
        category: "Hardware",
        image: "motherboard.jpg",
    },    
    {
        _id:"5",
        title: "Power Supply",
        price:295.00,
        stock: 25,
        description: "2.4TB",
        category: "Hardware",
        image: "powerSupply.jpg",
    },    
    {
        _id:"6",
        title: "Cases",
        price:295.00,
        stock: 25,
        description: "2.4TB",
        category: "Hardware",
        image: "tower.jpg",
    },
      
];


class DataService {

    serverURL = "http://127.0.0.1:5000"

    async getCatalog() { 
        // call the server]
        // get the list of products and return it
        let res = await axios.get(this.serverURL + "/api/catalog"); 
        return res.data;
        // return catalog;
    } 
    
    async saveProduct(prod){
        let res = await axios.post(this.serverURL + "/api/catalog", prod);
        return res.data;
    }
    
    // get all the coupons
    async getCoupons(){
        let res = await axios.get(this.serverURL + "/api/coupons");
        return res.data
    }
    // save the coupon
    async saveCoupon(coupon){
        let res = await axios.post(this.serverURL + "/api/coupons", coupon);
        return res.data;
    }

}

export default DataService;
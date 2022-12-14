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

    getCatalog() { 
        // call the server]
        // get the list of products and return it
        return catalog;
    }    

}

export default DataService;
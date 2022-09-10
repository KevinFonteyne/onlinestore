import './admin.css';
import {useState, useEffect} from 'react';
import DataService from '../services/dataService';



const Admin = () => {
    const [product, setProduct] = useState({})
    const [coupon, setCoupon] = useState({});
    const [showProdSuccess, setShowProdSuccess] = useState(false);

    const saveProduct = async () => {
        console.log('Save Product')
        console.log(product);
        
        //  use service to send to server

        let fixProd = {...product};
        fixProd.price = +fixProd.price

        let service = new DataService();
        let saveProd = await service.saveProduct(fixProd);
        
        if(saveProd && saveProd._id){
            setShowProdSuccess(true);

            setTimeout(() => {
                setShowProdSuccess(false);}, 2000 );
        }

    };
    const textChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        product[name] = value;

        // create a copy, modify the copy, set the copy
        let copy = {...product};
        copy[name] = value;
        setProduct(copy);
    };
    const couponChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        let copy = {...coupon};
        copy[name] = value;
        setCoupon(copy);
    };
    const saveCoupon = () => {
        console.log(coupon);
        
        let copy = {...coupon};
        copy.discount = parseFloat(copy.discount);

        let service = new DataService();
        service.saveCoupon(copy);

    };

    const loadCoupons = async () => {
        let service = new DataService();
        let allCoupons = await service.getCoupons();
        console.log(allCoupons);
    };

    useEffect(() => {
        loadCoupons();
    }, []);


    return (
        <div className="admin">
            <h1>Store administrator</h1>

            {showProdSuccess ? <div className="alert alert-success">Product Saved</div> : null}

            <div className='parent'>
                <section className='products'>
                    <h3>Register Products</h3>

                    <div className="my-form">
                        <label>Title</label>
                        <input name="title" onChange={textChange} type="text" />
                    </div>

                    <div className="my-form">
                        <label>Price</label>
                        <input name="price" onChange={textChange} type="number" />
                    </div>  
                    
                    <div className="my-form">
                        <label>Image</label>
                        <input name="image" onChange={textChange}type="text" />
                    </div>  
                    
                    <div className="my-form">
                        <label>Category</label>
                        <input name="category" onChange={textChange}type="text" />
                    </div>

                    <div className="my-form">
                        <button onClick={saveProduct} className='btn btn-sm btn-primary'>Save</button>
                    </div>
                </section>
                <section className='list'>
                    <h3>Discount codes</h3>
                    <div className="my-form">
                        <label>Code</label>
                        <input name="code" onChange={couponChange}type="text" />
                    </div>  
                    
                    <div className="my-form">
                        <label>Discount</label>
                        <input name="discount" onChange={couponChange}type="number" />
                    </div>
                    <div className="my-form">
                        <button onClick={saveCoupon} className='btn btn-sm btn-primary'>Discount</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Admin;
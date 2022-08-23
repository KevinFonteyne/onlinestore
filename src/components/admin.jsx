import './admin.css';
import {useState} from 'react';

const Admin = () => {
    const [product, setProduct] = useState({})
    const [coupon, setCoupon] = useState({});

    const saveProduct = () => {
        console.log('Save Product')
        console.log(product);       
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
        console.log('Save Coupon')
        console.log(coupon);       

    };
    return (
        <div className="admin">
            <h1>Store administrator</h1>

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
import React, { useEffect, useState } from 'react';
import Rating from '../components/Rating';
//import data from '../data';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../actions/productActions';

 function  ProductScreen(props) {
  
  const { id } = useParams();
  console.log(id);
  const [qty,setQty] = useState(1);
  const dispatch=useDispatch();
  const history = useNavigate();

  useEffect(()=> {
    dispatch(detailsProduct(id));
  },[dispatch, id])

 // const product = data.products.find((x)=>x._id === id)
  const productDetails =useSelector(state => state.productDetails);
  const {loading, error , product} = productDetails;
  const addToCartHandler = () =>  {
    history(`/cart/${id}?qty=${qty}`);
  }

  

  return (
    <div>
  {
    loading? <LoadingBox></LoadingBox>
    :
    error? <MessageBox>{error}</MessageBox>
    :
    <div>
    <Link to="/" >back to result</Link>
    <div className='row top'>
        <div className='col-2'>
            <img className='large' src={product.image} alt={product.name}  />
        </div>
        <div className='col-1'>
            <ul>
              <li>
                <h1>{product.name}</h1>
              </li>
              <li>
                <Rating
                rating={product.rating}
                numReviews={product.numReviews}
                 />
              </li>
              <li>
                price : ${product.price}
              </li>
              <li>
                description : 
                <p>{product.description}</p>
              </li>
            </ul>
        </div>
        <div className='col-1'>
            <div className='card card-body'>
              <ul>
                <li>
                  <div className='row'>
                    <div >price</div>
                    <div className='price'>${product.price}</div>
                  </div>
                </li>
                <li>
                  <div className='row'>
                    <div >status</div>
                    <div >
                      {product.countInStock>0? (<span className='success'>in Stock</span>)
                      :(
                      <span className='danger'>Unavalaible</span>
                      )}
                    </div>
                  </div>
                </li>

                {
                  product.countInStock > 0 && (
                    <>
                    <li>
                      <div className='row'>
                        <div>Qty</div>
                        <div>
                          <select value={qty} onChange={e => setQty(e.target.value)}>
                            {
                              [...Array(product.countInStock).keys()].map( x => (
                                <option key={x+1} value={x+1}>{x+1}</option>
                              ))
                            }
                          </select>
                        </div>
                      </div>
                    </li>
                        <li>
                            <button onClick={addToCartHandler} className='primary block'>Add card</button>
                         </li>
                    </>     
                  )
                }
                
              </ul>
            </div>
        </div>
    </div>
  </div>
}
     
       
      </div>

    //
   
  )
}

export default (ProductScreen);
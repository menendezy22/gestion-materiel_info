import React, { useEffect } from 'react';
import Product from '../components/Product';
//import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
//import data from '../data';

function HomeScreen() {
 /* const [products,setProducts] =  useState([]);
  const [looading,setLoading] = useState(false);
  const [error,setError] = useState(false);
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        setLoading(true)
        const {data} =await axios.get("/api/products");
        setLoading(false)
        setProducts(data);
      }catch(err){
        setError(err.message)
        setLoading(false)
      }
      
    };
    fetchData();
  },[]) */

  const dispatch = useDispatch();
  const productList =useSelector(state => state.productList);
  const {looading,error, products} = productList;

  useEffect(() => {
      dispatch(listProducts())
  } ,[dispatch])


  return (
    <div>
      {
        looading? <LoadingBox></LoadingBox>
        :
        error? <MessageBox>{error}</MessageBox>
        :
        <div className="row center">
        {
        products.map(product => (

           <Product key={product._id} product={product} />
         ))
         }  
        </div>
      }
         
           
          </div>
  )
}

export default HomeScreen;
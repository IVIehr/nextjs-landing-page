import { useRouter } from "next/router"
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import Link from 'next/link';
// import { useDispatch } from "react-redux";
// import { addCart } from "../redux/action";



export default function Product() {
    const router = useRouter()
    const id = router.query.id
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    // const dispatch = useDispatch();
    // const addProduct = (product) => {
    //   dispatch(addCart(product));
    // };
  
    useEffect(() => {
      const getProduct = async () => {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct(await response.json());
        setLoading(false);
      };
      getProduct();
    }, []);
  
    const Loading = () => {
      return (
        <div className="grid grid-cols-5 gap-4">
          <div>
            <Skeleton height={400} />
          </div>
          <div style={{ lineHeight: 2 }}>
            <Skeleton height={50} width={300} />
            <Skeleton height={75} />
            <Skeleton height={25} width={150} />
            <Skeleton height={50} />
            <Skeleton height={150} />
            <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
          </div>
        </div>
      );
    };
  
    const ShowProduct = () => {
      return (
        <div className="grid grid-cols-2 m-5">
          <div>
            <h2 className="uppercase text-gray-600 text-3xl"> {product.category}</h2>
            <h1 className="text-2xl mt-4 mb-2">{product.title}</h1>
            <p className="leading-7 font-bold">
               {product.rating && product.rating.rate}
            </p>
            <img
              src={product.image}
              alt={product.title}
              height="400px"
              width="400px"
            />
          </div>
          <div>
            <div className="border border-1 p-4">
              <h5 className="my-3 font-bold text-2xl">Description</h5>
              <p >{product.description}</p>
              <div className="flex flex-col align-center">
                <h3 className="my-5 text-center text-xl">Price :  {product.price} $</h3>
                <button
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-2 w-50"
                //   onClick={() => addProduct(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };
  
    return (
      <div>
        <nav className="bg-background-main sticky top-0">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-5 p-4">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                    <li>
                    <a href="/" class="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Back</a>
                    </li>
                    <li>
                    <a href="/" class="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Cart</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="container p-5 ">
            {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    );
  }


import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";

export default function Products({id}) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMouted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMouted === true) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMouted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <div className="grid grid-cols-5 gap-4">
        <div>
          <Skeleton height={350} />
        </div>
        <div>
          <Skeleton height={350} />
        </div>
        <div>
          <Skeleton height={350} />
        </div>
        <div>
          <Skeleton height={350} />
        </div>
      </div>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="container flex justify-center mx-auto">
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Mens' Clothing
          </button>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Womens' Clothing
          </button>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        <div className="container justify-center my-3 mx-auto grid grid-cols-5 gap-4 p-4">
          {filter.map((product) => {
            return (
              <div key={product.id}>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="rounded-t-lg h-64"
                  />
                  <div className="card-body">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${product.price}</p>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-2">
                      <Link
                        href={`/products/${encodeURIComponent(product.id)}`}
                        >
                        show
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="mb-12 py-12 bg-white" id={id}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center py-10">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              All products
          </h2>
          <hr />
        </div>
      </div>
      <div>
        {loading ? <Loading /> : <ShowProducts/>}
      </div>
    </div>
  );
}
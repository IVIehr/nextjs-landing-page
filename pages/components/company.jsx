import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Image from 'next/image'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Company({id}) {
  // const userState = useSelector((userState) => userState.handleUser);
  // const navigate = useNavigate();

  // const proceedTeaching = () => {
  //   if (userState !== null) {
  //     navigate("/cooperation");
  //   } else {
  //     toast("لطفا ابتدا وارد شوید");
  //   }
  // };
  return (
    <div id={id}>
      <div className="container py-5 my-5">
        <div className="grid grid-cols-2 gap-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
          src="assets/teach.png"
          alt="vectore of a team"
          width={500}
          height={500}
        />
        </div>
          <div className="lg:text-center py-10">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Company
            </h2>
            <p className="leading-7 my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias porro accusantium doloribus soluta vitae, tempora quis velit tempore iure possimus dignissimos, saepe a deleniti ipsam nihil voluptatibus sunt, omnis fugit incidunt. Inventore molestias modi, voluptate quaerat ipsa, praesentium mollitia velit sed hic, tempore quibusdam.</p>
            <button
            // onClick={proceedTeaching}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-2 w-50"
          >
            join us
          </button>
          <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
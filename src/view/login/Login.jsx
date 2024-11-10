import React, { useState, useEffect } from "react";
import Logo from "../../../public/chicken.jpeg";
const Login = () => {
  const [count, useCount] = useState(0);

  return (
    <div className="w-full h-screen   flex justify-center items-center">
      <div className="w-[400px] min-h-[600px] ">
        {/* pic logo */}
        <div className="w-full flex justify-center items-center">
          <div className="w-[80px] min-h-[100px] ">
            <div className="w-[90px] h-[100px] ">
              <img
                src={Logo}
                alt="midichicken"
                className="w-full h-full object-cover"
              />
              <h1 className="text-center text-[18px]">ຂາໄກ່ເຈ້ຕຸ້ຍ</h1>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="w-full  border rounded-md mt-[40px] p-[14px]">
          <h2 className="text-center text-[24px] font-bold mt-[8px]">
            ລ໋ອກອິນ
          </h2>
          <p className="mt-[32px]">ຊື່ຜູ້ໃຊ້</p>
          <input
            type="text"
            className="w-full rounded-[6px] border border-gray-200 py-[8px] px-[8px] focus:outline-none"
          />
          <p className="mt-[20px]">ລະຫັດຜ່ານ</p>
          <input
            type="password"
            className="w-full rounded-[6px] border border-gray-200 py-[8px] px-[8px] focus:outline-none"
          />
          {/* jue khoi */}
          <div className="w-full flex items-center mt-2 gap-2">
            <input
              type="checkbox"
              className="w-[18px]
               h-[18px]"
              name="remember"
              id="remember"
            />
            <label for="remember">ຈື່ຂ້ອຍ</label>
          </div>
          <button className="w-full bg-green-500 py-[8px] rounded-md text-white mt-[20px]">
            ລ໋ອກອິນ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

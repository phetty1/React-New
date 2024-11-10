import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import FruitCard from "./components/FruitCard";
import RouterPath from "./router/Route";

function App() {
  const [count, setCount] = useState(0);
  const [news, setNews] = useState([
    {
      title: "Laos news",
      detail: "1245678sgsdfsef",
      date: "12/4/2024",
      photo: viteLogo,
    },
    {
      title: "Thai news",
      detail: "1245678sgsdfsef",
      date: "12/4/2024",
      photo: viteLogo,
    },
    {
      title: "Vietname news",
      detail: "1245678sgsdfsef",
      date: "12/4/2024",
      photo: viteLogo,
    },
    {
      title: "China news",
      detail: "1245678sgsdfsef",
      date: "12/4/2024",
      photo: viteLogo,
    },
  ]);
  const [list, useList] = useState([2, 2, 2, 2]);
  // const headerText=(())
  let headerText = "hello";
  let name = "Manggo";
  let price = 300000;
  let weight = 2;
  return (
    //  className="h-screen   justify-center container mx-auto"
    <div className="w-full  ">
      <RouterPath />
      {/* <div className="h-screen flex items-center justify-center">
        <FruitCard namee={name} price={price} weight={weight} />
      </div> */}

      {/* <Header title={headerText} /> */}
      {/* <Content /> */}
      {/* <Footer /> */}
      {/* <div>
        {list.map((item, index) => {
          return <p key={index}>hello cat {item}</p>;
        })}
      </div> */}
      {/* <div className="flex mt-10">
        {news.map((item, index) => (
          <div key={index}>
            <div className="mx-10">
              <img
                src={item.photo}
                className="logo"
                alt="Vite logo"
                width={100}
              />
              <br />
              <p className="text-2xl">{item.title}</p>
              <br />
              <p>Detail:{item.detail}</p>
              <br />
              <p>{item.date}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default App;

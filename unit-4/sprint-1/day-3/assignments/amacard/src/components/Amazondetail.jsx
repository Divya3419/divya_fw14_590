import Amacard from "./Amacard";

const data1 = {
  date: "28/10/2020",
  logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
  heading: "Case Study",
  subheading: "Amazon Gift Pay",
  devices: "Desktop-Mobile",
  arrow:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png",
  color: "orange",
};

const data2 = {
  date: "17 Sep 2020",
  logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  heading: "Case Study",
  subheading: "Apple Gift Payment",
  devices: "MacOS-Mobile",
  arrow:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png",
  color: "#e6e6e6",
};

const Amacardetail = () => {
  return (
    //display card
    <>
      <Amacard {...data1} />
      <Amacard {...data2} />
    </>
  );
};

export default Amacardetail;

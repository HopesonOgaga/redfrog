import Croak from "./croak";
import Fwog from "./fwogroll";
import Home from "./home";
import Lore from "./lore";

export default function Main() {
  return (
    <section className=" w-full  bg-white bg-gradient-to-r from-black to-red-600 h-screen  ">
      <Home></Home>
      <Lore></Lore>
      <Croak></Croak>
      <Fwog></Fwog>
    </section>
  );
}

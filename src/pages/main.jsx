import Croak from "./croak";
import Fwog from "./fwogroll";
import Home from "./home";
import Lore from "./lore";

export default function Main() {
  return (
    <section className="h-full w-full ">
      <Home></Home>
      <Lore></Lore>
      <Croak></Croak>
      <Fwog></Fwog>
    </section>
  );
}

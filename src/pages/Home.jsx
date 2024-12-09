import loja1 from "../assets/loja-1.jpg";
import loja2 from "../assets/loja-2.jpg";
export default function Home() {
  return (
    <>
      <span className="grid grid-cols-2 p-5 place-items-center">
        <img src={loja1}></img>
        <h1>The cheapest online shopping in the multiverse</h1>
      </span>
      <span className="grid grid-cols-2 p-5 place-items-center">
        <h1>The happiest website to shopping in the town</h1>
        <img src={loja2}></img>
      </span>
    </>
  );
}

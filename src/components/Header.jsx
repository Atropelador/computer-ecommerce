import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div className="w-full h-20 flex justify-between items-center px-8">
        <span className="flex justify-between w-40">
          <Link to="/">Home</Link>
          <Link to="/shopping">Shopping</Link>
        </span>
        <span>
          <h1 className="text-2xl font-bold">logo</h1>
        </span>
      </div>
    </div>
  );
}

export default Header;

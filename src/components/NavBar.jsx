function NavBar() {
  return (
    <div className="w-full h-20 flex justify-between items-center px-8">
      <span>
        <h1 className="text-2xl font-bold">logo</h1>
      </span>
      <span>
        <h2>search</h2>
      </span>
      <span className="">
        <a href="#" className="text-sm/6 font-semibold text-gray-900">
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </span>
    </div>
  );
}

export default NavBar;

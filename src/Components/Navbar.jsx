import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const aboutNavigate = () => {
    navigate("/about");
  };

  const homeNavigate = () => {
    navigate("/");
  };

  const demoNavigate = () => {
    navigate("/demo");
  };
  return (
    <div className="p-8 grid gap-4 grid-cols-3 bg-gray-600/[0.8] text-cyan-100 text-xl fixed top-0 left-0 right-0 z-10">
      <div className="navBtn">
        <button onClick={homeNavigate} className="button-86 text-center">
          Home
        </button>
      </div>
      <div className="navBtn">
        <button onClick={demoNavigate} className="button-86 text-center">
          Demo
        </button>
      </div>
      <div className="navBtn">
        <button onClick={aboutNavigate} className="button-86 text-center">
          About Us
        </button>
      </div>
    </div>
  );
}

export default Navbar;

import logo from "../assets/logo.svg";

function Logo({ cn }) {
  return (
    <div className="flex items-center gap-4">
      <img className={cn} src={logo} alt="xiaomi logo" />
    </div>
  );
}

export default Logo;

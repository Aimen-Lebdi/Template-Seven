import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const renderButton = () => (
    <button
      className={` button relative justify-center items-center inline-flex h-11 transition-colors hover:text-color-1
        ${px || "px-7"}
        ${white ? "text-n-8" : "text-n-1"}
        ${className || ""} `} onClick={onClick}
    >
      <span className=" relative z-10"> {children} </span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a
      href={href}
      className={` button relative justify-center items-center inline-flex h-11 transition-colors hover:text-color-1
      ${px || "px-7"}
      ${white ? "text-n-8" : "text-n-1"}
      ${className || ""} `}
    >
      <span className=" relative z-10"> {children} </span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;

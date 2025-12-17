import clsx from "clsx";

const Button = ({
  text,
  onClick,
  paddingY = "py-2",
  size = "md", // sm | md | lg
  variant = "primary", // primary | outline
  disabled = false,
}) => {
  const sizes = {
    sm: "text-sm px-3",
    md: "text-base px-4",
    lg: "text-lg px-6",
  };

  const variants = {
    primary: "bg-black text-white border-white",
    outline: "bg-transparent text-white border-white",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      className={clsx(
        "relative group inline-block rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B533] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      )}
    >
      <span
        className={clsx(
          "relative inline-flex items-center justify-center font-mono font-medium tracking-tight border rounded-xl overflow-hidden transition-all duration-300 ease-out shadow-md shadow-black/30 group-hover:shadow-lg group-hover:shadow-black/40",
          sizes[size],
          paddingY,
          variants[variant]
        )}
      >
        {/* Expanding hover circle */}
        <span
          className="pointer-events-none absolute w-2 h-2 bg-[white] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 transition-transform duration-700 ease-in-out group-hover:scale-[28] motion-reduce:transition-none motion-reduce:scale-0"
        />

        {/* Gradient overlay */}
        <span className="pointer-events-none absolute inset-0 opacity-30 bg-gradient-to-b from-white/5 via-transparent to-black/40" />

        {/* Text */}
        <span className="relative z-10 transition-colors duration-300 group-hover:text-black group-hover:scale-105">
          {text}
        </span>
      </span>
    </button>
  );
};

export default Button;

// Navbar/footer logo. Source art is public/logo.jpg (1024px);
// public/logo-96.png is the downscaled copy actually served.

const AaryaLogo = ({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "large";
}) => {
  const dim = size === "large" ? "w-12 h-12" : "w-9 h-9";

  return (
    <img
      src="/logo-96.png"
      alt="Aarya Surveillance"
      width={96}
      height={96}
      loading="eager"
      decoding="async"
      className={`${dim} object-contain rounded-sm ${className}`}
    />
  );
};

export default AaryaLogo;

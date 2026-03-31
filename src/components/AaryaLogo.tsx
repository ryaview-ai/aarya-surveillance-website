// Place your logo file at: public/logo.jpg
// It will be accessible as /logo.jpg

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
      src="/logo.jpg"
      alt="Aarya Surveillance Logo"
      className={`${dim} object-contain rounded-sm ${className}`}
    />
  );
};

export default AaryaLogo;

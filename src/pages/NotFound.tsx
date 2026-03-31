import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => (
  <div className="flex min-h-screen items-center justify-center bg-muted">
    <div className="text-center px-4">
      <p className="text-secondary font-bold text-6xl mb-4">404</p>
      <h1 className="text-2xl font-bold mb-3">Page Not Found</h1>
      <p className="text-muted-foreground mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all"
      >
        <Home size={16} /> Back to Home
      </Link>
    </div>
  </div>
);

export default NotFound;

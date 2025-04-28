
import { Link } from "react-router-dom";
import AuthForm from "@/components/auth/AuthForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gradient">
                Continuous Intelligence
              </span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 sm:p-8 bg-secondary/30">
        <div className="w-full">
          <AuthForm />
        </div>
      </main>

      <footer className="border-t border-border py-4 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Continuous Intelligence. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Login;

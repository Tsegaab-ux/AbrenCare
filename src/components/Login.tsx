import { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        email,
        password,
      });

      const { access, refresh, user } = response.data;
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
      localStorage.setItem("currentUser", JSON.stringify(user));

      console.log(response.data);
      alert("Login successful");
      window.location.href = "/";
    } catch (error: any) {
      const serverMessage = error.response?.data?.error || error.message;
      setErrorMessage(serverMessage);
    }
  };

  return (
    <section className="min-h-screen bg-[#F8F5F0] flex">

      
      <div className="hidden lg:flex w-1/2 bg-[#163A5F] items-center justify-center p-16">
        <div>
          <h1 className="text-5xl font-semibold text-white leading-tight">
            Welcome Back
          </h1>
          <p className="text-blue-100 mt-6 text-lg leading-8 max-w-lg">
            Continue managing your healthcare consultations with secure access to
            appointments, family care, and digital medical services.
          </p>
        </div>
      </div>

      
      <div className="flex-1 flex items-center justify-center px-8">

        <div className="w-full max-w-md">

          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-gray-500 mb-8 hover:text-black transition"
          >
            <ArrowLeft size={16} />
            Back Home
          </Link>

          <h2 className="text-4xl font-semibold text-[#1F1F1F]">
            Sign In
          </h2>

          <p className="text-gray-500 mt-2 mb-10">
            Access your secure healthcare account
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {errorMessage && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}

            <div>
              <label className="block mb-2 text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C8922A]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C8922A]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-[#C8922A]"
              >
                Forgot Password?
              </Link>
            </div>

            <button className="w-full bg-[#C8922A] text-white py-4 rounded-xl font-medium hover:opacity-90 transition">
              Sign In Securely
            </button>

          </form>

          <p className="text-center text-gray-500 mt-8">
            No account yet?{" "}
            <Link to="/signup" className="text-[#C8922A] font-medium">
              Create Account
            </Link>
          </p>

        </div>
      </div>
    </section>
  );
}
import { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

type FormDataType = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export default function Signup() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormDataType>({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/users/",
        {
          email: formData.email,
          full_name: formData.fullName,
          phone: formData.phone,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      alert("Account created successfully");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });

    } catch (error: any) {
      const message = error.response?.data || error.message;
      console.error("Signup error:", message);
      setErrorMessage(
        error.response?.data?.detail || error.response?.data || "Signup failed"
      );
      alert("Signup failed");
    }
  };

  return (
    <section className="min-h-screen bg-[#F8F5F0] flex">

      {/* Left side */}
      <div className="hidden lg:flex w-1/2 bg-[#163A5F] items-center justify-center p-16">
        <div>
          <h1 className="text-5xl font-semibold text-white leading-tight">
            Create Your Health Account
          </h1>

          <p className="text-blue-100 mt-6 text-lg leading-8 max-w-lg">
            Join Nordic Abrencare and get access to digital consultations,
            premium family healthcare plans, and executive health services.
          </p>
        </div>
      </div>

      {/* Right side */}
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
            Create Account
          </h2>

          <p className="text-gray-500 mt-2 mb-10">
            Secure access to better healthcare
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {errorMessage && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}

            {/* Full Name */}
            <div>
              <label className="block mb-2 text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C8922A]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C8922A]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C8922A]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm font-medium">Password</label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
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

            {/* Confirm Password */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C8922A]"
              />
            </div>

            <label className="flex items-center gap-3 text-sm text-gray-600">
              <input type="checkbox" />
              I agree to the Terms & Privacy Policy
            </label>

            <button
              type="submit"
              className="w-full bg-[#C8922A] text-white py-4 rounded-xl font-medium hover:opacity-90 transition"
            >
              Create Secure Account
            </button>

          </form>

          <p className="text-center text-gray-500 mt-8">
            Already have an account?{" "}
            <Link to="/login" className="text-[#C8922A] font-medium">
              Sign In
            </Link>
          </p>

        </div>
      </div>
    </section>
  );
}
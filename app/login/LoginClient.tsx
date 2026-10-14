"use client";
import { useState } from "react";
import {
    FiUser,
    FiMail,
    FiLock,
    FiEye,
    FiEyeOff,
    FiShield, FiArrowLeft
} from "react-icons/fi";


export default function LoginClient() {
    const [activeTab, setActiveTab] = useState<
        "signin" | "register" | "reset"
    >("signin");
    const [showPassword, setShowPassword] = useState(false);
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [resetEmail, setResetEmail] = useState("");

    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
        remember: false,
    });

    const [registerData, setRegisterData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    return (
        <>
            <section className="min-h-screen bg-[#F7F3EC] dark:bg-slate-900 flex items-center justify-center px-5 py-8 md:py-12">
                <div className="w-full max-w-[620px]">

                    {/* Card */}
                    <div className="bg-white dark:bg-slate-800 rounded-[30px] shadow-2xl overflow-hidden">

                        {/* Logo */}
                        <div className="pt-10 flex justify-center">
                            <img
                                src="/Zoiko-Local-Logo.png"
                                alt="Zoiko Local"
                                className="w-48 md:w-60 h-14 md:h-16 object-contain"
                            />
                        </div>

                        {/* Tabs */}
                        <div className="px-4 sm:px-8 md:px-12 mt-8">
                            <div className="bg-[#F3ECE6] dark:bg-slate-700 rounded-2xl p-1 flex">
                                <button
                                    onClick={() => setActiveTab("signin")}
                                    className={`flex-1 h-12 rounded-xl text-xs sm:text-sm md:text-base font-bold transition-all duration-300
                                        ${activeTab === "signin"
                                            ? "bg-white dark:bg-slate-800 shadow text-[#123533] dark:text-white"
                                            : "text-gray-500 dark:text-gray-300"
                                        }`}
                                >
                                    Sign In
                                </button>

                                <button
                                    onClick={() => setActiveTab("register")}
                                    className={`flex-1 h-12 rounded-xl text-xs sm:text-sm md:text-base font-bold transition-all duration-300
                                        ${activeTab === "register"
                                            ? "bg-white dark:bg-slate-800 shadow text-[#123533] dark:text-white"
                                            : "text-gray-500 dark:text-gray-300"
                                        }`}
                                >
                                    Register
                                </button>

                                <button
                                    onClick={() => setActiveTab("reset")}
                                    className={`flex-1 h-12 rounded-xl text-xs sm:text-sm md:text-base font-bold transition-all duration-300
                                        ${activeTab === "reset"
                                            ? "bg-white dark:bg-slate-800 shadow text-[#123533] dark:text-white"
                                            : "text-gray-500 dark:text-gray-300"
                                        }`}
                                >
                                    Reset
                                </button>

                            </div>

                        </div>

                        {/* Dynamic Content */}
                        <div className="px-8 md:px-12 py-7 min-h-[560px]">

                            {activeTab === "signin" && (

                                <div className="animate-in fade-in duration-300">

                                    {/* Heading */}

                                    <h2 className="mt-2 text-2xl sm:text-3xl md:text-[40px] leading-none font-serif font-bold text-[#183934] dark:text-white">

                                        Welcome back!

                                    </h2>

                                    <p className="mt-5 text-[17px] leading-8 text-[#8A8A8A] dark:text-gray-400">

                                        Enter your credentials to access your account.

                                    </p>

                                    {/* Username */}

                                    <div className="mt-6">

                                        <label className="block mb-3 text-[15px] font-semibold text-[#183934] dark:text-white">

                                            Username or Email

                                        </label>

                                        <div className="relative">

                                            <FiUser
                                                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#B4A79B]"
                                                size={20}
                                            />

                                            <input
                                                type="text"
                                                placeholder="your@email.com or username"
                                                value={loginData.username}
                                                onChange={(e) =>
                                                    setLoginData({
                                                        ...loginData,
                                                        username: e.target.value,
                                                    })
                                                }
                                                className="w-full h-14 rounded-xl border border-[#DDD3C8]
                                                            bg-[#FCFAF8]
                                                            dark:bg-slate-700
                                                            dark:border-slate-600
                                                            pl-14 pr-5 text-xs sm:text-sm md:text-base
                                                            text-[#183934]
                                                            dark:text-white
                                                            placeholder:text-[#B6ACA3]
                                                            outline-none
                                                            transition
                                                            focus:border-[#EB643F]
                                                            focus:ring-4
                                                            focus:ring-[#EB643F]/10"
                                            />

                                        </div>

                                    </div>

                                    {/* Password */}

                                    <div className="mt-6">

                                        <label className="block mb-3 text-[15px] font-semibold text-[#183934] dark:text-white">

                                            Password

                                        </label>

                                        <div className="relative">

                                            <FiLock
                                                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#B4A79B]"
                                                size={20}
                                            />

                                            <input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="••••••••••••"
                                                value={loginData.password}
                                                onChange={(e) =>
                                                    setLoginData({
                                                        ...loginData,
                                                        password: e.target.value,
                                                    })
                                                }
                                                className="w-full h-14 rounded-xl border border-[#DDD3C8]
                                                         bg-[#FCFAF8]
                                                         dark:bg-slate-700
                                                         dark:border-slate-600
                                                         pl-14 pr-14 text-xs sm:text-sm md:text-base
                                                         text-[#183934]
                                                         dark:text-white
                                                         placeholder:text-[#B6ACA3]
                                                         outline-none
                                                         transition
                                                         focus:border-[#EB643F]
                                                         focus:ring-4
                                                         focus:ring-[#EB643F]/10"
                                            />

                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B4A79B] hover:text-[#183934] dark:hover:text-white transition"
                                            >

                                                {showPassword ? (
                                                    <FiEyeOff size={20} />
                                                ) : (
                                                    <FiEye size={20} />
                                                )}

                                            </button>
                                        </div>
                                    </div>

                                    {/* Remember */}

                                    <div className="mt-8 flex items-center justify-between">

                                        <label className="flex items-center gap-3 cursor-pointer">

                                            <input
                                                type="checkbox"
                                                checked={loginData.remember}
                                                onChange={(e) =>
                                                    setLoginData({
                                                        ...loginData,
                                                        remember: e.target.checked,
                                                    })
                                                }
                                                className="w-5 h-5 rounded border-[#D8CDC2] accent-[#EB643F]"
                                            />

                                            <span className="text-[#666] text-sm md:text-base dark:text-gray-400">

                                                Remember for 30 days

                                            </span>

                                        </label>

                                        <button
                                            onClick={() => setActiveTab("reset")}
                                            className="text-[#EB643F] text-sm md:text-base font-medium hover:underline"
                                        >

                                            Forgot Password?

                                        </button>

                                    </div>

                                    {/* Button */}

                                    <button
                                        className="mt-8 w-full h-14 rounded-xl
                                            bg-[#C74F28]
                                            hover:bg-[#B94722]
                                            text-white
                                            text-lg
                                            font-semibold
                                            shadow-[0_12px_30px_rgba(199,79,40,.25)]
                                            transition-all duration-300"
                                    >

                                        Sign In

                                    </button>

                                    {/* Bottom */}

                                    <p className="mt-8 text-center text-[#8A8A8A] dark:text-gray-400">

                                        Don't have an account?

                                        <button
                                            onClick={() => setActiveTab("register")}
                                            className="ml-1 text-[#EB643F] font-semibold hover:underline"
                                        >
                                            Create one free
                                        </button>
                                    </p>
                                </div>
                            )}

                            {activeTab === "register" && (
                                <div className="animate-in fade-in duration-300">
                                    {/* Heading */}

                                    <h2 className="mt-2 text-2xl sm:text-3xl md:text-[40px] leading-none font-serif font-bold text-[#183934] dark:text-white">

                                        Create Account

                                    </h2>

                                    <p className="mt-5 text-[17px] leading-8 text-[#8A8A8A] dark:text-gray-400">

                                        Fill in your details to get started.

                                    </p>

                                    {/* Username */}

                                    <div className="mt-6">

                                        <label className="block mb-3 text-[15px] font-semibold text-[#183934] dark:text-white">

                                            Username <span className="text-[#EB643F]">*</span>

                                        </label>

                                        <div className="relative">

                                            <FiUser
                                                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#B4A79B]"
                                                size={20}
                                            />

                                            <input
                                                type="text"
                                                placeholder="Choose a username"
                                                value={registerData.username}
                                                onChange={(e) =>
                                                    setRegisterData({
                                                        ...registerData,
                                                        username: e.target.value,
                                                    })
                                                }
                                                className="w-full h-14 rounded-xl border border-[#DDD3C8] bg-[#FCFAF8]
                dark:bg-slate-700 dark:border-slate-600
                pl-14 pr-5 text-[#183934] dark:text-white
                placeholder:text-[#B6ACA3]
                focus:border-[#EB643F] focus:ring-4
                focus:ring-[#EB643F]/10 outline-none transition"
                                            />

                                        </div>

                                    </div>

                                    {/* Email */}

                                    <div className="mt-6">

                                        <label className="block mb-3 text-[15px] font-semibold text-[#183934] dark:text-white">

                                            Email <span className="text-[#EB643F]">*</span>

                                        </label>

                                        <div className="relative">

                                            <FiMail
                                                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#B4A79B]"
                                                size={20}
                                            />

                                            <input
                                                type="email"
                                                placeholder="your@email.com"
                                                value={registerData.email}
                                                onChange={(e) =>
                                                    setRegisterData({
                                                        ...registerData,
                                                        email: e.target.value,
                                                    })
                                                }
                                                className="w-full h-14 rounded-xl border border-[#DDD3C8] bg-[#FCFAF8]
                dark:bg-slate-700 dark:border-slate-600
                pl-14 pr-5 text-[#183934] dark:text-white
                placeholder:text-[#B6ACA3]
                focus:border-[#EB643F] focus:ring-4
                focus:ring-[#EB643F]/10 outline-none transition"
                                            />

                                        </div>

                                    </div>

                                    {/* Password */}

                                    <div className="mt-6">

                                        <label className="block mb-3 text-[15px] font-semibold text-[#183934] dark:text-white">

                                            Password <span className="text-[#EB643F]">*</span>

                                        </label>

                                        <div className="relative">

                                            <FiLock
                                                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#B4A79B]"
                                                size={20}
                                            />

                                            <input
                                                type={showRegisterPassword ? "text" : "password"}
                                                placeholder="Create a strong password"
                                                value={registerData.password}
                                                onChange={(e) =>
                                                    setRegisterData({
                                                        ...registerData,
                                                        password: e.target.value,
                                                    })
                                                }
                                                className="w-full h-14 rounded-xl border border-[#DDD3C8] bg-[#FCFAF8]
                dark:bg-slate-700 dark:border-slate-600
                pl-14 pr-14 text-[#183934] dark:text-white
                placeholder:text-[#B6ACA3]
                focus:border-[#EB643F] focus:ring-4
                focus:ring-[#EB643F]/10 outline-none transition"
                                            />

                                            <button
                                                type="button"
                                                onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B4A79B]"
                                            >
                                                {showRegisterPassword ? (
                                                    <FiEyeOff size={20} />
                                                ) : (
                                                    <FiEye size={20} />
                                                )}
                                            </button>

                                        </div>

                                    </div>

                                    {/* Confirm Password */}

                                    <div className="mt-6">

                                        <label className="block mb-3 text-[15px] font-semibold text-[#183934] dark:text-white">

                                            Confirm Password <span className="text-[#EB643F]">*</span>

                                        </label>

                                        <div className="relative">

                                            <FiShield
                                                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#B4A79B]"
                                                size={20}
                                            />

                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                placeholder="Re-enter your password"
                                                value={registerData.confirmPassword}
                                                onChange={(e) =>
                                                    setRegisterData({
                                                        ...registerData,
                                                        confirmPassword: e.target.value,
                                                    })
                                                }
                                                className="w-full h-14 rounded-xl border border-[#DDD3C8] bg-[#FCFAF8]
                dark:bg-slate-700 dark:border-slate-600
                pl-14 pr-14 text-[#183934] dark:text-white
                placeholder:text-[#B6ACA3]
                focus:border-[#EB643F] focus:ring-4
                focus:ring-[#EB643F]/10 outline-none transition"
                                            />

                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B4A79B]"
                                            >
                                                {showConfirmPassword ? (
                                                    <FiEyeOff size={20} />
                                                ) : (
                                                    <FiEye size={20} />
                                                )}
                                            </button>

                                        </div>

                                    </div>

                                    {/* Button */}

                                    <button
                                        className="mt-8 w-full h-14 rounded-xl
                                        bg-[#C74F28]
                                        hover:bg-[#B94722]
                                        text-white text-lg font-semibold
                                        shadow-[0_12px_30px_rgba(199,79,40,.25)]
                                        transition-all duration-300"
                                    >

                                        Create Account

                                    </button>

                                    {/* Footer */}

                                    <p className="mt-8 text-center text-[#8A8A8A] dark:text-gray-400">

                                        Already have an account?

                                        <button
                                            onClick={() => setActiveTab("signin")}
                                            className="ml-1 text-[#EB643F] font-semibold hover:underline"
                                        >

                                            Sign In

                                        </button>
                                    </p>
                                </div>
                            )}

                            {activeTab === "reset" && (
                                <div className="animate-in fade-in duration-300">
                                    {/* Heading */}

                                    <h2 className="mt-2 text-2xl sm:text-3xl md:text-[40px] leading-none font-serif font-bold text-[#183934] dark:text-white">

                                        Reset Password

                                    </h2>

                                    {/* Description */}

                                    <p className="mt-5 text-[17px] leading-8 text-[#8A8A8A] dark:text-gray-400">

                                        Enter your email and we'll send you a reset link.

                                    </p>

                                    {/* Email */}

                                    <div className="mt-6">

                                        <label className="block mb-3 text-[15px] font-semibold text-[#183934] dark:text-white">

                                            Email Address <span className="text-[#EB643F]">*</span>

                                        </label>

                                        <div className="relative">

                                            <FiMail
                                                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#B4A79B]"
                                                size={20}
                                            />

                                            <input
                                                type="email"
                                                placeholder="your@email.com"
                                                value={resetEmail}
                                                onChange={(e) => setResetEmail(e.target.value)}
                                                className="w-full h-14 rounded-xl
                border border-[#DDD3C8]
                bg-[#FCFAF8]
                dark:bg-slate-700
                dark:border-slate-600
                pl-14 pr-5
                text-[#183934]
                dark:text-white
                placeholder:text-[#B6ACA3]
                outline-none
                transition-all
                focus:border-[#EB643F]
                focus:ring-4
                focus:ring-[#EB643F]/10"
                                            />

                                        </div>

                                    </div>

                                    {/* Button */}

                                    <button
                                        className="mt-10 w-full h-14 rounded-xl
        bg-[#C74F28]
        hover:bg-[#B94722]
        text-white
        text-lg
        font-semibold
        shadow-[0_12px_30px_rgba(199,79,40,.25)]
        transition-all duration-300"
                                    >

                                        Send Reset Link

                                    </button>

                                    {/* Back */}

                                    <div className="mt-10 flex justify-center">

                                        <button
                                            onClick={() => setActiveTab("signin")}
                                            className="flex items-center gap-2
            text-[#EB643F]
            font-medium
            hover:underline"
                                        >

                                            <FiArrowLeft size={16} />

                                            Back to Sign In

                                        </button>

                                    </div>

                                </div>

                            )}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

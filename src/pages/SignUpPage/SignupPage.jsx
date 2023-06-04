import React, { useState } from "react";
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [selectedValue, setSelectedValue] = useState('option1');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleFnameChange = (e) => setFname(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleRememberMeChange = (e) => setRememberMe(e.target.checked);
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // handle login logic
    };


    return (
        <div>
            <Header></Header>
            <div className=" bg-gray-100  justify-center py-12 sm:px-6 lg:px-8">
                <div className=" flex flex-row bg-white py-8 px-4 shadow sm:rounded-md sm:px-10">
                    <div className="hidden  md:block w-2/3 border-r-2 border-gray-200 ">
                        <img
                            className="mx-auto h-3/4 w-auto mb-8"
                            src={require("../../images/Login-img.png")}
                            alt="Logo"
                        />
                        <p className="font-extrabold lg:text-3xl md:text-xl text-3D155F justify-center"><span className="text-df678c">Boosting </span>your <span className="text-df678c"> business</span> to another level</p>
                    </div>
                    <div className="w-full md:px-6 justify-center">
                        <div className="sm:mx-auto sm:w-full sm:max-w-md">

                            <h2 className="mt-6 text-center text-3xl font-bold text-3D155F">
                                Sign Up
                            </h2>
                            <p className="mt-2 text-center text-sm text-gray-500 max-w">
                                Already have an account? <span> </span>
                                <a href="/login" className="font-medium text-df678c">
                                    Login
                                </a>
                            </p>
                        </div>

                        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                            <form className="space-y-6" onSubmit={handleLogin}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="fname"
                                            name="fname"
                                            type="text"
                                            autoComplete=""
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            value={fname}
                                            onChange={handleFnameChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            value={email}
                                            onChange={handleEmailChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">User Type</label>
                                    <div className="mt-1">

                                        <select id="dropdown" required value={selectedValue} onChange={handleSelectChange} className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option value="option1">Investor</option>
                                        <option value="option2">Business Owner</option>
                                    </select>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Confirm Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        checked={rememberMe}
                                        onChange={handleRememberMeChange}
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>
                                <div className="flex items-center justify-center">
                                    <button className="px-12 py-3    text-white font-bold bg-df678c rounded-md mb-2 md:mr-2 md:mb-0">
                                        Sign Up
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default SignUp
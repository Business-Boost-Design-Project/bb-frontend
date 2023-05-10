import React, { useState } from "react";
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { FaCheck } from "react-icons/fa"; // import checkbox 
import Card from "../../components/Card/Card";
const businesses = [
    // assuming you have an array of business objects to display
    {
        id: 1,
        name: "Business 1",
        category: "Category 1",
        location: "Location 1",
        price: "Price 1",
        image: require("../../images/Rectangle 10business1.png"),
        description: "Description 1",
    },
    {
        id: 2,
        name: "Business 2",
        category: "Category 2",
        location: "Location 2",
        price: "Price 2",
        image: require("../../images/Rectangle 10business2.png"),
        description: "Description 2",
    },
    {
        id: 2,
        name: "Business 2",
        category: "Category 2",
        location: "Location 2",
        price: "Price 2",
        image: require("../../images/Rectangle 10business2.png"),
        description: "Description 2",
    },
    {
        id: 2,
        name: "Business 2",
        category: "Category 2",
        location: "Location 2",
        price: "Price 2",
        image: require("../../images/Rectangle 10business2.png"),
        description: "Description 2",
    },
    // add more businesses as needed
];

function Businesses() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            {/* Header component  */}
            <Header></Header>
            <div className="flex flex-col lg:flex-row gap-10">
                {/* Left filter panel */}

                <div className=" bg-gray-50 w-full lg:w-1/6  p-4 ">
                    <div className="flex items-center justify-between flex-wrap">

                        <h2 className="sm:flex sm:items-center sm:flex-shrink-0 text-black font-md text-lg mb-4">Filter By</h2>
                        <div className="block lg:hidden">
                            <button
                                onClick={toggle}
                                className="flex items-center px-3 py-2 border rounded text-black border-black "
                            >
                                <svg
                                    className="fill-current h-3 w-3"
                                    viewBox="0 0 24 24"
                                // xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Menu</title>
                                    {isOpen ? (
                                        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />

                                    ) : (

                                        <path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div
                        className={`${isOpen ? "block" : "hidden"
                            } w-full block flex-grow lg:flex  flex-col lg:items-center `}
                    >
                        {/* Category filter */}
                        <div className="mb-4 flex flex-col border-b-2 border-gray-300 pb-4">
                            <h3 className="text-gray-700 text-lg font-md mb-2">Category</h3>
                            <div className="ml-4">

                                <label className="inline-flex items-center pb-3">
                                    <input type="checkbox" className="form-checkbox " />
                                    <span className="ml-2 text-sm">Option 1</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 text-sm">Option 2</span>
                                </label>
                            </div>
                            {/* add more category options */}
                        </div>
                        {/* Location filter */}
                        <div className="mb-4 flex flex-col border-b-2 border-gray-300 pb-4">
                            <h3 className="text-gray-700 text-lg font-md  mb-2">Location</h3>
                            <div className="ml-4">

                                <label className="inline-flex items-center pb-3">
                                    <input type="checkbox" className="form-checkbox " />
                                    <span className="ml-2 text-sm">Option 1</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 text-sm">Option 2</span>
                                </label>
                            </div>
                            {/* add more location options */}
                        </div>
                        {/* Price filter */}
                        <div className="mb-4 flex flex-col">
                            <h3 className="text-gray-700 text-lg font-md  mb-2">Price</h3>
                            <div className="ml-4">
                                <label className="inline-flex   items-center pb-3">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 text-sm">Option 1</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 text-sm">Option 2</span>
                                </label>
                            </div>
                            {/* add more price options */}
                        </div>
                    </div>
                </div>
                {/* Business cards */}
                <div className=" w-full lg:w-full h-1/5 grid lg:grid-cols-2 md:w-1/3 md:px-50 sm:grid-cols-1 sm:grid-flow-row  lg:p-20  md:grid-cols-1 md:grid-flow-row  justify-center items-center gap-12">
                    {businesses.map((business) => (
                        <Card
                            key={business.id}
                            image={business.image}
                            title={business.name}
                            description={business.description}
                            category={business.category}
                            likes={42}
                            price={business.price}
                        />))}
                </div>
                {/* Footer component  */}
            </div>
            <Footer></Footer>
        </div>

    )
}

export default Businesses;
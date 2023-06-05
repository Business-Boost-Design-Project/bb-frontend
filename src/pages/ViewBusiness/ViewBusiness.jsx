import { React, useState, useEffect } from 'react';
import Header from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { BsBookmark } from 'react-icons/bs';
import { BsBookmarkFill, BsCheck, BsChat, BsDownload } from 'react-icons/bs';


function ViewBusinessPage() {
    const [businesses, setBusinesses] = useState([
        {
            "id": 1,
            "owner": "Fri Sharon",
            "location": "Buea, Cameroon",
            "title": "Wellfare awareness app",
            "category": "Farming",
            "pitch": "IUPF IUONF nioucn unpbp rgbunruir vrpnuhre purvpeoyv ioujp This is some lng dehnhv l dblunh   euhnife iuefo noiuoifc IUPF IUONF nioucn unpbp rgbunruir vrpnuhre purvpeoyv ioujp This is some lng dehnhv l dblunh   euhnife iuefo noiuoifc IUPF IUONF nioucn unpbp rgbunruir vrpnuhre purvpeoyv ioujp This is some lng dehnhv l dblunh   euhnife iuefo noiuoifc IUPF IUONF nioucn unpbp rgbunruir vrpnuhre purvpeoyv ioujp This is some lng dehnhv l dblunh   euhnife iuefo noiuoifc IUPF IUONF nioucn unpbp rgbunruir vrpnuhre purvpeoyv ioujp",

            "description": "ioujp This is some lng dehnhv l dblunh   euhnife iuefo noiuoifc IUPF IUONF nioucn unpbp rgbunruir vrpnuhre purvpeoyv ioujp This is some lng dehnhv l dblunh   euhnife iuefo noiuoifc IUPF IUONF nioucn unpbp rgbunruir vrpnuhre purvpeoyv ioujp This is some lng dehnhv l dblunh   euhnife iuefo noiuoifc IUPF IUONF nioucn unpbp rgbunruir vrpnuhre purvpeoyv ioujp This is some lng dehnhv l dblunh   euhnife iuefo noiuoifc IUPF IUONF nioucn unpbp rgbunruir vrpnuhre purvpeoyv ioujp This is some lng dehnhv l dblunh   euhnife iuefo noiuoifc IUPF IUONF nioucn unpbp rgbunruir vrpnuhre purvpeoyv ioujp This is some lng dehnhv l dblunh   euhnife iuefo noiuoifc IUPF IUONF nioucn unpbp rgbunruir vrpnuhre purvpeoyv ioujp",
            "coverPhoto": require("../../images/Rectangle 10business2.png"),
            "pptxFile": "here.pptx",
            "investment": "6000k",

        },
    ]);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [reviews, setReviews] = useState([
        { "name": "Sharon", "message": "This business idea is so awesome" },
        { "name": "Mofor", "message": "I love the initiative i hope this blossoms into something spectacular" },
    ])
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform any necessary actions with the name and message data
        console.log('Name:', name);
        console.log('Message:', message);

        // Clear the form inputs
        setName('');
        setMessage('');
    };
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const wordCount = inputValue.split(' ').length;

        if (wordCount <= 100) {
            setMessage(inputValue);
        }
    };
    const handleBookmarkToggle = () => {
        setIsBookmarked(!isBookmarked);
        setShowAlert(!isBookmarked)
    };

    useEffect(() => {
        let timer;

        if (showAlert) {
            timer = setTimeout(() => {
                setShowAlert(false);
            }, 2000); // Adjust the duration (in milliseconds) as needed
        }

        return () => {
            clearTimeout(timer);
        };
    }, [showAlert]);
    return (
        <div>
            <Header />

            <div className=" min-h-screen justify">
                {showAlert && (<div>

                    {isBookmarked ? (<p className='justify-center flex mt-5 font-bold-md mr-3 text-green-500 '>Added to Bookmarks <BsCheck className='h-6 w-6' /></p>) :
                        (<p className='justify-center flex mt-5 font-bold-md mr-3 text-red-500'>Removed from Bookmarks</p>)}
                </div>)}

                {businesses.map((business) => (
                    <div className=" py-8 px-4 sm:px-6 lg:px-8">
                        <div className=" rounded-lg p-6">
                            <div className="flex justify-start">

                                <h1 className="text-3xl font-bold text-3D155F mb-4 lg:text-4xl md:text-3xl">{business.title}</h1>
                                <div>
                                    {isBookmarked ? (
                                        <BsBookmarkFill
                                            className="text-yellow-400 cursor-pointer h-6 w-6 mt-3 ml-8"
                                            onClick={handleBookmarkToggle}
                                        />
                                    ) : (
                                        <BsBookmark
                                            className="text-gray-500 cursor-pointer h-5 w-5 mt-3 ml-8"
                                            onClick={handleBookmarkToggle}
                                        />
                                    )}
                                </div>
                            </div>
                            <h2 className="  text-gray-800 mb-2">Owner: {business.owner}</h2>
                            <p className="text-gray-600 mb-2">
                                Location: {business.location}
                            </p>
                            <p className="text-gray-600 mb-2">
                                Category: {business.category}
                            </p>
                            <p className="text-gray-600 mb-4">
                                Invesment Amount: {business.investment}
                            </p>
                            <img
                                src={business.coverPhoto}
                                alt="Business Cover"
                                className="w-1/3 rounded-lg mb-6"
                            />
                            <p className="text-3D155F font-bold text-xl mb-1">Description</p>
                            <p className="text-gray-500 font-medium text-sm mb-8 md:text-base">{business.description}</p>
                            <p className="text-3D155F font-bold text-xl mb-1">Short pitch</p>
                            <p className="text-gray-500 font-medium text-sm mb-8 md:text-base">{business.pitch}</p>
                            

                                <div className="inline-flex  items-center mb-6">
                                    <a
                                        href={business.pptxFile}
                                        download={`${business.title}.pptx`}
                                        className="inline-flex items-center justify-center px-4 py-2 bg-3D155F text-white rounded"
                                    >
                                        Download Business Plan
                                        <BsDownload className='ml-2'/>
                                    </a>
                                <button className="inline-flex py-2 justify-center  px-4 border-2 border-df678c text-df678c bold-md rounded ml-10">
                                    <BsChat className='mr-2'/>
                                    Message Owner
                                </button>
                                </div>
                            </div>
                      
                    </div>))}
            </div>

            {/* Reviews section */}
            <div className="py-8 px-10 bg-gray-100 justify">

                <h2 className="text-2xl font-semibold text-3D155F font-md text-center mb-4">Reviews</h2>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-center ">
                    {/* Render reviews */}
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded shadow-md flex flex-col justify-between"
                        >
                            <div>
                                <p className="text-gray-800 font-semibold">{review.name}</p>
                                <p className="text-gray-600">{review.message}</p>
                            </div>
                            <div className="flex justify-between mt-4">
                            </div>
                        </div>
                    ))}
                </div>

                {/* Review form */}
                <div className="mt-8 bg-white p-4  rounded shadow-md ">
                    <h2 className="text-2xl font-semibold text-3D155F font-md text-center mb-4">Leave a Review</h2>
                    <form onSubmit={handleSubmit}>


                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-800 font-semibold mb-1">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border-gray-300 border rounded py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-800 font-semibold mb-1">
                                Your Message (Max 100 Words)
                            </label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={handleInputChange}
                                className="w-full border-gray-300 border rounded py-2 px-3 text-gray-800 h-32 resize-none focus:outline-none focus:border-blue-500"
                                required
                            ></textarea>
                        </div>
                        <div className='flex  justify-center'>
                            <button
                                type="submit"
                                className="py-2 px-10 border-2 border-df678c  text-df678c font-medium rounded-md transition-colors duration-300 ease-in-out"
                            >
                                Submit Review
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ViewBusinessPage;

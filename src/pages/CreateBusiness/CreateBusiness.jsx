import React, { useState } from 'react';
import SmallBusinessHeader from '../../components/SmallBusinessheader';
import Footer from '../../components/Footer/Footer';
import BusinessInformation from '../../components/BusinessInfo/BusinessInfo';
import FinancialInformation from '../../components/FinancialInfo/FinancialInfo';
import SupportingDocuments from '../../components/SupportingDocs/SupportingDocs';
// import SupportingDocuments from './SupportingDocuments';
// import Finished from './Finished';


const Form = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div>


            <SmallBusinessHeader/>
            <div className=" bg-gray-100  justify-center py-12 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-2/3 mx-auto">
                    <div className="flex justify-center items-center">
                        <div className="flex items-center w-2/3 mx-auto">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 border-2 ${activeTab >= 0 ? 'bg-3D155F' : 'border-gray-300'
                                    }`}
                            >

                            </div>
                            <div
                                className={`h-2 w-16 flex-1  ${activeTab >= 1 ? 'bg-3D155F' : 'bg-gray-300'
                                    }`}
                            ></div>
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 border-2 ${activeTab >= 1 ? 'bg-3D155F' : 'border-gray-300'
                                    }`}
                            >

                            </div>
                            <div
                                className={`h-2 w-16 flex-1  ${activeTab >= 2 ? 'bg-3D155F' : 'bg-gray-300'
                                    }`}
                            ></div>
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 border-2 ${activeTab >= 2 ? 'bg-3D155F' : 'border-gray-300'
                                    }`}
                            >

                            </div>
                            <div
                                className={`h-2 w-16 flex-1 ${activeTab >= 3 ? 'bg-3D155F' : ' bg-gray-300'
                                    }`}
                            ></div>
                            <div
                                className={`w-8 h-8 rounded-full flex items-center  justify-center z-10 border-2 ${activeTab >= 3 ? 'bg-3D155F' : 'border-gray-300'
                                    }`}
                            >

                            </div>
                        </div>
                    </div>
                    {activeTab === 0 && <BusinessInformation></BusinessInformation>}
                    {activeTab === 1 && <FinancialInformation/>}
                    {activeTab === 2 && <SupportingDocuments/>}
                    {activeTab === 3 && 
                    <div className="flex flex-col items-center mb-15 justify-center">
                        <h2 className="text-xl text-df678c font-md text-center mb-4">Finished</h2>
                        <p className="text-center mt-8 mb-4">You're all ready to go</p>
                        <button className="bg-df678c  hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded">
                            Create Business
                        </button>
                    </div>}
                    <div className="flex justify-around flex-row">
                        {activeTab !== 4 ? ( <button
                            className="mt-6 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mr-4"
                            onClick={() => handleTabClick(activeTab - 1)}
                            disabled={activeTab === 0}
                        >
                            Previous
                        </button>) : null}

                        {activeTab !== 3 ? (
                            <button
                                className="mt-6 px-4 py-2 bg-df678c text-white rounded-lg ml-4"
                                onClick={() => handleTabClick(activeTab + 1)}
                            >
                                Next
                            </button>
                        ) :
                            null}

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );

};

export default Form;
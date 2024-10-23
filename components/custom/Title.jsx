import React from "react";

const Title = ({ title, subtitle }) => {
    return (
        <div className=" flex justify-center items-center flex-col w-full mx-auto text-center mt-16">
            <div className="flex items-end">
            <h1 className="text-2xl  md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200">
                {title}
            </h1>
            <span className="w-8 h-1 bg-teal-400 relative -top-2"></span>
            </div>
            <p className="text-lg max-w-xl text-gray-800 mb-8 font-playfair">{subtitle}</p>
        </div>
    );
};

export default Title;

import React from "react";
import { TbRectangleVerticalFilled } from "react-icons/tb";

const Title = ({ title, subtitle }) => {
    return (
        <div className="flex items-start justify-center w-full mx-auto text-left mt-16">
            {/* Icon and Title */}
            <div className="flex items-center space-x-2">
                {/* Icon */}
                <TbRectangleVerticalFilled className="text-orange-500" size={20} />
                
                {/* Title */}
                <h1 className="text-xl md:text-3xl font-bold text-orange-500">
                    {title}
                </h1>
            </div>
            
            {/* Subtitle */}
            <div className="flex flex-col">
                <h2 className="text-2xl font-bold mt-2">Browse By Category</h2>
                <p className="text-lg max-w-xl text-gray-800 mb-8 font-playfair">{subtitle}</p>
            </div>
        </div>
    );
};

export default Title;

import React from "react";
import { TbRectangleVerticalFilled } from "react-icons/tb";

const Title = ({ title, subtitle }) => {
    return (
        <div className="flex flex-col items-start justify-start gap-5 mt-10 mb-5">
            <div className="flex items-center gap-2">
                <TbRectangleVerticalFilled className="text-orange-500 text-xl" size={60} />
                {/* Title */}
                <h1 className="text-xl md:text-3xl font-bold text-orange-500">
                    {title}
                </h1>
            </div>
            {/* Subtitle */}
            <div >
                <p className="text-4xl font-bold text-gray-800 ">{subtitle}</p>
            </div>
        </div>
    );
};

export default Title;

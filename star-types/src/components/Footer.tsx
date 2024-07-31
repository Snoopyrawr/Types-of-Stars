import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="min-h-40 flex justify-center items-center text-yellow-500 underline">
            <a
                href="https://science.nasa.gov/universe/stars/types/"
                className="font-bold"
                target="_blank"
                rel="noopener noreferrer"
            >
                Reference Here
            </a>
        </div>
    );
}

export default Footer;
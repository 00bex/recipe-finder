import React from "react";

const Footer = () => {
    return (
        < footer className="bg-gray-300 text-white text-center py-8 mt-10">
            <p> &copy;{new Date().getFullYear()} Savora.  All rights reserved.</p>
        </footer>
    )
};

export default Footer;
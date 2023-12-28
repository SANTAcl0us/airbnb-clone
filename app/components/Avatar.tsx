"use client";

import Image from "next/image";
import img from "../../public/images/placeholder.jpg";

const Avatar = () => {
    return (
        <>
            <Image
                className="rounded-full"
                height={30}
                width={30}
                alt="Avatar"
                src={img}
            />
        </>
    );
};

export default Avatar;

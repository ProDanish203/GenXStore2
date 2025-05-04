import Link from "next/link";
import React from "react";

export const WhatsappBtn = () => {
  return (
    <Link
      href={`https://wa.me/${process.env.MOBILE_NUMBER}?text="hello! I just came from your website"`}
      target="_blank"
    >
      <div className="bg-green-600 boxShadow fixed bottom-4 right-2 z-50 flex items-center justify-center w-[60px] h-[60px] rounded-full">
        <i className="fab fa-whatsapp text-white text-3xl"></i>
      </div>
    </Link>
  );
};

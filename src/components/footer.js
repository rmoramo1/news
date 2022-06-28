import React from "react";

export const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
  return (
    <div className="bg_orange_dark text-white text-center py-2 fs-5">Copyright Sports Stats - {year} </div>
  )
}

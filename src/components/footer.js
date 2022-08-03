import React from "react";

export const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
  return (
    <div className="bg_base text-white text-center py-2 fs-5">Copyright ISN 365 - {year} </div>
  )
}

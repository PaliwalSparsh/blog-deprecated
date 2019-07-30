import React from "react";
import Link from "next/link";

export default function NavButton(props) {
  return (
    <>
      <Link href={props.link}>
        <img className="navButton" src={props.src} />
      </Link>
      <style jsx>{`
        .navButton {
          width: 200px;
          transition: 0.3s ease;
        }
        .navButton:hover {
          opacity: 0.8;
          transform: scale(1.1);
        }
        @media screen and (max-width: 425px) {
          .navButton {
            width: 150px;
          }
        }      
      `}</style>
    </>
  );
}

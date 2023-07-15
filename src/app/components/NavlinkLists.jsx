import React from "react";
import Link from "next/link";

const NavlinkLists = () => {
  return (
    <>
      <Link className="active" href="/">
        Home
      </Link>
      <Link className="active" href="/visa">
        Visa
      </Link>
      <Link className="active" href="/coaching">
        Coaching
      </Link>
      <Link className="active" href="/countries">
        Countries
      </Link>
      <Link className="active" href="/blog">
        Blog
      </Link>
      <Link className="active" href="/contact">
        Contact
      </Link>
    </>
  );
};

export default NavlinkLists;

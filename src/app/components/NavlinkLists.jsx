import React from "react";
import Link from "next/link";

const NavlinkLists = () => {
  return (
    <>
      <Link activeClass="active" href="/">
        Home
      </Link>
      <Link activeClass="active" href="/">
        Visa
      </Link>
      <Link activeClass="active" href="/">
        Coaching
      </Link>
      <Link activeClass="active" href="/">
        Countries
      </Link>
      <Link activeClass="active" href="/">
        Blog
      </Link>
      <Link activeClass="active" href="/">
        Contact
      </Link>
    </>
  );
};

export default NavlinkLists;

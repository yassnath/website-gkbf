import Link from "next/link";
import { Fragment, useState } from "react";
import SearchModal from "./SearchModal";

const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};
export default Menu;

const DeskTopMenu = () => {
  const [searchModal, setSearchModal] = useState(false);
  return (
    <Fragment>
      <SearchModal
        show={searchModal}
        handleClose={() => setSearchModal(false)}
      />
      <nav className="main-menu d-none d-xl-block">
        <ul>
          <li className="menu-item has-children">
            <a href="http://localhost:3000/">
              home
              <span className="dd-trigger"></span>
            </a>
          </li>
          <li className="menu-item has-children">
            <a href="#">
              About Us
              <span className="dd-trigger"></span>
            </a>
          </li>
          <li className="menu-item has-children">
            <a href="#">
              Events
              <span className="dd-trigger"></span>
            </a>
          </li>
          <li className="menu-item has-children">
            <a href="#">
              Services
              <span className="dd-trigger">
                <i className="far fa-angle-down" />
              </span>
            </a>
            <ul className="sub-menu">
              <li>
                <Link href="destination">General Sunday Service</Link>
              </li>
              <li>
                <Link href="destination-details">Filadelfia Shining Kids</Link>
              </li>
              <li>
                <Link href="blog-details">Filadelfia Youth Ministry</Link>
              </li>
              <li>
                <Link href="destination-details">Worship Night</Link>
              </li>
              <li>
                <Link href="blog-details">Filadelfia Couple Fellowship</Link>
              </li>
              <li>
                <Link href="blog-details">Small Group</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item has-children">
            <a href="#">
              Contact
              <span className="dd-trigger"></span>
            </a>
          </li>
          <li className="menu-item search-item">
            <div
              className="search-btn"
              data-bs-toggle="modal"
              data-bs-target="#search-modal"
              onClick={() => setSearchModal(true)}
            >
              <i className="far fa-search" />
            </div>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu d-block d-xl-none">
      <ul>
          <li className="menu-item has-children">
            <a href="http://localhost:3000/">
              home
            </a>
          </li>
          <li className="menu-item has-children">
            <a href="#">
              About Us
            </a>
          </li>
          <li className="menu-item has-children">
            <a href="#">
              Events
            </a>
          </li>
          <li className="menu-item has-children">
            <a href="#">
              Services
                <i className="far fa-angle-down" />
            </a>
            <ul className="sub-menu">
              <li>
                <Link href="destination">General Sunday Service</Link>
              </li>
              <li>
                <Link href="destination-details">Filadelfia Shining Kids</Link>
              </li>
              <li>
                <Link href="blog-details">Filadelfia Youth Ministry</Link>
              </li>
              <li>
                <Link href="destination-details">Worship Night</Link>
              </li>
              <li>
                <Link href="blog-details">Filadelfia Couple Fellowship</Link>
              </li>
              <li>
                <Link href="blog-details">Small Group</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item has-children">
            <a href="#">
              Contact
            </a>
          </li>
        <li className="menu-item search-item">
          <div
            className="search-btn"
            data-bs-toggle="modal"
            data-bs-target="#search-modal"
          >
            <i className="far fa-search" />
          </div>
        </li>
      </ul>
    </nav>
  );
};

import React, { useState, useEffect, FC } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation: FC<any> = () => {
  const [linkClasses, setLinkClasses] = useState<string[]>([]);
  let location = useLocation();
  useEffect(() => {
    const initialClasses = [
      "nav-item ",
      "nav-item",
      "nav-item",
      "nav-item",
      "nav-item",
      "nav-item",
      "nav-item",
      "nav-item",
      "nav-item",
      "nav-item",
    ];
    setLinkClasses(initialClasses);
    switch (location?.pathname) {
      case "/productslist": {
        initialClasses[1] = initialClasses[1] + " active";
        setLinkClasses(initialClasses);
        break;
      }
      case "/addproduct": {
        initialClasses[2] = initialClasses[2] + " active";
        setLinkClasses(initialClasses);
        break;
      }
      case "/productsorderslist": {
        initialClasses[3] = initialClasses[3] + " active";
        setLinkClasses(initialClasses);
        break;
      }
      case "/addcategory": {
        initialClasses[7] = initialClasses[7] + " active";
        setLinkClasses(initialClasses);
        break;
      }
      case "/gardensorderslist": {
        initialClasses[4] = initialClasses[4] + " active";
        setLinkClasses(initialClasses);
        break;
      }
      case "/addorder": {
        initialClasses[5] = initialClasses[5] + " active";
        setLinkClasses(initialClasses);
        break;
      }
      case "/ordershistory": {
        initialClasses[6] = initialClasses[6] + " active";
        setLinkClasses(initialClasses);
        break;
      }
      case "/addtogallery": {
        initialClasses[8] = initialClasses[8] + " active";
        setLinkClasses(initialClasses);
        break;
      }
      default: {
        initialClasses[0] = initialClasses[0] + " active";
        setLinkClasses(initialClasses);
        break;
      }
    }
  }, [location]);

  return (
    <ul className="navigation-component navbar-nav bg-gradient-primary position-fixed sidebar d-none d-lg-block">
      <Link to="/" className="nav-link">
        <div className="sidebar-brand-text">Plantes & Jardins Admin</div>
      </Link>

      <hr className="sidebar-divider" />

      <li className={linkClasses[0]}>
        <Link to="/" className="nav-link">
          Dashboard
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading mb-2">Produits</div>

      <li className={linkClasses[1]}>
        <Link to="/productslist" className="nav-link">
          productsList
        </Link>
      </li>

      <li className={linkClasses[2]}>
        <Link to="/addproduct" className="nav-link">
          AddProudct
        </Link>
      </li>

      <li className={linkClasses[7]}>
        <Link to="/addcategory" className="nav-link">
          add category
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading mb-2">Orders</div>

      <li className={linkClasses[3]}>
        <Link to="/productsorderslist" className="nav-link">
          products orders List
        </Link>
      </li>

      <li className={linkClasses[4]}>
        <Link to="/gardensorderslist" className="nav-link">
          gardens orders List
        </Link>
      </li>
      <li className={linkClasses[5]}>
        <Link to="/addorder" className="nav-link">
          Add new Order
        </Link>
      </li>
      <li className={linkClasses[6]}>
        <Link to="/ordershistory" className="nav-link">
          Order History
        </Link>
      </li>
      <hr className="sidebar-divider" />

      <div className="sidebar-heading mb-2">Gallerie</div>

      <li className={linkClasses[8]}>
        <Link to="/addtogallery" className="nav-link">
        ajouter une image
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;

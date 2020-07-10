import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../helpers/auth";

const MenuAdmin = () => {
  const { userAuth } = useContext(UserContext);
  if (userAuth.role === "admin") {
    return (
      <>
        <p className="menu-label has-text-lighter">Administracion</p>
        <ul className="menu-list">
          <li>
            <NavLink
              to="settings"
              className="has-text-black"
              activeClassName="is-active"
            >
              <i className="fas fa-cogs icon"></i>
              Configuraciones
            </NavLink>
          </li>
          <div className="navbar-item has-dropdown is-hoverable">
            <li>
              <div className="navbar-link">
                <i className="fas fa-users-cog icon"></i>
                Panel de Administracion
              </div>
              <div className="navbar-dropdown">
                <ul>
                  <li>
                    <NavLink
                      to="customers"
                      className="has-text-black"
                      activeClassName="is-active"
                    >
                      <i className="fas fa-users icon"></i>
                      Miembros
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="books"
                      className="has-text-black"
                      activeClassName="is-active"
                    >
                      <i className="fas fa-book icon"></i>
                      Libros
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="orders"
                      className="has-text-black"
                      activeClassName="is-active"
                    >
                      <i className="fas fa-clipboard-list icon"></i>
                      Ordenes
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </div>
        </ul>
      </>
    );
  } else {
    return null;
  }
};

export default MenuAdmin;

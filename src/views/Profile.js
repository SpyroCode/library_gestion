import React from "react";
import Header from "../layouts/header";
import Asidebar from "../layouts/asidebar";
import EditMember from "../components/EditMember";


const Profile = () => {
  return (
    <>
      <Header />

      <div className="columns is-variable is-0">
        <Asidebar />
        <div className="column is-10-desktop is-offset-2-desktop is-9-tablet is-offset-3-tablet is-12-mobile">
          <div className="p-1">
            <div className="columns is-variable is-desktop">
              <div className="column">
                <h1 className="title">Customer</h1>
              </div>
            </div>
            <div className="columns  is-variable is-desktop">
              <div className="column">
                <div className="column is-full">
                  <div className="card">
                    <div className="card-content">
                      {/* componente dinamicos tablas */}
                      <div className="media">
                        <EditMember/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

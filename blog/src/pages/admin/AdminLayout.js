import React, { useContext } from "react";
import SidebarsPage from "./sidebars/SidebarsPage";
import { AdminContext } from "../../utils/adminContext";


const AdminLayout = ({ children }) => {
  const {messageNotification} = useContext(AdminContext)
  return (
    <div className="d-flex flex-column">
        <SidebarsPage />
      <main className="flex-grow-1 mb-4 " style={{ paddingLeft: '240px'}}>
        {/* {
          messageNotification && 
          <div className="text-dark p-2 text-center alert alert-primary" role="alert" style={{fontSize:'20px'}}>{messageNotification}</div>
        } */}
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;

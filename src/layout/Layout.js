import React from "react";
import Header from "./Header"
import SideBar from "./SideBar"
import './Layout.css';

function Layout({ children }) {
    return (
        <>
            <div className="layout__base">
                <Header />
                <div className="layout__body">
                    <div className="layout__sidebar">
                        <SideBar />
                    </div>
                    <main className="layout__main">{children}</main>
                </div>
            </div>
        </>
    )
}
export default Layout;
import React from "react";
import { SidebarData } from "../data/sidebarData";
import { Button } from "react-bootstrap";

const Sidebar = () => {
  return (
    <>
      {SidebarData?.map((item, index) => {
        return (
          <>
            <div className="d-flex align-items-center fs-3 gap-3">
              {item?.icon}
              {item.title}
            </div>
          </>
        );
      })}
      <Button
        style={{ backgroundColor: "1CA3F1" }}
        className="shadow w-full border
         rounded-pill p-1 fs-2"
      >
        Tweet
      </Button>
    </>
  );
};

export default Sidebar;

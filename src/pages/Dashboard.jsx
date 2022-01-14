import Sidebar from "../components/Sidebar";
import LeftBar from "../components/LeftBar";
import Dashhead from "../components/Dashhead";
import Dashbody from "../components/Dashbody";
import { useState } from "react";

function Dashboard() {
  const [home, setHome] = useState(true);
  const [server, setServer] = useState(false);
  return (
    <>
      <div className="h-screen w-full flex flex bg-black4">
        <Sidebar
          setHome={setHome}
          setServer={setServer}
          home={home}
          server={server}
        />
        <LeftBar home={home} server={server} />
        <div className="flex flex-col w-full bg-black2">
          <Dashhead home={home} server={server} />
          <div className="flex w-full h-full border-t-2 border-black4">
            <Dashbody home={home} server={server} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

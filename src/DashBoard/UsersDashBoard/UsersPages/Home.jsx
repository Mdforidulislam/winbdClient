import Tabs from "../../../Components/Shared/Table/GlobalTabs";
import Nav from "./Navbar/Nav";

const UserHome = () => {
  return (
    <div className="w-full h-full">
      <div className=" bg-[#0C745C]">
        <Nav />
      </div>{" "}
      {/* import nave item here */}
      <Tabs /> {/* import table list here   */}
    </div>
  );
};

export default UserHome;

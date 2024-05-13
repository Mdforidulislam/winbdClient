import { Outlet } from "react-router-dom";

const UsersLayout = () => {
    return (
        <>
            {/* define  the users Layout here  */}
            <div className="bg-[#111014] w-full min-h-screen ">
               <Outlet/>
            </div>
        </>)

}

export default UsersLayout;



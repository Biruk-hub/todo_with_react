import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import CustomButton from "../custom_button";
import Heading from "../heading";
import { UserContext } from "../../provider/User";
import { TaskContext } from "../../provider/Task";

const PageHeader = () => {
  const { setTaskData } = useContext(TaskContext);
  const { user, setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const handleButtonLogin = () => {
    navigate("/login");
  };
  const handleButtonLogout = () => {
    setUserData(null);
    setTaskData([]);
    navigate("/");
  };
  return (
    <nav className="h-16 flex items-center justify-between px-6">
      {/* left */}
      <Link to="/">
        <div className="font-light text-2xl flex justify-center items-center">
          <img
            src={logo}
            alt="logo"
            className="h-14 w-14 p-2 object-cover rounded-xl"
          />
          <h1 className="font-semibold font-sans">Daily Task</h1>
          {user && (
            <div>
              <Heading secondary={true} size="sm">
                <span className="bg-green-500 text-white mx-2 px-2 py-1 rounded">
                  Connected
                </span>
              </Heading>
            </div>
          )}
        </div>
      </Link>
      {/* right  */}
      <div className="flex justify-center items-center space-x-3 mr-3">
        {user ? (
          <CustomButton text="logout" onClick={handleButtonLogout} />
        ) : (
          <CustomButton text="login" onClick={handleButtonLogin} />
        )}
      </div>
    </nav>
  );
};

export default PageHeader;


import ProgressBar from "./ProgressBar";

import { useLocation } from "react-router-dom";
// import { useOutletContext } from "react-router-dom";


const Header = () => {
  //@ts-ignore
  //  const  {progressData} = useOutletContext()
  const { pathname } = useLocation();
  // const v = useOutletContext();
  return (
    <div className="flex items-center justify-between">
      
      {!pathname.includes("welcome") && <ProgressBar />}
    </div>
  );
};

export default Header;

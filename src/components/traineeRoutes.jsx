
import VideoPage from "./trainees/pages/Video";
import Welcome from "./trainees/pages/Welcome";

import { Navigate, useParams } from "react-router-dom";

const RedirectToWelcome = () => {
  const { id } = useParams(); // Get the dynamic id from the URL
  return <Navigate to={`/safety-training/trainee/training/welcome`} />;
};

const traineeRoutes = [
  {
    key: "/",
    path: "/safety-training/trainee/training/success",
    element: <RedirectToWelcome />,
    title: "Home",
  },
  {
    path: "/safety-training/trainee/training/video",
    element: <RedirectToWelcome />,
  },
  {
    path: "/safety-training/trainee/training/welcome",
    element: <Welcome />,
  },
  {
    path: "/safety-training/trainee/training/video/:videoId",
    element: <VideoPage />,
  },

];
export default traineeRoutes;

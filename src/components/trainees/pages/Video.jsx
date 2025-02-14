// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { useParams } from "react-router-dom";
import {useState, useCallback, useEffect} from "react"
import ReactPlayer from 'react-player/lazy'
import Player from "../../player/Player"
import { videoData } from "../../../constant"

const VideoPage = () => {
    const { videoId } = useParams();

  return (
    <div className="h-full p-3 px-10 font-poppins">
      {
        <>
          <Player
            videoTitle={videoData.find((video) => video._id == videoId).title}
            url={videoData.find((video) => video._id == videoId).url}
            light={true}
            ended={() => {
              console.log("Video Ended");
            }}
          />
          {/* {
            <ReactPlayer
              controls
              url={videoData.find((video) => video._id == videoId).url}
              onStart={() => console.log("Video Playing")}
             
            />
          } */}

          <section className="mt-10 space-y-5">
            <p className="font-light text-3xl leading-[45px]">
              {videoData.find((video) => video._id == videoId).title}
            </p>
            <p className="">
              {videoData.find((video) => video._id == videoId).description}
            </p>
          </section>

          <div className="flex items-center justify-between p-4">
            {/* Left side buttons */}

            {/* Right side button */}
          </div>
        </>
      }
    </div>
  );
}

export default VideoPage
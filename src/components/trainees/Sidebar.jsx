// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import SidebarCard, { ECardType } from "./SidebarCard";
import SidebarGroup from "./SidebarGroup";


import { useParams } from "react-router-dom";

import { useState } from "react";


const Sidebar = (
 data,
  isLoading,
  isSuccess,
  handleRefresh,
) => {
  const [open, setOpen] = useState(false);

  const { id } = useParams();
  // const {
  //   data: data1,
  //   isLoading: isLoading1,
  //   isSuccess: isSuccess1,
  // } = useGetVideosRated(id);
  // console.log(data1)
console.log(data.data)
  return (
    <div className="flex flex-col items-center font-poppins h-screen overflow-y-scroll sticky top-10">
    
      { (
        <>
          <SidebarGroup title={"Training Overview"}>
            <SidebarCard
              type={ECardType.ReadingCard}
              isCompleted={true}
              properties={{
                title: "Welcome",
                duration: "4 mins",
              }}
         
              url={`/safety-training/trainee/training/welcome`}
            />
          </SidebarGroup>
          {
            <>
              {data && (
                <>
                  {Object.entries(data.data).map((obj) => (
                    <SidebarGroup title={obj[0]}>
                      {obj[1].map((video, index) => (
                        <SidebarCard
                          key={index}
                          type={ECardType.VideoCard}
                          isCompleted={false}
                          properties={{
                            title: video.title,
                            duration: "4 mins",
                          }}
                        
                          url={`/safety-training/trainee/training/video/${video._id}`}
                          state={{
                            video_id: video._id,
                            training_id: data._id,
                          }}
                        />
                      ))}
                    </SidebarGroup>
                  ))}
                </>
              )}
            </>
          }

          
        </>
      )}

  
    </div>
  );
};

export default Sidebar;

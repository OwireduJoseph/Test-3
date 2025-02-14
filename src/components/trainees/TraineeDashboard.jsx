import Sidebar from "./Sidebar"
import Header from "./Header"
import {Outlet, useParams} from "react-router-dom"

// import useGetUserTrainings from "../../hooks/useGetUserTrainings.ts";
// import {Root} from "../utils/types.ts";
import {useEffect, useState} from "react";



const TraineeDashboard = () => {

    // useIsloggedIn({ return_url: "/safety-training/individual/¤" });

    const  params =  useParams()
    // const [key, setKey] = useState(0);
    // const {data, isLoading, isSuccess} = useGetTraining({training_id:params.id!})
  //  const {data:progressData , isLoading:progressisLoading , isSuccess:progressisSuccess} = useGetUserProgress(params.id!)
    // const {
    //   data: data1,
    //   // isLoading: isLoading1,
    //   // isSuccess: isSuccess1,
    // } = useGetVideosRated(params.id! ,'');
    // const [flattened, setFlattened] = useState<{ video_id: number; training_id: number }[]>([])

 
  // console.log(data, isLoading, isSuccess, progressData)
  //   const progress = (progressData as unknown as ProgressData)?.progress ?? 0;

    //     const handleRefresh = () => {
    //       setKey((prev) => prev + 1);
    //     };

    // useEffect(() => {
    //     if (isSuccess) {
    //         const flat= []
    //        for (let a of Object.values(data?.videos!)){
              
    //         for (let b of a){
    //             flat.push( {
    //                 video_id : b._id , 
    //                 training_id: data?._id
    //             })
    //         }

    //        }
    //        console.log(flat)
    //          setFlattened(JSON.parse(JSON.stringify(flat)));
    //     }
    // }, [data, isSuccess]);
 const data = {
   "Medical Emergency": [
     {
       _id: 1,
       title: "title 1",
       url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
       description:
         "A popular open-source animated short film, available in multiple resolutions and bitrates.",
     },
     {
       title: "Tears of Steel",
       _id: "2",
       url: "https://test-streams.mux.dev/tos_ismc/main.m3u8",
       description:
         "An open-source science fiction short film, used to test various streaming scenarios.",
     },
     {
       title: "fMP4 HLS Stream",
       _id: "3",
       url: "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",
       description:
         "An example of an HLS stream using fragmented MP4 segments, provided by Apple.",
     },
    
   ],
 };
    return (
  

        <div className="bg-[#f5f7f9] p-5">
          <div className="container flex min-h-screen mx-auto">
            <div className="w-1/4 border-r-[1px]">
              <Sidebar
                
                data={data}
           
              
              />
            </div>

            <div className="w-3/4">
              
              
                                        
              <Header />
              <Outlet
                context={{
                  data
               
                }}
              />
            </div>
          </div>
        </div>
     
    );
}

export default TraineeDashboard
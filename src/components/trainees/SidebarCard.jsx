import check_filled from '../../assets/check-filled.png';
import check_unfilled from '../../assets/check-unfilled.png';
import cardtypereading from '../../assets/card-type-reading.svg';
import cardtypevideo from '../../assets/card-type-video.svg'
import dot from '../../assets/dot.svg'
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components

export  const ECardType ={
    VideoCard : "video-card",
    ReadingCard : 'reading-card'
}

const SidebarCard = ({ type, isCompleted, properties, url , state , handleRefresh}) => {
    const navigate = useNavigate()
    return (
        <button onClick={() => {
            navigate(url , { state: state });
          if(handleRefresh){
             handleRefresh()
          }
        }} className={`flex w-44 gap-x-3 cursor-pointer font-poppins`}>
            <img src={isCompleted ? check_filled : check_unfilled} alt="" className='size-6' />
            <div className='flex flex-col gap-y-1'>
                <div className={` ${isCompleted && 'text-[#007AFF]'} flex gap-x-2`}>
                    <img src={type == ECardType.VideoCard ? cardtypevideo : cardtypereading} alt="" className='size-6' />
                    <p className='font-normal leading-6'>{properties?.title?.substring(0, 8)}...</p>
                </div>
                <div className='flex pl-1 text-sm font-normal gap-x-2 text-primary-gray'>
                    <p>{type == ECardType.VideoCard ? "Video" : "Reading"}</p>
                    <img src={dot} alt="" />
                    {/*Duration of a video*/}
                    <p className={`invisible`}>{properties.duration}</p>
                </div>
            </div>
        </button>
    )
}

export default SidebarCard
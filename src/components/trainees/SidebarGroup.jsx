import { ReactNode, useState } from "react"
import arrowup from '../../assets/arrow-up.png'
import arrowdown from '../../assets/arrow-down.png'



const SidebarGroup = ({ title, children }) => {

    const [toggle, settoggle] = useState(false)

    return (
        <div className="w-[232px]">

            <div onClick={() => settoggle(!toggle)} className="flex items-center justify-between cursor-pointer">
                <h3 className="my-5 text-lg font-semibold leading-7 font-poppins">{title}</h3>
                <img src={toggle ? arrowup : arrowdown} alt="" />
            </div>

            {
                toggle && (
                    <div className="space-y-5">
                        {children}
                    </div>
                )
            }

        </div>
    )
}

export default SidebarGroup
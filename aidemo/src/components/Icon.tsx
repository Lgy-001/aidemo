import classNames from "classnames"
import type { IconType } from "../types"
import { useState } from "react"

const Icon=(props:IconType)=>{
    const [isMove,setIsMove]=useState(false)
    return(
        <div className={classNames(['w-[160px] h-[148px] flex flex-col justify-center items-center  rounded-[15px]'],{
            'bg-[#F2F3F8]':isMove ,
        })}
        onMouseMove={()=>{
            setIsMove(true)
        }}
        onMouseOut={()=>{
            setIsMove(false)
        }}
        >
            <svg 
            className={classNames(['w-[1em] h-[1em] fill-current text-blue-500'],{
            })}
            style={{fontSize:"48px"}}
            >
                <use xlinkHref={`#icon-${props.type}`}></use>
            </svg>
            <p className="text-[32px] scale-50 whitespace-normal">{props.type}</p>
        </div>
    )

}
export default Icon
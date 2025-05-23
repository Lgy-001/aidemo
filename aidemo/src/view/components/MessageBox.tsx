import classNames from "classnames"
import { memo } from "react"


interface IMessageBoxProps {
    message: string
    role: "user" | "ai"
}
const MessageBox = memo(({message,role}: IMessageBoxProps) => {
    return(
        <div className={classNames(["flex flex-col "],{
            "items-end":role==="user",
            "items-start":role==="ai"
        })}>
            <div className={classNames([" break-words whitespace-normal max-w-[839px] h-auto bg-[#F9F9F9] rounded-3xl px-[80px] py-[16px] border-[#EAEAEA] border"],{
                // "right-16":true,
            })}>{message}</div>
        </div>
    )
})

export default MessageBox

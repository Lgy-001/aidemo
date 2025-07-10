import classNames from "classnames";
import { memo } from "react";
import { useMessageStore } from "../../store";

import "../../style/animation/index.less";
interface IMessageBoxProps {
  message: string;
  role: "user" | "ai";
  isLoading: boolean;

}
const MessageBox = memo(({ message, role,isLoading}: IMessageBoxProps) => {
  const loading  = useMessageStore((state)=>state.loading);
    
  return (
    <div
      className={classNames(["flex flex-col "], {
        "items-end": role === "user",
        "items-start": role === "ai",
      })}
    >
      <div
        className={classNames(
          [
            " break-words whitespace-normal max-w-[839px] h-auto bg-[#F9F9F9] rounded-3xl px-[80px] py-[16px] border-[#EAEAEA] border",
          ],
          {
            // "right-16":true,
          }
        )}
      >
        {message}
        {isLoading &&loading && (
          <div className="ai-thinking">
            <span className="wave wave-1" />
            <span className="wave wave-2" />
            <span className="wave wave-3" />
          </div>
        )}
      </div>
    </div>
  );
});

export default MessageBox;

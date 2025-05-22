import Icon from "../../components/Icon"
const LeftSider=()=>{
  return(
    <div className="w-[200px] h-full  px-[10px] py-[12px] rounded shadow-xl border-[#E9EBF2] border-[2px]">
      <div className="flex flex-col justify-center items-center ">
        <img 
        className="w-[100px] h-[100px] rounded-[15px]  "
        src="./images/ai2.png" alt="" />
        <span className="text-[#1296DB]">AI</span>
      </div>
      <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center">
        <Icon type="home"></Icon>
      </div>

    </div>  
  )

}
export default LeftSider
import Bottom from "./layout/Bottom"
import Content from "./layout/Content"
import Left from "./layout/Left"
const App=()=>{
  return(
    <div className="flex h-screen relative">
      <Left></Left>
   <div className="flex flex-col w-full h-full">
   <Content></Content>
   <Bottom></Bottom>
   </div>
    </div>
  )
}
export default App
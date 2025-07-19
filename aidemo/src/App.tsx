import Bottom from "./layout/Bottom"
import Content from "./layout/Content"
import Left from "./layout/Left"
const App = () => {
  return (
    <div className="flex h-screen w-full px-[20px] py-[30px]">
      <Left></Left>
      <div className="flex-1 flex flex-col">
        <Content />
        <Bottom></Bottom>
      </div>
    </div>
  )
}
export default App
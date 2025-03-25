import "./App.css";
import { Button } from "./components/ui/Buttons";
import { PlusIcon } from "./icons/plusIcon";
import { ShareIcon } from "./icons/shareIcon";

function App() {
  return (
    <>
      <Button
      variant={"primary"}
        startIcon={<PlusIcon size={"lg"} />}
        size={"lg"}
        text={"Add Content"}
      />
      <Button
      variant={"secondary"}
        startIcon={<ShareIcon size={"lg"} />}
        size={"lg"}
        text={"Share"}
      />
    </>
  );
}

export default App;

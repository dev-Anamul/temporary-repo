import { useHover } from "react-use";
import PostList from "./components/PostList";

function App() {
  const element = (hovered) => <div>Hover Me {hovered && "Thanks!"}</div>;

  const [hoverable, hovered] = useHover(element);

  return (
    <div>
      {hoverable}
      <div>{hovered ? "HOVERED" : "NOT HOVERED"}</div>

      <PostList userId={1} />
    </div>
  );
}

export default App;

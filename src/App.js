import "./App.css";
import HeaderComponant from "./HeaderComponant";
import PostComponant from "./PostComponant";
import CollectionTagButtonsComponant from "./CollectionTagButtonsComponant";

function App() {
  return (
    <div className="App">
      <div>
        <HeaderComponant />
      </div>
      <div style={eleStyle}>
        <div>
          <PostComponant />
          <PostComponant />
          <PostComponant />
          <PostComponant />
          <PostComponant />
        </div>
        <div>
          <CollectionTagButtonsComponant />
        </div>
      </div>

      <header className="App-header"></header>
    </div>
  );
}

const eleStyle = {
  display: "flex",
  width: "100vw",
};

export default App;

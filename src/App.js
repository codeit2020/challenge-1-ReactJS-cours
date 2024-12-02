import "./App.css";
import HeaderComponant from "./HeaderComponant";
import PostComponant from "./PostComponant";
import CollectionTagButtonsComponant from "./CollectionTagButtonsComponant";

function App() {
  return (
    <div className="App">
      <HeaderComponant />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", width: "60%" }}>
          <div style={{ width: "70%" }}>
            <PostComponant
              title="أكاديمية ترميز 20 "
              body="أكاديميةمخصصة لتعليم البرمجة"
            />
            <PostComponant
              title="Hello world"
              body="this is the hello world article"
            />
            <PostComponant title="Post 3" body="this is the body of post 3" />
          </div>
          <div style={{ width: "30%" }}>
            <CollectionTagButtonsComponant />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

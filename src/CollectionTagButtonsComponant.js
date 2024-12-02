import "./CollectionTagButtonsComponantStyle.css";
import TagButtonComponant from "./TagButtonComponant.js";

export default function CollectionTagButtonsComponant() {
  return (
    <div className={"CollectionTag"}>
      <TagButtonComponant buttonTitle="الأكثر قراءة">
        <img src="./car.jpg" alt="car" width="100" height="100" />
      </TagButtonComponant>

      <TagButtonComponant buttonTitle="جديدة">
        <p>🍉🍉🍉</p>
      </TagButtonComponant>

      <TagButtonComponant buttonTitle="مقالات مميزة">
        <p>🌟🌟🌟</p>
        <img src="./snow.jpg" alt="snow" width="100" height="60" />
      </TagButtonComponant>
    </div>
  );
}

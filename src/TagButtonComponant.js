import "./TagButtonComponantStyle.css";

export default function TagButtonsComponant(props) {
  return (
    <div>
      <button className={"Button"}>
        {props.buttonTitle} {props.children}
      </button>
    </div>
  );
}

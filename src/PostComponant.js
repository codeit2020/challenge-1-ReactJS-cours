import "./PostComponantStyle.css";

export default function PostComponant(props) {
  return (
    <div className={"Post"}>
      <h2>{props.title || "no title"}</h2>
      <hr />
      <p className={"h3"}>{props.body || "no body"}</p>
    </div>
  );
}

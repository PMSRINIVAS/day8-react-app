import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <SocialPost />
      <SocialPost />
      <SocialPost />
    </div>
  );
}

function SocialPost() {
  const [commentList, setCommentList] = useState(["comment 1", "comment 2"]);

  const addNewComment = () => {
    const newCommentList = ["This is a new Comment", ...commentList];
    setCommentList(newCommentList);
  };

  return (
    <div>
      <h1 className="bg-dark text-light p-5 text-center mb-2">
        SOCIAL MEDIA POST
      </h1>

      {commentList.map((item, index) => (
        <div key={index} className="alert-secondary p-1 mb-1">
          {item}
        </div>
      ))}

      <input
        type="text"
        className="form-control-sm form-control mb-1"
        placeholder="Add your comment.."
      />
      <input
        type="button"
        className="btn btn-sm alert-secondary w-100 mb-3"
        value="Submit"
        onClick={addNewComment}
      />
    </div>
  );
}

export default App;

import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleLoClick = () => {
    // console.log("clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleClearText = () => {
    // console.log("clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text!", "success");
  };
  const handleCopy = () => {
    console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy Text to clipboard!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra spaces!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // setText=("new text");
  // Count words properly
  const countWords = (text) => {
    return text.split(/\s+/).filter((element) => {
      return element.length !== 0;
    }).length;
  };

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
            id="myBox"
            rows="15"></textarea>
        </div>
        <button className="btn btn-secondary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>Your Text Summery</h1>
        <p>
          {" "}
          <b>
            {text.split(" ").length} Words & {text.length} Character
          </b>
        </p>
        <p>
          {0.008 * countWords(text)} <b>Minutes Read</b>
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter Something in the text box above"}
        </p>
      </div>
    </>
  );
}

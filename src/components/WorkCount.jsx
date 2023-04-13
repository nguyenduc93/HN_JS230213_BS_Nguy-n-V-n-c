import React, { useState } from "react";

function WordCount(props) {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [parapCount, setParapCount] = useState(0);

  const handleText = (e) => {
      const valueText = e.target.value.trim();
      const wordArr = valueText.split(/\s+/);
      const wordArray = wordArr.filter((word) => word !== "");
      setWordCount(wordArray.length);
      
      setLetterCount(valueText.length);
      setText(e.target.value)

      const parap = valueText.split("\n");
      const paragraphsCount = parap.filter((para) => para.trim() !== "");
      setParapCount(paragraphsCount.length);
  };

    const handleUppercase = () => {
        const uppercaseText = text.toUpperCase();
        setText(uppercaseText);
  };

    const handleLowercase = () => {
        const lowercaseText = text.toLowerCase();
        setText(lowercaseText);
  };

  return (
    <div>
        <h1> <i class="fa-solid fa-list icon"></i> Word Counter</h1>
        <div className="wordCount">
      <div className="word"><h3><i class="fa-regular fa-newspaper icon1" ></i> Word <br></br> {wordCount}</h3> </div>
      <div className="word"><h3><i class="fa-regular fa-pen-to-square icon1"></i> Letter <br></br> {letterCount}</h3> </div>
      <div className="word"><h3><i class="fa-solid fa-book icon1" ></i> Pragraph <br></br> {parapCount} </h3> </div>
      </div>
      <textarea
        name=""
        className="textarea"
        cols="140"
        rows="16"
        onChange={handleText}
        value={text}
        placeholder="Enter/Past Your Text Here"
        required
      ></textarea>
      <div>
      <button onClick={handleUppercase} className="click">Click to Uppercase</button>
      <button onClick={handleLowercase} className="click">Click to Lowercase</button>
      </div>
    </div>
  );
}

export default WordCount;
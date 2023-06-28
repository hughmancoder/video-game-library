import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [fullText, setFullText] = useState(false);
  if (children.length < maxChars) {
    return <p>{children}</p>;
  }
  const text = fullText ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}
      <button onClick={() => setFullText(!fullText)}>
        {" "}
        {fullText ? "expand text" : "hide text"}
      </button>
    </p>
  );
};

export default ExpandableText;

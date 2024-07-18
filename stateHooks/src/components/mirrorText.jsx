import { useState } from "react";

function MirrorText() {
  const [text, setText] = useState("");

  return (
    <div id="div-mirror">
      <h1>Mirror Text</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Você digitou: {text}</p>
    </div>
  );
}

export default MirrorText;

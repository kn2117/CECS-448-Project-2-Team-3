import React, { useState } from "react";

export default function MainDocWindow() {
  const [mode, setMode] = useState("editing"); // can be 'editing', 'suggesting', or 'viewing'

  return (
    <div style={{ padding: "20px" }}>
      <header style={{ marginBottom: "16px" }}>
        <h2>Main Doc Window</h2>
        <div>
          <button onClick={() => setMode("editing")}>Editing</button>
          <button onClick={() => setMode("suggesting")}>Suggesting</button>
          <button onClick={() => setMode("viewing")}>Viewing</button>
        </div>
      </header>

      <section style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
        {mode === "editing" && (
          <p>
            ✏️ <b>Editing Mode:</b> You can directly modify the document content here.
          </p>
        )}
        {mode === "suggesting" && (
          <p>
            💡 <b>Suggesting Mode:</b> Your changes will appear as tracked suggestions.
          </p>
        )}
        {mode === "viewing" && (
          <p>
            👀 <b>Viewing Mode:</b> You can read the document but can’t make changes.
          </p>
        )}
      </section>
    </div>
  );
}


import React from "react";

function ModificationFooter({ msg }) {
  return (
    <div>
      {msg !== undefined && (
        <div className="footer-content">
          <span>Message : *{msg?.content}</span>
        </div>
      )}
    </div>
  );
}

export default ModificationFooter;

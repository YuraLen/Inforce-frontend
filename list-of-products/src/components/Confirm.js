import React from "react";

export const Confirm = ({
  title, isOpen, onCancel, onSubmit, children
}) => {
  return (
    <>
      {isOpen &&
        <div className="modalOverlay">
          <div className="modalWindow">
            <div className="modalHeader">
              <div className="modalTitle">{title}</div>
              <div onClick={onCancel}>cancel</div>
            </div>
            <div className="modalBody">
              {children}
            </div>
            <div className="modalFooter">
              <button onClick={onCancel}>Cancel</button>
              <button onClick={onSubmit}>Submit</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}
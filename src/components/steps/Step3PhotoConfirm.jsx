// src/components/steps/Step3PhotoConfirm.jsx
import React from "react";

const Step3PhotoConfirm = ({ photoURL, onNext, onBack }) => {
  return (
    <div className="page-wrapper">
      <div className="form-container">
        <h2 className="form-heading">写真の確認</h2>

        {photoURL ? (
          <div className="form-preview">
            <img
              src={photoURL}
              alt="アップロード済み写真"
              className="form-preview-image"
            />
          </div>
        ) : (
          <p style={{ textAlign: "center", color: "#ccc" }}>
            写真がアップロードされていません。
          </p>
        )}

        <div className="form-nav">
          <button onClick={onBack} className="form-button back">
            撮り直す
          </button>
          <button onClick={onNext} className="form-button next">
            次へ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3PhotoConfirm;

import React from "react";

const Step8Submit = () => {
  return (
    <div className="page-wrapper">
      <div className="form-container">
        <h2 className="form-heading">応募完了</h2>

        <div className="form-section">
          <p>ご応募ありがとうございました。</p>
          <p>内容は正常に送信されました。</p>
          <p>担当者より追ってご連絡いたします。</p>
          <p>この画面を閉じて終了してください。</p>
        </div>

        <div className="form-nav">
          <button
            className="form-button next"
            onClick={() => alert("この画面を閉じてください")}
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step8Submit;

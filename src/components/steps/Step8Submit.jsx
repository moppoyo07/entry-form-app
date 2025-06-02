import React from "react";
import { useNavigate } from "react-router-dom";

const Step8Submit = ({ onBack }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    alert("この画面を閉じて終了してください。");
    // 必要であればここに `window.close()` やホーム画面遷移も追加可能
  };

  return (
    <div className="page-wrapper">
      <div className="form-container">
        <h2 className="form-heading">送信完了</h2>

        <div className="form-section">
          <p>ご入力ありがとうございました。</p>
          <p>内容は正常に送信されました。</p>
          <p>担当者より追ってご連絡いたします。</p>
          <p>この画面を閉じて終了してください。</p>
        </div>

        <div className="form-nav">
          <button className="form-button back" onClick={onBack}>
            戻る
          </button>
          <button className="form-button next" onClick={handleClose}>
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step8Submit;

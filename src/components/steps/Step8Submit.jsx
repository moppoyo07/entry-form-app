import { useNavigate } from "react-router-dom";

const Step8Submit = ({ formData, onBack }) => {
  const navigate = useNavigate();

  return (
    <div className="form-container">
      <h2 className="form-heading">送信完了</h2>

      <div className="form-section">
        <p>ご入力ありがとうございました。</p>
        <p>内容は正常に送信されました。</p>
        <p>担当者より追ってご連絡いたします。</p>
      </div>

      <div className="form-nav">
        <button className="form-button back" onClick={onBack}>
          戻る
        </button>
        <button className="form-button next" onClick={() => navigate("/")}>
          メインに戻る
        </button>
      </div>
    </div>
  );
};

export default Step8Submit;
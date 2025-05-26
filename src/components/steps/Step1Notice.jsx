// src/components/steps/Step1Notice.jsx
import React, { useState, useContext } from "react";
import { FormContext } from "../../context/FormContext";

const Step1Notice = ({ onNext }) => {
  const { formData, setFormData } = useContext(FormContext);
  const [agreed, setAgreed] = useState(false);

  const handleNext = () => {
    if (agreed) {
      setFormData({ ...formData, agreed: true });
      onNext();
    }
  };

  return (
    <div className="page-wrapper">
      <div className="form-container">
        <h2 className="form-heading">利用規約・プライバシーポリシーの確認</h2>

        <div className="policy-box">
          <p>
            このフォームに入力するにあたり、利用規約およびプライバシーポリシーをご確認のうえ、同意してください。
          </p>
          <ul>
            <li>入力内容は社内管理目的でのみ使用します</li>
            <li>第三者に提供することはありません</li>
            <li>写真や連絡先などの個人情報も対象となります</li>
          </ul>
        </div>

        <div className="form-checkbox">
          <label>
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            利用規約とプライバシーポリシーに同意します
          </label>
        </div>

        <div className="form-nav">
          <button
            onClick={handleNext}
            disabled={!agreed}
            className="form-button next"
          >
            次へ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1Notice;

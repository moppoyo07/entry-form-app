// src/components/steps/Step7Confirm.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";
import { app } from "../../firebase";

const Step7Confirm = ({ formData, onBack, onNext }) => {
  const {
    photoURL,
    basicInfo = {},
    workCondition = {},
    history = [],
    selfPR = ""
  } = formData;

  const emergency = basicInfo.emergency || {};
  const navigate = useNavigate();

  // 生年月日から年齢計算
  const calculateAge = (birthDate) => {
    if (!birthDate) return "";
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return `${age}歳`;
  };

  const handlePreview = () => {
    navigate("/preview");
  };

  // ✅ Firestore送信処理（完了後に Step8 へ）
  const handleSubmit = async () => {
  try {
    const db = getFirestore(app);

    // File オブジェクトを含まない送信用データを作る
    const { imageFile, ...safeData } = formData;

    await addDoc(collection(db, "entryForms"), {
      ...safeData,
      submittedAt: Timestamp.now(),
    });

    onNext(); // Step8Submitへ進む
  } catch (error) {
    console.error("❌ Firestore送信エラー:", error.message, error);
    alert("Firestoreへの送信に失敗しました：" + error.message);
  }
};



  return (
    <div className="form-container">
      <h2 className="form-heading">入力内容の確認</h2>

      {/* 写真 */}
      {photoURL && (
        <div className="form-preview">
          <img src={photoURL} alt="アップロード画像" className="form-preview-image" />
        </div>
      )}

      {/* 基本情報 */}
      <div className="form-section">
        <h3 className="form-label">基本情報</h3>
        <p>氏名：{basicInfo.lastName} {basicInfo.firstName}</p>
        <p>フリガナ：{basicInfo.furigana}</p>
        <p>生年月日：{basicInfo.birthDate}（{calculateAge(basicInfo.birthDate)}）</p>
        <p>性別：{basicInfo.gender}</p>
        <p>郵便番号：{basicInfo.zip}</p>
        <p>住所：{basicInfo.address}</p>
        <p>電話番号：{basicInfo.phone1}-{basicInfo.phone2}-{basicInfo.phone3}</p>
        <p>メールアドレス：{basicInfo.email}</p>
        <p>自家用車：{basicInfo.hasCar === "yes" ? `あり（${basicInfo.carType}）` : "なし"}</p>
        <p>最寄り駅：{basicInfo.station}</p>
        <p>通勤手段：{basicInfo.commute}（{basicInfo.commuteTime}分）</p>
      </div>

      {/* 学歴 */}
      <div className="form-section">
        <h3 className="form-label">最終学歴</h3>
        <p>卒業年月：{workCondition.graduation}</p>
        <p>学校名：{workCondition.school}</p>
      </div>

      {/* 勤務条件 */}
      <div className="form-section">
        <h3 className="form-label">勤務条件</h3>
        <p>勤務開始日：{workCondition.startDate}</p>
        <p>勤務期間：{workCondition.duration}</p>
        <p>勤務可能曜日：{(workCondition.availableDays || []).join("・")}</p>
      </div>

      {/* スキル・資格 */}
      <div className="form-section">
        <h3 className="form-label">スキル・資格</h3>
        <p>スキル：{workCondition.skills}</p>
        <p>免許・資格等：{workCondition.licenses}</p>
      </div>

      {/* 職務経歴 */}
      <div className="form-section">
        <h3 className="form-label">職務経歴</h3>
        {history.map((item, idx) => (
          <div key={idx} style={{ marginBottom: "1rem" }}>
            <p><strong>職務経歴 {idx + 1}</strong></p>
            <p>在籍期間：{item.from}〜{item.to}</p>
            <p>会社名：{item.company}</p>
            <p>職種：{item.jobTitle}</p>
            <p>業務内容：{item.duties}</p>
          </div>
        ))}
      </div>

      {/* 自己PR */}
      <div className="form-section">
        <h3 className="form-label">自己PR</h3>
        <p>{selfPR}</p>
      </div>

      {/* 緊急連絡先 */}
      <div className="form-section">
        <h3 className="form-label">緊急連絡先</h3>
        <p>氏名：{emergency.name}</p>
        <p>フリガナ：{emergency.furigana}</p>
        <p>続柄：{emergency.relation}</p>
        <p>電話番号：{emergency.phone}</p>
      </div>

      {/* ボタン */}
      <div className="form-nav">
        <button className="form-button back" onClick={onBack}>戻る</button>
        <button className="form-button next" onClick={handleSubmit}>送信へ</button>
        <button className="form-button next" onClick={handlePreview}>PDFプレビュー</button>
      </div>
    </div>
  );
};

export default Step7Confirm;

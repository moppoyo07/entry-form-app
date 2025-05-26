// src/components/steps/Step4BasicInfo.jsx

import React, { useState, useEffect } from "react";

const Step4BasicInfo = ({ data = {}, onChange, onNext, onBack }) => {
  const [form, setForm] = useState({
    lastName: "",
    firstName: "",
    furigana: "",
    birthDate: "",
    gender: "",
    zip: "",
    address: "",
    phone1: "",
    phone2: "",
    phone3: "",
    email: "",
    hasCar: "",
    carType: "",
    station: "",
    commute: "",
    commuteTime: "",
    emergency: {
      name: "",
      furigana: "",
      relation: "",
      phone: ""
    },
    ...data,
  });

  useEffect(() => {
    if (data.emergency) {
      setForm((prev) => ({ ...prev, emergency: { ...prev.emergency, ...data.emergency } }));
    }
  }, [data.emergency]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmergencyChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      emergency: { ...prev.emergency, [name]: value }
    }));
  };

  const handleNext = () => {
    const mergedPhone = `${form.phone1}-${form.phone2}-${form.phone3}`;
    onChange({ ...form, phone: mergedPhone });
    onNext();
  };

  return (
    <div className="page-wrapper">
      <div className="form-container">
        <h2 className="form-heading">基本情報の入力</h2>

        {/* 氏名 */}
        <label className="form-label">氏（苗字）</label>
        <input className="form-input" name="lastName" value={form.lastName} onChange={handleChange} />
        <label className="form-label">名（名前）</label>
        <input className="form-input" name="firstName" value={form.firstName} onChange={handleChange} />

        {/* フリガナ */}
        <label className="form-label">フリガナ</label>
        <input className="form-input" name="furigana" value={form.furigana} onChange={handleChange} />

        {/* 生年月日 */}
        <label className="form-label">生年月日</label>
        <input type="date" name="birthDate" value={form.birthDate} onChange={handleChange} className="form-input" />

        {/* 性別 */}
        <label className="form-label">性別</label>
        <select className="form-input" name="gender" value={form.gender} onChange={handleChange}>
          <option value="">選択してください</option>
          <option value="男性">男性</option>
          <option value="女性">女性</option>
          <option value="その他">その他</option>
        </select>

        {/* 郵便番号・住所 */}
        <label className="form-label">郵便番号（任意）</label>
        <input className="form-input" name="zip" value={form.zip} onChange={handleChange} />
        <label className="form-label">住所</label>
        <input className="form-input" name="address" value={form.address} onChange={handleChange} />

        {/* 電話番号 */}
        <label className="form-label">電話番号（3分割）</label>
        <div className="phone-group">
          <input type="tel" maxLength="3" name="phone1" value={form.phone1} onChange={handleChange} />
          <span className="phone-dash">―</span>
          <input type="tel" maxLength="4" name="phone2" value={form.phone2} onChange={handleChange} />
          <span className="phone-dash">―</span>
          <input type="tel" maxLength="4" name="phone3" value={form.phone3} onChange={handleChange} />
        </div>

        {/* メール */}
        <label className="form-label">メールアドレス</label>
        <input type="email" className="form-input" name="email" value={form.email} onChange={handleChange} />

        {/* 自家用車 */}
        <label className="form-label">自家用車の有無</label>
        <select className="form-input" name="hasCar" value={form.hasCar} onChange={handleChange}>
          <option value="">選択してください</option>
          <option value="yes">あり</option>
          <option value="no">なし</option>
        </select>

        {form.hasCar === "yes" && (
          <>
            <label className="form-label">車種名</label>
            <input className="form-input" name="carType" value={form.carType || ""} onChange={handleChange} />
          </>
        )}

        {/* 通勤情報 */}
        <label className="form-label">最寄り駅</label>
        <input className="form-input" name="station" value={form.station} onChange={handleChange} />
        <label className="form-label">駅までの移動手段</label>
        <select className="form-input" name="commute" value={form.commute} onChange={handleChange}>
          <option value="">選択してください</option>
          <option value="walk">徒歩</option>
          <option value="bicycle">自転車</option>
          <option value="bus">バス</option>
          <option value="car">車</option>
        </select>
        <label className="form-label">駅までの所要時間（分）</label>
        <input className="form-input" type="number" name="commuteTime" value={form.commuteTime} onChange={handleChange} />

        {/* 緊急連絡先 */}
        <h3 className="form-label" style={{ marginTop: "2rem" }}>緊急連絡先</h3>
        <label className="form-label">氏名</label>
        <input className="form-input" name="name" value={form.emergency.name} onChange={handleEmergencyChange} />
        <label className="form-label">フリガナ</label>
        <input className="form-input" name="furigana" value={form.emergency.furigana} onChange={handleEmergencyChange} />
        <label className="form-label">続柄</label>
        <input className="form-input" name="relation" value={form.emergency.relation} onChange={handleEmergencyChange} />
        <label className="form-label">電話番号</label>
        <input className="form-input" name="phone" value={form.emergency.phone} onChange={handleEmergencyChange} />

        {/* ナビゲーション */}
        <div className="form-nav">
          <button className="form-button back" onClick={onBack}>戻る</button>
          <button className="form-button next" onClick={handleNext}>次へ</button>
        </div>
      </div>
    </div>
  );
};

export default Step4BasicInfo;

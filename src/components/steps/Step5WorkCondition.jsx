import React from "react";

const Step5WorkCondition = ({ data, onChange, onNext, onBack }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const updatedDays = checked
      ? [...(data.availableDays || []), value]
      : (data.availableDays || []).filter((day) => day !== value);

    onChange({ ...data, availableDays: updatedDays });
  };

  const weekdayOptions = ["月", "火", "水", "木", "金", "土", "日"];

  return (
    <div className="page-wrapper">
      <div className="form-container">
        <h2 className="form-heading">勤務条件・学歴・資格等</h2>

        {/* 勤務開始日 */}
        <div className="form-input-area">
          <label className="form-label">勤務可能開始日</label>
          <input
            type="date"
            name="startDate"
            value={data.startDate || ""}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        {/* 勤務期間 */}
        <div className="form-input-area">
          <label className="form-label">勤務可能期間</label>
          <select
            name="duration"
            value={data.duration || ""}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">選択してください</option>
            <option value="1ヶ月">1ヶ月</option>
            <option value="3ヶ月">3ヶ月</option>
            <option value="6ヶ月">6ヶ月</option>
            <option value="1年">1年</option>
            <option value="長期">長期</option>
          </select>
        </div>

        {/* 勤務曜日 */}
        <div className="form-input-area">
          <label className="form-label">勤務可能曜日（複数選択可）</label>
          <div className="checkbox-grid">
            {weekdayOptions.map((day) => (
              <label key={day} className="day-checkbox">
                <input
                  type="checkbox"
                  value={day}
                  checked={(data.availableDays || []).includes(day)}
                  onChange={handleCheckboxChange}
                  style={{ marginRight: "0.5rem" }}
                />
                {day}
              </label>
            ))}
          </div>
        </div>

        {/* 学歴 */}
        <div className="form-input-area">
          <label className="form-label">卒業年月</label>
          <input
            type="month"
            name="graduation"
            value={data.graduation || ""}
            onChange={handleChange}
            className="form-input"
          />

          <label className="form-label">学校名</label>
          <input
            type="text"
            name="school"
            value={data.school || ""}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        {/* 資格 */}
        <div className="form-input-area">
          <label className="form-label">免許・資格等</label>
          <textarea
            name="licenses"
            value={data.licenses || ""}
            onChange={handleChange}
            rows={3}
            className="form-input"
          />
        </div>

        {/* スキル */}
        <div className="form-input-area">
          <label className="form-label">スキル</label>
          <textarea
            name="skills"
            value={data.skills || ""}
            onChange={handleChange}
            rows={2}
            className="form-input"
          />
        </div>

        {/* ボタン */}
        <div className="form-nav">
          <button className="form-button back" onClick={onBack}>戻る</button>
          <button className="form-button next" onClick={onNext}>次へ</button>
        </div>
      </div>
    </div>
  );
};

export default Step5WorkCondition;

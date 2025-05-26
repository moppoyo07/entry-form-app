import React from "react";

const Step6History = ({ data = {}, onChange, onBack, onNext }) => {
  const handleChange = (index, field, value) => {
    const updated = [...(data.history || [])];
    updated[index][field] = value;
    onChange({ ...data, history: updated });
  };

  const handlePRChange = (e) => {
    onChange({ ...data, selfPR: e.target.value });
  };

  return (
    <div className="page-wrapper">
      <div className="form-container">
        <h2 className="form-heading">職務経歴・自己PR</h2>

        {(data.history || []).map((item, index) => (
          <div key={index} className="form-section">
            <h3 className="form-label">職務経歴 {index + 1}</h3>

            {/* 在籍期間 */}
            <label className="form-label">在籍期間</label>
            <div className="date-range">
              <input
                type="month"
                value={item.from}
                onChange={(e) => handleChange(index, "from", e.target.value)}
                className="form-input"
              />
              <span>〜</span>
              <input
                type="month"
                value={item.to}
                onChange={(e) => handleChange(index, "to", e.target.value)}
                className="form-input"
              />
            </div>

            {/* 会社名 */}
            <label className="form-label">会社名</label>
            <input
              type="text"
              value={item.company}
              onChange={(e) => handleChange(index, "company", e.target.value)}
              className="form-input"
            />

            {/* 職種 */}
            <label className="form-label">職種</label>
            <input
              type="text"
              value={item.jobTitle}
              onChange={(e) => handleChange(index, "jobTitle", e.target.value)}
              className="form-input"
            />

            {/* 業務内容 */}
            <label className="form-label">業務内容</label>
            <textarea
              value={item.duties}
              onChange={(e) => handleChange(index, "duties", e.target.value)}
              className="form-input"
              rows={3}
            />
          </div>
        ))}

        {/* 自己PR */}
        <div className="form-section">
          <label className="form-label">自己PR</label>
          <textarea
            name="selfPR"
            value={data.selfPR || ""}
            onChange={handlePRChange}
            className="form-input"
            rows={5}
          />
        </div>

        <div className="form-nav">
          <button className="form-button back" onClick={onBack}>戻る</button>
          <button className="form-button next" onClick={onNext}>次へ</button>
        </div>
      </div>
    </div>
  );
};

export default Step6History;

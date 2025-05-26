// src/components/ResumePreview.jsx
import { useNavigate } from "react-router-dom";

import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ResumePreview = ({ formData }) => {
    const navigate = useNavigate(); // ← ここが「// コンポーネント内で」
  const {
    photoURL,
    basicInfo = {},
    workCondition = {},
    history = [],
    selfPR = ""
  } = formData;

  const emergency = basicInfo.emergency || {};
  const previewRef = useRef();

  const getAge = (birthDate) => {
    if (!birthDate) return "";
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return `${age}歳`;
  };

  const handlePDF = async () => {
    const element = previewRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = 210;
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("スキルシート.pdf");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={handlePDF} className="form-button next" style={{ float: "right", marginBottom: "1rem" }}>
        PDF出力
      </button>

      <div
        ref={previewRef}
        style={{
          background: "#fff",
          color: "#000",
          width: "210mm",
          minHeight: "297mm",
          padding: "20mm",
          margin: "0 auto",
          fontSize: "12pt",
          fontFamily: "'Yu Gothic', sans-serif",
          boxShadow: "0 0 5px rgba(0,0,0,0.1)",
          position: "relative"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>スキルシート</h2>

        {/* 写真（右上） */}
        {photoURL && (
          <img
            src={photoURL}
            alt="写真"
            style={{
              position: "absolute",
              top: "25mm",
              right: "20mm",
              width: "30mm",
              height: "40mm",
              objectFit: "cover",
              border: "1px solid #000"
            }}
          />
        )}

        {/* 基本情報・2列レイアウト */}
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "10px" }}>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #000", width: "25%" }}>フリガナ</td>
              <td style={{ border: "1px solid #000", width: "75%" }}>{basicInfo.furigana}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #000" }}>氏名</td>
              <td style={{ border: "1px solid #000" }}>{basicInfo.lastName} {basicInfo.firstName}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #000" }}>性別</td>
              <td style={{ border: "1px solid #000" }}>{basicInfo.gender}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #000" }}>生年月日</td>
              <td style={{ border: "1px solid #000" }}>{basicInfo.birthDate}（{getAge(basicInfo.birthDate)}）</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #000" }}>住所</td>
              <td style={{ border: "1px solid #000" }}>{basicInfo.zip} {basicInfo.address}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #000" }}>電話</td>
              <td style={{ border: "1px solid #000" }}>{basicInfo.phone1}-{basicInfo.phone2}-{basicInfo.phone3}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #000" }}>メール</td>
              <td style={{ border: "1px solid #000" }}>{basicInfo.email}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #000" }}>最寄駅・通勤手段</td>
              <td style={{ border: "1px solid #000" }}>{basicInfo.station}／{basicInfo.commute}（{basicInfo.commuteTime}分）</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #000" }}>自家用車</td>
              <td style={{ border: "1px solid #000" }}>{basicInfo.hasCar === "yes" ? `あり（${basicInfo.carType}）` : "なし"}</td>
            </tr>
          </tbody>
        </table>

        {/* 学歴・資格 */}
        <h3 style={{ borderTop: "2px solid #000", paddingTop: "8px" }}>学歴・資格</h3>
        <p>卒業年月：{workCondition.graduation} ／ 学校名：{workCondition.school}</p>
        <p>免許・資格等：{workCondition.licenses}</p>
        <p>スキル：{workCondition.skills}</p>

        {/* 職務経歴 */}
        <h3 style={{ borderTop: "2px solid #000", paddingTop: "8px" }}>職務経歴</h3>
        {history.map((item, idx) => (
          <div key={idx} style={{ marginBottom: "1rem" }}>
            <p><strong>職務経歴 {idx + 1}</strong></p>
            <p>在籍期間：{item.from}〜{item.to}</p>
            <p>会社名：{item.company}</p>
            <p>職種：{item.jobTitle}</p>
            <p>業務内容：{item.duties}</p>
          </div>
        ))}

        {/* 自己PR */}
        <h3 style={{ borderTop: "2px solid #000", paddingTop: "8px" }}>自己PR</h3>
        <p>{selfPR}</p>

        {/* 緊急連絡先 */}
        <h3 style={{ borderTop: "2px solid #000", paddingTop: "8px" }}>緊急連絡先</h3>
        <p>氏名：{emergency.name}（{emergency.furigana}）／ 続柄：{emergency.relation} ／ 電話：{emergency.phone}</p>
      </div>
    </div>
  );
};

<button onClick={() => navigate(-1)} className="form-button back">
  戻る
</button>

export default ResumePreview;

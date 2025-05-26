import React from "react";

const ResumePreviewHeader = ({ photoURL = "", basicInfo = {} }) => {
  const {
    furigana = "",
    lastName = "",
    firstName = "",
    birthDate = "",
    gender = "",
  } = basicInfo;

  const getAge = (birthDate) => {
    if (!birthDate) return "";
    const today = new Date();
    const bd = new Date(birthDate);
    let age = today.getFullYear() - bd.getFullYear();
    const m = today.getMonth() - bd.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < bd.getDate())) age--;
    return `${age}歳`;
  };

  const age = getAge(birthDate);

  return (
    <table style={{ width: "100%", borderCollapse: "collapse", border: "2px solid #000", fontFamily: "'Yu Gothic', sans-serif" }}>
      <tbody>
        {/* 第1段：タイトル + 写真 */}
        <tr>
          <td style={{ width: "80%", padding: "4px", fontSize: "10pt", border: "1px solid #000" }}>
            プロフィールシート
          </td>
          <td style={{ width: "20%", textAlign: "center", border: "1px solid #000" }}>
            {photoURL && (
              <img
                src={photoURL}
                alt="証明写真"
                style={{
                  width: "30mm",
                  height: "40mm",
                  objectFit: "cover",
                  border: "1px solid #000",
                }}
              />
            )}
          </td>
        </tr>

        {/* 第2段：フリガナ / 年齢 / 性別 */}
        <tr>
          <td colSpan="2" style={{ padding: 0, border: "none" }}>
            <table style={{ width: "100%", tableLayout: "fixed", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={{ width: "20%", border: "1px solid #000", padding: "4px" }}>フリガナ</td>
                  <td style={{ width: "40%", border: "1px solid #000", padding: "4px" }}>{furigana}</td>
                  <td style={{ width: "20%", border: "1px solid #000", padding: "4px" }}>年齢</td>
                  <td style={{ width: "20%", border: "1px solid #000", padding: "4px" }}>{age}</td>
                </tr>

                {/* 第3段：氏名 / 性別（同じ構成） */}
                <tr>
                  <td style={{ border: "1px solid #000", padding: "4px" }}>氏名</td>
                  <td style={{ border: "1px solid #000", padding: "4px" }}>{lastName} {firstName}</td>
                  <td style={{ border: "1px solid #000", padding: "4px" }}>性別</td>
                  <td style={{ border: "1px solid #000", padding: "4px" }}>{gender}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ResumePreviewHeader;

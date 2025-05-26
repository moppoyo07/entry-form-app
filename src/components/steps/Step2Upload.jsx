// src/components/steps/Step2Upload.jsx
import React, { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../../firebase";

const Step2Upload = ({ onNext, onBack }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("ファイルを選択してください");
      return;
    }

    setUploading(true);
    try {
      const storage = getStorage(app);
      const fileRef = ref(storage, `uploads/${Date.now()}_${selectedFile.name}`);
      await uploadBytes(fileRef, selectedFile);
      const downloadUrl = await getDownloadURL(fileRef);

      alert("アップロード完了しました");
      onNext(selectedFile, downloadUrl);
    } catch (err) {
      console.error("アップロード失敗:", err);
      alert("アップロード中にエラーが発生しました");
    } finally {
      setUploading(false);
    }
  };

  return (
<div className="page-wrapper">
<div className="form-container">
        <h2 className="form-heading">写真アップロード</h2>

        <div className="form-input-area">
          <label className="form-label">ファイル選択</label>
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileChange}
            className="form-input"
          />
        </div>

        {previewUrl && (
          <div className="form-preview">
            <img
              src={previewUrl}
              alt="preview"
              className="form-preview-image"
            />
          </div>
        )}

        <div className="form-nav">
          <button onClick={onBack} className="form-button back">戻る</button>
          <button
            onClick={handleUpload}
            disabled={uploading}
            className="form-button next"
          >
            {uploading ? "アップロード中..." : "アップロードして次へ"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2Upload;

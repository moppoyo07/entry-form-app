# 🧭 マルチステップエントリーフォーム構想

## 🎯 目的
- ユーザーフレンドリーな入力体験の提供
- フォーム入力をステップごとに分割し、負担を軽減
- スマホ対応、拡張性のあるReact構成
- 採用後のダッシュボード運用に連携可能な設計

---

## 🗂 ステップ構成（予定）

1. 注意事項と同意（利用規約・プライバシーポリシー）
2. 写真アップロード（既存写真／カメラ起動）
3. 基本情報（氏名、ふりがな、生年月日、メール、電話番号）
4. 勤務条件（開始日、期間、勤務可能曜日）
5. 学歴（卒業年月、学校名）
6. 職務経歴（最大3件：期間、会社名、職種、業務内容）
7. 資格（追加・削除可能）
8. 自己PR（自由記述＋将来のビジョン）
9. 緊急連絡先（氏名、フリガナ、続柄、電話番号）
10. 確認・送信

---

## 🛠 技術スタック

- **React + Vite**（高速フロントエンド）
- **React Hook Form + Yup**（バリデーション）
- **React Router**（ステップ分離）
- **React Context**（フォーム状態管理）
- **Firebase**（Firestore + Storage 保存）
- **UI ライブラリ**（Material UI または Ant Design）

---

## 🔗 Firestore 保存例（`staff` コレクション）

```json
{
  "name": "山田 太郎",
  "furigana": "やまだ たろう",
  "email": "taro@example.com",
  "phone": "090-1234-5678",
  "businessUnit": "福祉事業部",
  "jobType": "契約社員",
  "photoURL": "https://.../firebase/storage/...",
  "entryType": "就労支援型",
  "career": [...],
  ...
}

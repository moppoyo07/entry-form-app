// /src/data/dummyFormData.js
export const dummyFormData = {
  photoURL: "https://via.placeholder.com/120x160.png?text=Photo",

  //photoURL: "",
  basicInfo: {
    lastName: "佐伯",
    firstName: "崇",
    furigana: "サエキタカシ",
    birthDate: "1993-03-31",
    gender: "男",
    phone1: "090",
    phone2: "1234",
    phone3: "5678",
    address: "広島県広島市",
    zip: "730-0037",
    station: "西広島駅",
    commute: "バス",
    commuteTime: "20",
    hasCar: "yes",
    carType: "アクア",
    email: "sample@example.com",
    emergency: {
      name: "佐伯 健太",
      furigana: "サエキケンタ",
      relation: "兄",
      phone: "090-8765-4321"
    }
  },
  workCondition: {
    graduation: "2011-03",
    school: "広島工業高",
    licenses: "普通自動車免許（AT）",
    skills: "動画編集、ポスターデザイン",
    startDate: "2023-07-03",
    duration: "短期（〜6ヶ月）",
    availableDays: ["月", "火", "水", "木", "金"]
  },
  history: [
    {
      from: "2015-04",
      to: "2018-03",
      company: "株式会社A",
      jobTitle: "製造職",
      duties: "部品組立て、加工機オペレーター"
    },
    {
      from: "2018-04",
      to: "2020-12",
      company: "株式会社B",
      jobTitle: "軽作業",
      duties: "梱包、検品、ラベル貼りなど"
    },
    {
      from: "2021-01",
      to: "2023-03",
      company: "株式会社C",
      jobTitle: "運搬スタッフ",
      duties: "倉庫内の荷物の運搬"
    }
  ],
  selfPR: "責任感があり、チームでの作業も得意です。"
};

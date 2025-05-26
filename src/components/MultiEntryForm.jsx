// src/components/MultiEntryForm.jsx

import React, { useState } from "react";
import Step1Notice from "./steps/Step1Notice";
import Step2Upload from "./steps/Step2Upload";
import Step3PhotoConfirm from "./steps/Step3PhotoConfirm";
import Step4BasicInfo from "./steps/Step4BasicInfo";
import Step5WorkCondition from "./steps/Step5WorkCondition";
import Step6History from "./steps/Step6History";
import Step7Confirm from "./steps/Step7Confirm";
import Step8Submit from "./steps/Step8Submit";

const MultiEntryForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    photoURL: "",
    imageFile: null,
    basicInfo: {},
    workCondition: {},
    history: [
      { from: "", to: "", company: "", jobTitle: "", duties: "" },
      { from: "", to: "", company: "", jobTitle: "", duties: "" },
      { from: "", to: "", company: "", jobTitle: "", duties: "" },
    ],
    selfPR: "", // ✅ 忘れず初期化
  });

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  const updateFormData = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  return (
    <div className="page-wrapper">
      {step === 1 && <Step1Notice onNext={next} />}

      {step === 2 && (
        <Step2Upload
          onBack={back}
          onNext={(file, url) => {
            updateFormData("imageFile", file);
            updateFormData("photoURL", url);
            next();
          }}
        />
      )}

      {step === 3 && (
        <Step3PhotoConfirm
          photoURL={formData.photoURL}
          imageFile={formData.imageFile}
          onBack={back}
          onNext={next}
        />
      )}

      {step === 4 && (
        <Step4BasicInfo
          data={formData.basicInfo}
          onChange={(data) => updateFormData("basicInfo", data)}
          onBack={back}
          onNext={next}
        />
      )}

      {step === 5 && (
        <Step5WorkCondition
          data={formData.workCondition}
          onChange={(data) => updateFormData("workCondition", data)}
          onBack={back}
          onNext={next}
        />
      )}

      {step === 6 && (
        <Step6History
          data={{
            history: formData.history,
            selfPR: formData.selfPR,
          }}
          onChange={(updated) =>
            setFormData((prev) => ({
              ...prev,
              history: updated.history,
              selfPR: updated.selfPR,
            }))
          }
          onBack={back}
          onNext={next}
        />
      )}

      {step === 7 && (
        <Step7Confirm
          formData={formData}
          onBack={back}
          onNext={next}
        />
      )}

      {step === 8 && (
        <Step8Submit
          formData={formData}
          onBack={back}
        />
      )}
    </div>
  );
};

export default MultiEntryForm;

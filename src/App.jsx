// /src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MultiEntryForm from "./components/MultiEntryForm";
import ResumePreview from "./components/steps/ResumePreview";
import { dummyFormData } from "./data/dummyFormData"; // ✅ パス確認
import { FormProvider } from "./context/FormContext";

const App = () => {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MultiEntryForm />} />
          <Route path="/preview" element={<ResumePreview formData={dummyFormData} />} />
        </Routes>
      </Router>
    </FormProvider>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MultiEntryForm from "./components/MultiEntryForm";
import ResumePreview from "./components/steps/ResumePreview";
import { dummyFormData } from "./data/dummyFormData";
import { FormProvider } from "./context/FormContext";

const App = () => {
  return (
    <FormProvider>
      <Router basename="/entry-form-app">
        <Routes>
          <Route path="/" element={<MultiEntryForm />} />
          <Route path="/preview" element={<ResumePreview formData={dummyFormData} />} />
        </Routes>
      </Router>
    </FormProvider>
  );
};

export default App;

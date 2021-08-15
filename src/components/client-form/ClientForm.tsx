import React, { useState, useEffect } from "react";
import {
  ageRanges,
  incomeRanges,
  Validation,
  Client,
  AgeGroup,
  Income,
} from "../../utilities";
import "./ClientForm.scss";

type ClientFormProps = {
  onSubmit: (client: Client) => void;
};

export function ClientForm(props: ClientFormProps) {
  const { onSubmit } = props;

  const savedData = localStorage.getItem("clientFormData");
  const formData: Client = savedData
    ? JSON.parse(savedData)
    : { isStudent: false, income: "", age: "" };

  const [isStudent, setIsStudent] = useState(formData.isStudent);
  const [income, setIncome] = useState<Income>(formData.income);
  const [age, setAge] = useState<AgeGroup>(formData.age);

  const [ageValidation, setAgeValidation] = useState<Validation>(null);
  const [incomeValidation, setIncomeValidation] = useState<Validation>(null);

  useEffect(() => {
    localStorage.setItem(
      "clientFormData",
      JSON.stringify({ isStudent, age, income })
    );
  }, [isStudent, age, income]);

  const ageRangeOptions = () => {
    return ageRanges.map((ageRange, index) => {
      return (
        <div style={{ display: "block" }} key={index}>
          <label>
            <input
              type="radio"
              value={ageRange.value}
              name="age"
              checked={age === ageRange.value}
              onChange={(e) => setAge(e.target.value as AgeGroup)}
            />
            {ageRange.name}
          </label>
        </div>
      );
    });
  };

  const incomeRangeOptions = () => {
    return incomeRanges.map((incomeRange, index) => {
      return (
        <div style={{ display: "block" }} key={index}>
          <label>
            <input
              type="radio"
              value={incomeRange.value}
              name="income"
              checked={income === incomeRange.value}
              onChange={(e) => setIncome(e.target.value as Income)}
            />
            {incomeRange.name}
          </label>
        </div>
      );
    });
  };

  const validateForm = () => {
    let isValid = true;

    if (age === "") {
      isValid = false;
      setAgeValidation("Select value for your age");
    } else {
      setAgeValidation(null);
    }

    if (income === "") {
      isValid = false;
      setIncomeValidation("Select your income range");
    } else {
      setIncomeValidation(null);
    }

    return isValid;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({
        age: age,
        income: income,
        isStudent,
      });
    }
  };

  return (
    <div className="client-form-container">
      <form onSubmit={(e) => submit(e)}>
        <h3>Client Form</h3>
        <label style={{ margin: "0.5rem 0" }}>
          Age:
          {ageRangeOptions()}
        </label>
        <p className="validation">{ageValidation}</p>
        <label style={{ margin: "0.5rem 0" }}>
          Income:
          {incomeRangeOptions()}
        </label>

        <p className="validation">{incomeValidation}</p>

        <label style={{ margin: "0.5rem 0 1rem 0" }}>
          <input
            name="isStudent"
            type="checkbox"
            checked={isStudent}
            onChange={(e) => setIsStudent(e.target.checked)}
          />
          I am currently a student
        </label>

        <button type="submit">Find My Products</button>
      </form>
    </div>
  );
}

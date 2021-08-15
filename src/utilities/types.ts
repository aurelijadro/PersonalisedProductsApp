export type Validation = string | null;
export type Product = {
  title: string;
  id: number;
  applicableAgeRanges: string[];
  applicableIncomeRanges: string[];
  onlyApplicableForStudents: boolean;
};
export type AgeGroup = "ageGroup1" | "ageGroup2" | "ageGroup3" | "";
export type Income = "low" | "medium" | "high" | "";
export type Client = {
  isStudent: boolean;
  age: AgeGroup;
  income: Income;
};

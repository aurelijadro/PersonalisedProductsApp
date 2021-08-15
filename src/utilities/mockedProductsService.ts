import { AgeRange, IncomeRange } from ".";
import { incomeRanges } from "./constants";

const getApplicableProducts = (data: {
  age: string;
  income: string;
  isStudent: boolean;
}) => {
  const applicableProducts = [];
  if (data.age === AgeRange.ageGroup1) {
    applicableProducts.push({ productTitle: "Junior Saver Account" });
  } else {
    applicableProducts.push({ productTitle: "Current Account" });
    if (data.income === IncomeRange.low) {
      applicableProducts.push({ productTitle: "Debit Card" });
    }

    if (
      data.income === IncomeRange.medium ||
      data.income === IncomeRange.high
    ) {
      applicableProducts.push({ productTitle: "Credit Card" });
    }

    if (data.income === IncomeRange.high) {
      applicableProducts.push({ productTitle: "Gold Credit Card" });
      applicableProducts.push({ productTitle: "Current Account Plus" });
    }

    if (data.isStudent) {
      applicableProducts.push({ productTitle: "Student Account" });
    }
  }

  if (data.age === AgeRange.ageGroup3) {
    applicableProducts.push({ productTitle: "Senior Account" });
  }

  return applicableProducts;
};

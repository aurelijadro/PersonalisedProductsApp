
export const ageRanges = [
    { value: "ageGroup1", name: "1-17" },
    { value: "ageGroup2", name: "18 - 64" },
    { value: "ageGroup3", name: "65+" },
  ];

 export const incomeRanges = [
    { value: "low", name: "Up to €12000" },
    { value: "medium", name: "€120001-€40000" },
    { value: "high", name: "€400001 and higher" },
  ];

  export enum AgeRange {
    ageGroup1 = 'ageGroup1',
    ageGroup2 = 'ageGroup2',
    ageGroup3 = 'ageGroup3'
  }

  export enum IncomeRange {
    low = 'low',
    medium = 'medium',
    high = 'high'
  }

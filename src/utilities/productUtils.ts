import { Product, Client } from ".";

export const filterApplicableProducts = (product: Product, client: Client) => {
  const isAgeApplicable = product.applicableAgeRanges.includes(client.age);
  const isIncomeApplicable = product.applicableIncomeRanges.includes(
    client.income
  );
  const isCompatableWithClientsStudentStatus =
    !product.onlyApplicableForStudents || client.isStudent === true;

  return (
    isAgeApplicable &&
    isIncomeApplicable &&
    isCompatableWithClientsStudentStatus
  );
};

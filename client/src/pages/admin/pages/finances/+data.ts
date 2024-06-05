export type Data = Awaited<ReturnType<typeof data>>;

export const data = async () => {
  return {
    balance: 6000,
    expectedExpenses: 2000,
  };
};

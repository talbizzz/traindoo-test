export const getDailyCheckValues = (): TestDailyCheckContainerType => {
  return {
    weight: {
      values: [
        { date: "07.02.2022", value: 70 },
        { date: "14.02.2022", value: 72 },
        { date: "21.02.2022", value: 73.4 },
        { date: "28.02.2022", value: 72.2 },
        { date: "07.03.2022", value: 72.1 },
        { date: "14.03.2022", value: 73 },
        { date: "21.03.2022", value: 75 },
      ],
    },
    caloriesAvg: {
      values: [
        { date: "07.02.2022", value: 800 },
        { date: "21.02.2022", value: 920 },
        { date: "07.03.2022", value: 930.5 },
        { date: "21.03.2022", value: 913 },
      ],
    },
    fatsAvg: {
      values: [
        { date: "07.02.2022", value: 312 },
        { date: "21.02.2022", value: 345 },
        { date: "07.03.2022", value: 360 },
        { date: "21.03.2022", value: 400 },
      ],
    },
    carbsAvg: {
      values: [
        { date: "07.02.2022", value: 1100 },
        { date: "21.02.2022", value: undefined },
        { date: "07.03.2022", value: 0 },
        { date: "21.03.2022", value: 1200 },
      ],
    },
  };
};

export type TestDailyCheckContainerType = {
  weight: TestDailyCheckValuesType;
  caloriesAvg: TestDailyCheckValuesType;
  fatsAvg: TestDailyCheckValuesType;
  carbsAvg: TestDailyCheckValuesType;
};

export type TestDailyCheckValuesType = {
  values: Array<{ date: string; value: number }>;
};

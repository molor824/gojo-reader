export type UserData = {
  words?: Record<
    string,
    {
      memorizationRate: number; // 0 means not memorized, 5 means memorized
    }
  >;
};

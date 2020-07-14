const { add, subtract } = require("./calc");

describe("足し算のテスト", () => {
  test("1と2を渡すと3が返ること", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("引き算のテスト", () => {
  test("2と1を渡すと1が返ること", () => {
    expect(subtract(2, 1)).toBe(1);
  });
});

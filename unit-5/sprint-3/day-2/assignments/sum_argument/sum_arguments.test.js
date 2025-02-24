
const sum = require("./sum_arguments");
describe("Testing sum function", () => { //tets suite
    //tests
    test("add 2 positive numbers", () => {
      expect(sum(1, 2)).toBe(3);
    });
    test("add 2 negative numbers", () => {
        expect(sum(-1, -2)).toBe(-3);
      });
      test("add 2 positive  string numbers", () => {
        expect(sum("1", "2")).toBe(3);
      });
      
      test("add 4 numbers", () => {
        expect(sum(1,2,3,4)).toBe(10);
      });
})  
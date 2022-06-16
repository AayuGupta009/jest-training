const sum = require("./sum");

describe("exmaple testing",() => {
  it("should be sum of two numbers", () => {
    const res = sum(3, 12);
    expect(res).toBe(15);
  });

  it("should be object equal" , () => {
    const obj = {};
    expect(obj).toEqual({})
  })
});


describe("should be null" , () => {
    it("Check for null" , () =>{
        const n = null;
        expect(n).toBeNull()
    })
})

describe("should be numbers" , () => {
    it("Check for less than" , () =>{
        var n = 13;
        expect(n).toBeLessThan(16)
        expect(n).toBeLessThanOrEqual(13)
    })
    it("Working with decimals" , () => {
        var n = 0.39;
        expect(n).toBeCloseTo(0.3945)
    })
})

describe("Strings" , () => {
    it("Working with REGEX" , () => {
        expect("team").not.toMatch(/I/)
    })
})

const fun = () => {
    throw new Error ("ye party yuhi chalegi.....")
}

describe("Exceptions" , () => {
    it("error hai na" , ()=>{
        expect(()=> fun()).toThrow()
    })
})
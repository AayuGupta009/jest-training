animals = ["Elephant", "Lion", "Tiger"];
beforeAll(() => {
  console.log("In the BeforeAll()");
});

afterAll(() => {
  console.log("In the AfterAll()");
});
describe("Animals Array", () => {
  beforeEach(() => {
    animals = ["Elephant", "Lion", "Tiger"];
  });
  it("append test", () => {
    animals.unshift("Leopard");
    expect(animals[0]).toBe("Leopard");
  });
  it("push test", () => {
    animals.push("Fox");
    expect(animals[animals.length - 1]).toBe("Fox");
  });
  it("length test", () => {
    expect(animals.length).toBe(3);
  });
});

describe("test for truth", () => {
  afterEach(() => {
    console.log("In the only truth test case");
  });
  it.only("test for equality", () => {
    let a = true;
    expect(a).toEqual(true);
  });
});

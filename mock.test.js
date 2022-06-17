// const { default: axios } = require("axios");
const axios = require("axios");

const fetch = async (id) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return res.data;
};

const getDiscount = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

describe("mock callback", () => {
  const mockCalledBack = jest.fn((x) => x - x * 0.25);
  getDiscount([100, 125, 150, 200, 50, 160, 180, 550, 880], mockCalledBack);

  it("Mock fn() length", () => {
    expect(mockCalledBack.mock.calls.length).toBe(9);
  });
  it("Mock fn() parameter in calls", () => {
    expect(mockCalledBack.mock.calls[0][0]).toBe(100);
  });
  it("Mock discount calculator", () => {
    // To find the objects returned by the mocked functions
    console.log(mockCalledBack.mock.results);
    expect(mockCalledBack.mock.results[0].value).toBe(75);
  });
});

it("Mock calls retruns value", () => {
  const mock = jest.fn();
  mock.mockReturnValueOnce(true).mockReturnValueOnce(56).mockReturnValueOnce("Hola");
  const a = mock();
  const b = mock();
  const c = mock();
  expect(a).toBe(true);
  expect(b).toBe(56);
  expect(c).toBe("Hola");
});

it("Spying on Axios with Jest", async ()=>{
    jest.spyOn(axios, "get").mockReturnValueOnce({
        data: {
            id:1,
            todo: "Good Night!!!"
        }
    })

    const res = await fetch(1);
    expect(res.todo).toBe("Good Night!!!")
})
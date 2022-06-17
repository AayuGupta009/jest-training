const fetch = require("./async")

it('expected id of 1' , async () => {
    const todo = await fetch(1);
    expect(todo.id).toBe(1);
})
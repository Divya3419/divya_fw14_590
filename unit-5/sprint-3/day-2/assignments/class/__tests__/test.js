

describe("toBe or not toBe",()=>{
test("3 is 3",()=>{
    expect(3).toBe(3)
})

test("Boolean values",()=>{
    expect(true).toBe(true)
    expect(false).toBe(false)
    expect(true).not.toBe(false)
})
test("[] !==[]",()=>{
    
    expect([]).not.toBe([])
})
test("{} !=={}",()=>{
    
    expect({}).not.toBe({})
})

})


//deepEqual,shallowEqual

// //describe("toEqual",()=>{

// })
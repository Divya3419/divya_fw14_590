const {test,describe,expect}=require('@jest/globals')
const taxCalculator=require('./tax_calculator.js')

describe("should be no tax below than 250000",function(){
    test("should be below than 250000 ",function(){
        expect(taxCalculator(240000)).toBe("No Tax")
    })
    test("should be above than 250000 && below than 500000 and no saving",function(){
        expect(taxCalculator(300000,0)).toBe(5000)
    })
    test("should be above than 500000 && below than 1000000 and no saving",function(){
        expect(taxCalculator(700000,0)).toBe(65000)
    })
    test("should be above than 100000 and no saving",function(){
        expect(taxCalculator(1200000,0)).toBe(135000)
    })
    test("should be above than 250000 && below than 500000 and there is saving",function(){
        expect(taxCalculator(300000,20000)).toBe(4000)
    })
    test("should be above than 500000 && below than 1000000 and there is saving",function(){
        expect(taxCalculator(700000,50000)).toBe(62000)
    })
    test("should be above than 100000 and there is saving",function(){
        expect(taxCalculator(1200000,10000)).toBe(105000)
    })
    test("if there is string",function(){
        expect(taxCalculator("abc",10000)).toBeUndefined()
    })
    
})
Foot
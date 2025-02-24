import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "./Counter"

describe("Counter tests",()=>{
    test("should render without any error",()=>{
    })
    test("should have add and reduce buttons",()=>{
        render(<Counter>ADD</Counter>)
        //screen.debug();
        let button1=screen.getByText("ADD")
       expect(button1).toBeInTheDocument()
           
    })

    it("should have reduce button",()=>{
        render( <Counter>REDUCE</Counter> )
        let button2=screen.getByText("REDUCE")
        expect(button2).toBeInTheDocument()
    })
    
    test("should have an element with counter value as default ( 0 )",()=>{
        render( <Counter></Counter> )
        let h3=screen.getByText("Count is 0")
        expect(h3).toHaveTextContent("0")
    })
    test("onClick of ADD, value of Counter should increment by 5",()=>{
        render( <Counter></Counter> )
        let h3=screen.getByText("Count is 0")
        expect(h3).toHaveTextContent("0")
        let toggleButton=screen.getByText("ADD")
        fireEvent.click(toggleButton)
        expect(h3).toHaveTextContent("5")
    })
    test("onClick of REDUCE, the value of Counter should decrement by 5",()=>{
        render( <Counter></Counter> )
        let h3=screen.getByText("Count is 0")
        expect(h3).toHaveTextContent("0")
        screen.debug()
        let toggleButton=screen.getByText("REDUCE")
        fireEvent.click(toggleButton)
        expect(h3).toHaveTextContent("5")
    })
})
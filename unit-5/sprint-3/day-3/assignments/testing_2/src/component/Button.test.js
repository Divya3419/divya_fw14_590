import {render,screen,fireEvent} from "@testing-library/react"
//import userEvent from "@testing-library/user-event"
import  renderer  from "react-test-renderer"
import App from "../App"
import Button from "./Button"

describe("Button Tests",()=>{
    test("should have button in dom",()=>{
render(<Button>Click me</Button>)//virtually
// screen.debug(); show whole code
 let button=screen.getByText("Click me")
expect(button).toBeInTheDocument()

})

test("should have Id",()=>{
    render(<App></App>)//virtually
    screen.debug(); //show whole code
     let button=screen.getByTestId("Button1")
    expect(button).toBeInTheDocument();
    
    })

// use it or test
it("div text",()=>{
    render(<App></App>)
    let h1=screen.getByText("Click me")
    expect(h1).toBeInTheDocument()
    
        })

    it("should change theme",()=>{
        render(<App></App>)
        let h1=screen.getByText("current theme is light")
        expect(h1).toHaveTextContent("light")

        let themeButton=screen.getByText("Change Theme")
        fireEvent.click(themeButton)
        expect(h1).toHaveTextContent("dark")
            })

            it("should call the function",()=>{
                const mockfn=jest.fn()
                render(<Button onClick={mockfn}>Click Me</Button>)
           const btn=screen.getByTestId("Button1")
        //    if we put two of function it will fail
           //fireEvent.click(btn)
           fireEvent.click(btn)
           expect(mockfn).toBeCalled()
           expect(mockfn).toBeCalledTimes(1);

            }) 

            // for snapshot install renderer
test("should match snapshot",()=>{
     const tree = renderer.create(<Button colorSheme={"green"} variant={"ghost"}>add counter
                </Button>)
                .toJSON()
                expect(tree).toMatchSnapshot()

            })


})
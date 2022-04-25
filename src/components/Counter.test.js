import {render, screen} from "@testing-library/react";
import Counter from "./Counter";

// 1. write a test
// 2. make the test compile
// 3. see that the test fails (DO NOT SKIP, VERY IMPORTANT)
// 4. make the test pass
test("should start at 0", () => {
    render(<Counter number={0}/>)
    expect( screen.getByText(/0/)).toBeInTheDocument()
})

test("should start at 1", () => {
    render(<Counter number={1}/>)
    expect( screen.getByText(/1/)).toBeInTheDocument()
})

test("should increment on click",()=>{
    // let callCount =0
    //
    // function countCall(){
    //     ++callCount
    // }
    const  mock = jest.fn()

    render(<Counter number={0} onIncrement={mock}/>)
    screen.getByRole("button").click()
    // expect(callCount).toBe(1)
    expect(mock).toHaveBeenCalled()
})
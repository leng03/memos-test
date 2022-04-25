import {render, screen} from "@testing-library/react";
import EditMemo from "./EditMemo";

test("should show input fields with current memo data and false complete", () => {
    const memo = {
        title: "Title",
        date: new Date(),
        description: "Desc1",
        complete: false
    }

    render(<EditMemo memo={memo}/>)

    const titleElement = screen.getByDisplayValue(memo.title)
    expect(titleElement).toBeInTheDocument()
    expect(screen.getByDisplayValue(memo.description)).toBeInTheDocument()
    expect(screen.getByDisplayValue(memo.date.toISOString().substr(0,10))).toBeInTheDocument()
    const completeElement = screen.getByRole("checkbox")
    expect(completeElement.checked).toBe(memo.complete)
})

test("should show input fields with current memo data and true complete", () => {
    const memo = {
        title: "Title",
        date: new Date(),
        description: "Desc1",
        complete: false
    }

    render(<EditMemo memo={memo}/>)

    const titleElement = screen.getByDisplayValue(memo.title)
    expect(titleElement).toBeInTheDocument()
    expect(screen.getByDisplayValue(memo.description)).toBeInTheDocument()
    expect(screen.getByDisplayValue(memo.date.toISOString().substr(0,10))).toBeInTheDocument()
    const completeElement = screen.getByRole("checkbox")
    expect(completeElement.checked).toBe(memo.complete)
})
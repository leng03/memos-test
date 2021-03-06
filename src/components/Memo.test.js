import {render, screen} from "@testing-library/react";
import Memo from "./Memo";

test("should show title, date, description, and complete (badge should be grey)", () => {
    const title = "Test Title"
    const date = new Date()
    const description = "Test Description"
    const complete = true
    render(<Memo memo ={{title, date, description, complete}} />)
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(date.toDateString())).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()
    expect(screen.getByText("Complete")).toBeInTheDocument()
    expect(screen.getByText("Delete")).toBeInTheDocument()
    const bg = screen.getByText("Complete");
    expect(bg).toHaveClass("bg-success")
})

test("should show title, date, description, and not complete", () => {
    const id = 1
    const title = "Test Title"
    const date = new Date()
    const description = "Test Description"
    const complete = false
    const deleteMock = jest.fn()
    render(<Memo memo ={{id, title, date, description, complete}} onDelete={deleteMock}/>)
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(date.toDateString())).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()

    expect(screen.getByText("To Do")).toBeInTheDocument()
    const deleteButton = screen.getByText("Delete")
    expect(deleteButton).toBeInTheDocument()
    deleteButton.click()
    expect(deleteMock).toHaveBeenCalledWith(id)

    const bg = screen.getByText("To Do");
    expect(bg).toHaveClass("bg-secondary")
})

it('should show an edit button', function () {
    const memo={
        id: 0,
        title: ",",
        date: new Date(),
        description: "",
        complete: false
    }

    render(<Memo memo={memo}/> )
    //expect(screen.getByText("Edit")).toBeInTheDocument()
    expect(screen.getByRole('button', {name: 'Edit'})).toBeInTheDocument()

});

it('should call on Edit when the edit button is clicked', function () {
    const memo={
        id: 0,
        title: ",",
        date: new Date(),
        description: "",
        complete: false
    }

    const mock = jest.fn()

    render(<Memo memo={memo} onEdit={mock}/> )
    screen.getByText("Edit").click()
    expect(mock).toHaveBeenCalledWith(memo)
});
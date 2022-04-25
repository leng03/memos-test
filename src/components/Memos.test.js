import {render, screen} from "@testing-library/react";
import Memos from "./Memos";

test("should show 2 memos", ()=>{
    // need 2 things to render
    // passed a array (EZer to display list)
    const memoData = ["memo1", "memo2"]

    const mockMemo = ({memo}) => <div>{memo}</div>
    render(<Memos memos = {memoData} _Memo={mockMemo}/>)
    expect(screen.getByText("memo1")).toBeInTheDocument()
    expect(screen.getByText("memo2")).toBeInTheDocument()
})
// Responsible for displaying a list of memos

import Memo from "./Memo";

export default function Memos({memos, onDelete, _Memo = Memo}) {
    return <>
        {/*transform the memos array into a list of react components*/}
        {memos.map(
            (memo,index) => <div key={index} className={"m-3"}>
                <_Memo memo={memo} onDelete={onDelete}/>
            </div>)}
    </>
}
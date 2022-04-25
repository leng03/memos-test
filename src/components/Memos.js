// Responsible for displaying a list of memos

import Memo from "./Memo";

export default function Memos({memos, _Memo = Memo}) {
    return <>
        {/*transform the memos array into a list of react components*/}
        {memos.map((memo,index) => <_Memo key={index} memo={memo}/>)}
    </>
}
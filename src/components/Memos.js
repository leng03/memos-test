// Responsible for displaying a list of memos

import Memo from "./Memo";
import {Col, Row} from "react-bootstrap";

export default function Memos({memos, onDelete, onEdit, _Memo = Memo}) {
    return <>
        {/* try this when cards are working again className={"flex-nowrap"}*/}
        {/*transform the memos array into a list of react components*/}
        <Row >
            {memos.map(
                // (memo,index) => <Col key={index} className={"m-3"}>
                (memo, index) =>
                    <Col key={index}>
                        <_Memo memo={memo} onDelete={onDelete} onEdit={onEdit}/>
                    </Col>)}
        </Row>
    </>
}
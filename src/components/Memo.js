// Responsible for displaying a memos

import {Button, Card} from "react-bootstrap";

export default function Memo({memo, onDelete}) {
    const {id, title, date, description, complete} = memo
    return <Card>
        <Card.Header>
            <h2 className={"d-flex justify-content-between"}>
                {title}
                <span>{date.toDateString()}</span>
            </h2>
            {/*<h3>{date.toDateString()}</h3>*/}
        </Card.Header>
        <Card.Body>
            <h3>{description}</h3>
            <h4>{complete ? "Complete" : "To Do"}</h4>
            <Button variant={"danger"} onClick={() => onDelete(id)}>Delete</Button>
        </Card.Body>
    </Card>
}
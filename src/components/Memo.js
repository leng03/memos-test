// Responsible for displaying a memos

import {Badge, Button, Card} from "react-bootstrap";

export default function Memo({memo, onDelete, onEdit}) {
    const {id, title, date, description, complete} = memo
    return <Card className={"m-1 col-sm-auto" }>
        <Card.Header>
            <h3 className={"d-flex justify-content-between"}>
                {title}
                <span>{date.toDateString()}</span>
            </h3>
            {/*<h3>{date.toDateString()}</h3>*/}
        </Card.Header>
        <Card.Body>
            <Card.Text>
                {description}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <div className={"d-flex justify-content-between"}>
                <Badge pill bg={complete ? "success" : "secondary"}
                       className={"d-flex flex-column justify-content-center"}>
                    {complete ? "Complete" : "To Do"}
                </Badge>
                <Button variant={"outline-primary"} onClick={() => onEdit(memo)}>Edit</Button>
                <Button variant={"outline-danger"} onClick={() => onDelete(id)}>Delete</Button>
            </div>
        </Card.Footer>

    </Card>
}
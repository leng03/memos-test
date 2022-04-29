import './App.css';
import Login from "./components/Login";
import Memos from "./components/Memos";
import {Col, Row} from "react-bootstrap";
import EditMemo from "./components/EditMemo";
import {useDispatch, useSelector} from "react-redux";
import {APPLY_EDIT_MEMO, CANCEL_MEMO, DELETE_MEMO, EDIT_MEMO, LOGIN, LOGOUT} from "./modules/memos";

export function App({loggedInInit = false, _Login = Login, _Memos = Memos}) {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const memos = useSelector(state => state.memos)
    const memoToEdit = useSelector(state => state.memoToEdit)

    function deleteMemo(memoID) {
        dispatch({type: DELETE_MEMO, id: memoID})
    }

    function handleLogin(credentials) {
        console.log(credentials)
        dispatch({type: LOGIN, credentials})
    }

    function handleLogout() {
        dispatch({type: LOGOUT})
    }

    function editMemo(memo) {
        dispatch({type: EDIT_MEMO, memo})
    }

    function cancelEditMemo() {
        dispatch({type: CANCEL_MEMO})
    }

    function applyEditMemo(memo) {
        dispatch({type: APPLY_EDIT_MEMO})
    }

    if (isLoggedIn) {
        if (memoToEdit)
            return <div>
                <EditMemo memo={memoToEdit} onCancel={cancelEditMemo}
                          onApply={applyEditMemo}/>
            </div>
        else
            return <_Memos memos={memos} onDelete={deleteMemo} onEdit={editMemo}/>
    } else
        return <Row>
            {/*<Col style={{display: "flex", justifyContent: "center"}}>*/}
            <Col className={"d-flex justify-content-center"}>
                <div className={"mt-3"}>

                    <_Login onLogin={handleLogin}/>
                </div>
            </Col>
        </Row>
}

export default App;

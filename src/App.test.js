import {render, screen} from '@testing-library/react';
import {App} from './App';

// Up until now, we have done manual testing
// I called it "no excuses" testing
// Now we will use a framework
// framework is called jest
// We are no longer testing JS, we are testing
//    ecma script
// Ecma Script is a combination of JS and JSX

// Is this a unit test? no, it is a units test

test('should display the main app when logged in', () => {
    let _memos = undefined
    let _onDelete = undefined
    const expectedText = "This is the expected text"

    const mock = ({memos, onDelete})=> {
        _memos = memos
        _onDelete = onDelete
        return <>{expectedText}</>
    }
    const noText = 'NONONO'
    const nonono = ()=> <div>{noText}</div>

    render(<App loggedInInit={true} _Memos={mock} _Login={nonono}/>);
    const h1 = screen.getByText(expectedText)
    expect(h1).toBeInTheDocument()
    expect(typeof _memos).toBe("object")
    expect(screen.queryByText(noText)).not.toBeInTheDocument()
    expect(typeof _onDelete).toBe("function")
});

// This is a unit test now
test('should display the login screen when logged out', () => {
    const mockLogin = () => <>This is the expected text</>
    render(<App _Login={mockLogin}/>);
    const element = screen.getByText(/This is the expected text/);
    expect(element).toBeInTheDocument();
});

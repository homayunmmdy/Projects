import { fireEvent, render, screen } from "@testing-library/react"
import Login from "./Login"


jest.mock("axios" , ()=> ({

    __esModule : true,
    default: {
        get: ()=> ({
            data:{id:1 , name:"John"}
        })
    }
}))

test("user name should be renderd", () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText(/username/i)
    expect(userInputEl).toBeInTheDocument()
})

test("pasword name should be renderd", () => {
    render(<Login />);
    const userPasswordtEl = screen.getByPlaceholderText(/password/i)
    expect(userPasswordtEl).toBeInTheDocument()
})

test("button name should be renderd", () => {
    render(<Login />);
    const userBtnEl = screen.getByRole("button")
    expect(userBtnEl).toBeInTheDocument()
})

test("user name input should be empty", () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText(/username/i)
    expect(userInputEl.value).toBe("")
})

test("password  input should be empty", () => {
    render(<Login />);
    const passwordInputEl = screen.getByPlaceholderText(/password/i)
    expect(passwordInputEl.value).toBe("")
})

test("button should be diable", () => {
    render(<Login />);
    const userBtnEl = screen.getByRole("button")
    expect(userBtnEl).toBeDisabled()
})

test("loading should not be rendered", () => {
    render(<Login />);
    const userBtnEl = screen.getByRole("button")
    expect(userBtnEl).not.toHaveTextContent(/please wait/i)
})

test("eero messsage should not be visible", () => {
    render(<Login />);
    const erroEl = screen.getByTestId("error")
    expect(erroEl).not.toBeVisible()
})

test("user name input should be change", () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText(/username/i)
    const testValue = "test"

    fireEvent.change(userInputEl, { target: { value: testValue } })

    expect(userInputEl.value).toBe(testValue)
})

test("password  input should be change", () => {
    render(<Login />);
    const passwordInputEl = screen.getByPlaceholderText(/password/i)
    const testValue = "test"

    fireEvent.change(passwordInputEl, { target: { value: testValue } })

    expect(passwordInputEl.value).toBe(testValue)
})

test("button should be diable when inputs exist" , () => {
    render(<Login />);
    const userBtnEl = screen.getByRole("button")
    const userInputEl = screen.getByPlaceholderText(/username/i)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)

    const testValue = "test"
    
    fireEvent.change(userInputEl, { target: { value: testValue } })
    fireEvent.change(passwordInputEl, { target: { value: testValue } })

    expect(userBtnEl).not.toBeDisabled()
})

test("loading should not be rendered when click the button", () => {
    render(<Login />);
    const BtnEl = screen.getByRole("button")
    const userInputEl = screen.getByPlaceholderText(/username/i)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)

    const testValue = "test"
    
    fireEvent.change(userInputEl, { target: { value: testValue } })
    fireEvent.change(passwordInputEl, { target: { value: testValue } })
    fireEvent.click(BtnEl)
    expect(BtnEl).toHaveTextContent(/please wait/i)
})
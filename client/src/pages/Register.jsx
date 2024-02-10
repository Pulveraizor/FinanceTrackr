import { Logo } from "./Login";

export function CreateUsername() {
    return (
        <div className="row input-group has-validation mt-3 mx-0">
            <div className="px-0">
                <label htmlFor="username" className="text-light form-label">Create Username:</label>
                <input type="text" id="username" name="username" className="form-control" required></input>
            </div>
            <div className="invalid-feedback col-12">
                Please enter username
            </div>
        </div>
    )
}
function CreatePassword() {
    return (
        <div className="row input-group has-validation mt-5 mx-0">
            <div className="px-0">
                <label htmlFor="password" className="text-light form-label">Create Password:</label>
                <input type="password" id="password" name="password" className="form-control" required></input>
            </div>
            <div className="px-0">
                <label htmlFor="password_repeat" className="text-light form-label">Repeat Password:</label>
                <input type="password" id="password_repeat" name="password_repeat" className="form-control" required></input>
            </div>
            <div className="invalid-feedback col-12">
                Please enter password
            </div>
        </div>
    )
}
export function RegisterBtn() {
    return <button type="submit" className="text-light btn bg-main-dark-blue mt-5">Register</button>
}

function RegisterForm() {
    return (
        <form className="row justify-content-center needs-validation" action="/register" method="post">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xxl-3 card bg-transparent border-0 p-5">
                <>
                    <Logo />
                    <CreateUsername />
                    <CreatePassword />
                    <RegisterBtn />
                    <div className="text-light mt-3">
                        <p>Already have an account? <a className="text-light" href="/login">Login</a></p>
                    </div>
                </>
            </div>
        </form>
    )
}

export default RegisterForm;
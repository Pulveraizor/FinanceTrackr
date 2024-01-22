export function Logo() {
    return (
        <img className="rounded-circle" src="finlogo.jpg" alt="logo"></img>
    )
}

export function InputUsername() {
    return (
        <div className="row input-group has-validation mt-3 mx-0">
            <div className="px-0">
                <label htmlFor="username" className="text-light form-label">Username:</label>
                <input type="text" id="username" name="username" className="form-control" required></input>
            </div>
            <div className="invalid-feedback col-12">
                Please enter username
            </div>
        </div>
    )
}
function InputPassword() {
    return (
        <div className="row input-group has-validation mt-3 mx-0">
            <div className="px-0">
                <label htmlFor="password" className="text-light form-label">Password:</label>
                <input type="password" id="password" name="password" className="form-control" required></input>
            </div>
            <div className="invalid-feedback col-12">
                Please enter password
            </div>
        </div>
    )
}

export function SubmitBtn() {
    return <button type="submit" className="text-light btn bg-main-dark-blue mt-5">Login</button>
}

function LoginForm() {
    return (

 
        <form className="row justify-content-center needs-validation" action="/auth" method="post">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xxl-3 card bg-transparent border-0 p-5">
                <>
                    <Logo />
                    <InputUsername />
                    <InputPassword />
                    <SubmitBtn />
                    <div className="text-light mt-3">
                        <p>Don't have an account? <a className="text-light" href="/login">Register</a></p>
                    </div>
                </>
            </div>
        </form>

 
    )
}

export default LoginForm;
function Logo() {
    return (
        <img class="rounded-circle" src="finlogo.jpg" alt="logo"></img>
    )
}

function InputUsername() {
    return (
        <div className="mt-3">
            <label for="username" className="text-light">Username:</label>
            <input type="text" id="username" className="form-control"></input>
        </div>
    )
}
function InputPassword() {
    return (
        <div className="mt-3">
            <label for="password" className="text-light">Password:</label>
            <input type="password" id="password" className="form-control"></input>
        </div>
    )
}

function SubmitBtn() {
    return <button type="submit" className="text-light btn bg-main-dark-blue mt-5">Login</button>
}

function LoginForm() {
    return (

 
        <form className="row justify-content-center" action="/auth" method="post">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xxl-3 card bg-transparent border-0 p-5">
                <>
                    <Logo />
                    <InputUsername />
                    <InputPassword />
                    <SubmitBtn />
                </>
            </div>
        </form>

 
    )
}

export default LoginForm;
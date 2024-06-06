
type fallo={
    fail:boolean;
}


export default function Logcomp(fallo:fallo){
    return(
        <html>
    <body>
        <div class="login-container">
            <h2>Login</h2>
            {fallo.fail && (
                <p class="error-message">Incorrect credentials or user does not exist</p>
            )}
            <form method="POST" action="/login">
                <label for="email">Email</label>
                <input type="text" id="email" name="email" required/>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required/>
                <button type="submit">Login</button>
                <p class="register-link">
                    Don't have an account? <a href="/register">Register</a>
                </p>
            </form>
        </div>
    </body>
</html>
    );
}
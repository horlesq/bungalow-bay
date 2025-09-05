function LoginMessage() {
    return (
        <div className="grid bg-primary-800 ">
            <p className="text-center text-xl py-12 self-center">
                Please{" "}
                <a href="/login" className="underline text-accent-500">
                    login
                </a>{" "}
                to reserve this
                <br /> bungalow right now
            </p>
        </div>
    );
}

export default LoginMessage;

export const Logo = ({logo}) => {
    return (
        <div className="logo-container p-5 text-center">
            <img
                src={logo}
                height="100"
                width="125"
                alt="todo-logo"
                />
        </div>
    )
}
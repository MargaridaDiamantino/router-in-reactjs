function Span({ texto ,cls }) {
    return (
        <>
            <div>
                <span className={cls}>
                    {texto}
                </span>
            </div>
        </>
    )
}export default Span

type childrenT = {
    children: React.ReactNode
}

export function MainContainer({ children }: childrenT) {

    return (
        <>
            <div className="main_container">
                {children}
            </div>
        </>
    )
}
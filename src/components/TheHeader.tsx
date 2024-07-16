import Navigation from "./Navigation"

const navItems = [
    {label: 'Home', href: '/'},
    {label: 'Blog', href: '/blog'},
    {label: 'Tasks', href: '/tasks'}
]

const TheHeader = () => {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 100,
            background: 'darkgray'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: 300
            }}>
                <Navigation navLinks={navItems}/>
            </div>
        </header>
    )
}

export default TheHeader
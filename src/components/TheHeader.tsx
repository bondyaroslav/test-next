import Link from "next/link"

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
                <Link href={"/"}>Home</Link>
                <Link href={"/blog"}>Blog</Link>
                <Link href={"/about"}>About</Link>
            </div>
        </header>
    )
}

export default TheHeader
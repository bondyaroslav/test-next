import Link from "next/link"
import {Metadata} from "next"
import {Post} from '../../types/Post'

async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60
        }
    })
    return response.json()
}

export const metadata: Metadata = {
    title: 'Blog | Next App'
}

const BlogPage = async () => {
    const posts = await getData()
    console.log(posts)
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: 20
        }}>
            <h1>Blog</h1>
            <ul style={{height: '100%'}}>
                {posts.map((post: Post) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BlogPage
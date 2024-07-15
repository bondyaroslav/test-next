'use client'
import Link from "next/link"
import {Post} from '@/types/Post'
import {getAllPosts} from "@/services/getPosts"
import {useEffect, useState} from "react"
import Posts from '../../components/Posts'

const BlogPage = () => {
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllPosts().then(setPosts).finally(() => setLoading(false))
    }, [])

    console.log(posts)
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: 20
        }}>
            {loading ?
                <h1>Loading...</h1>
                :
                <>
                    <h1>Blog</h1>
                    <ul style={{height: '100%'}}>
                        {posts.map((post: Post) => (
                            <Posts
                                key={post.id}
                                id={post.id}
                                body={post.body}
                                title={post.title}
                                userId={post.userId}
                            />
                        ))}
                    </ul>
                </>
            }
        </div>
    )
}

export default BlogPage
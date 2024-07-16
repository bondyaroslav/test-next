import React from 'react'
import {Metadata} from "next"

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })
    return response.json()
}

interface PostProps {
    params: {
        id: string
    }
}

export async function generateMetadata({
    params: {id},
}: PostProps): Promise<Metadata> {
    const post = await getData(id)
    return {
        title: post.title
    }
}


const Post = async ({params: {id}} : PostProps) => {
    const post = await getData(id)
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            margin: 20
        }}>
            <h1>{post.id}</h1>
            <h1>{post.title}</h1>
            <h4>{post.body}</h4>
        </div>
    )
}

export default Post
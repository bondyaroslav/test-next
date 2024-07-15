'use client'

import Link from "next/link"
import {Post} from "@/types/Post"

const Posts = ({userId, id, title, body}: Post) => {

    return (
        <li key={id}>
            <Link href={`/blog/${id}`}>{title}</Link>
        </li>
    )
}

export default Posts
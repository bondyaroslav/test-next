'use client'

export default function ErrorWrapper({error}: {error: Error}) {
    return <div>shit happens {error.message}</div>
}
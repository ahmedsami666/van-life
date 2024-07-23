import React from "react"

const date = new Date()

export default function Footer() {
    return (
        <footer>&#169; {date.getFullYear()} #VANLIFE</footer>
    )
}
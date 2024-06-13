"use client"

import Link from "next/link"

export default function NotFound() {

  return (
    <div className="notFound">
      <div className="inner">
        <div className="notFound_content">
          <h1>Error 404</h1>
          <p>Sorry, the page that you’re looking for doesn’t exist.</p>
          <Link className="btn-home" href="/">Go back to Home</Link>
        </div>
      </div>
    </div>
  )
}
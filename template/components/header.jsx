import Link from "next/link"

export default function Header() {
  return (
    <nav className="navbar navbar-primary bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <a className="headerlink">
            ExamBoard
          </a>
        </Link>
      </div>
    </nav>
  )
}
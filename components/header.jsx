import Link from "next/link"

export default function Header() {
    return (
        <nav className="navbar navbar-primary bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <a className="headerlink"><img src="https://image.shutterstock.com/image-illustration/final-exam-word-on-white-260nw-359672627.jpg" alt="" width="75" height="50" className="d-inline-block align-text-top me-2"/>
            Exam
            </a>
          </Link>
        </div>
      </nav>
    )
  }
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://image.shutterstock.com/image-illustration/final-exam-word-on-white-260nw-359672627.jpg" alt="" width="100" height="80" className="d-inline-block align-text-top"/>
            ExamBoard
          </a>
        </div>
      </nav>
    )
  }
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Service
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="/service1">Service 1</Link></li>
                                <li><Link className="dropdown-item" href="/service2">Service 2</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="/MoreService">More Service</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center gap-2">
                        <Link href="/signup">
                            <button className="btn btn-outline-primary" type="button">Sign Up</button>
                        </Link>
                        <Link href="/signin">
                            <button className="btn btn-outline-success" type="button">Sign In</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

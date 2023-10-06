import PropTypes from "prop-types"

Navbar.propTypes = {
    setPage: PropTypes.func.isRequired,
}

function Navbar(props) {
    function setPage(route) {
        props.setPage(route)
    }

    return (
        <nav>
            <ul className="navbar">
                <li>
                    <a onClick={() => setPage("phonebook")} href="#">
                        Contacts
                    </a>
                </li>
                <li>
                    <a onClick={() => setPage("phoneinput")} href="#">
                        Add phone
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

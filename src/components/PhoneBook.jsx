import PropTypes from "prop-types"

PhoneBook.propTypes = {
    userArr: PropTypes.array.isRequired,
    setUserArr: PropTypes.func.isRequired,
}

function PhoneBook(props) {
    function deleteNumber(e, index) {
        props.setUserArr(
            props.userArr.filter((user) => user != props.userArr[index])
        )
    }

    return (
        <div>
            <table>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Phone number</th>
                    <th>Actions</th>
                </tr>
                {props.userArr.map((user, index) => (
                    <tr key={index}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.phone}</td>
                        <td className="button-wrapper">
                            {/* <button className="btn-green">edit</button> */}
                            <button
                                onClick={(e) => deleteNumber(e, index)}
                                className="btn-red"
                            >
                                delete
                            </button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default PhoneBook

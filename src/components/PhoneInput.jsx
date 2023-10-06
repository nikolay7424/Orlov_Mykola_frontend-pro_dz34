import PropTypes from "prop-types"

PhoneInput.propTypes = {
    userArr: PropTypes.array.isRequired,
    setUserArr: PropTypes.func.isRequired,
    setPage: PropTypes.func.isRequired,
}

function PhoneInput(props) {
    function saveUser(e) {
        e.preventDefault()
        props.setUserArr([
            ...props.userArr,
            {
                firstName: e.target[0].value,
                lastName: e.target[1].value,
                phone: e.target[2].value,
            },
        ])
        props.setPage("phonebook")
    }

    return (
        <div>
            <form onSubmit={(e) => saveUser(e)} className="phone-form">
                <div className="form-input">
                    <label htmlFor="name">type in your first name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="form-input">
                    <label htmlFor="lastname">type in your last name</label>
                    <input type="text" name="lastname" id="lastname" />
                </div>
                <div className="form-input">
                    <label htmlFor="phone">type in your phone</label>
                    <input type="text" name="phone" id="phone" />
                </div>
                <div className="button-wrapper">
                    <button type="submit" className="btn-green">
                        Save
                    </button>
                    <button
                        onClick={() => props.setPage("phonebook")}
                        className="btn-red"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PhoneInput

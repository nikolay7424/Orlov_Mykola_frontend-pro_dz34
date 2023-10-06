import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import PhoneBook from "./components/PhoneBook"
import PhoneInput from "./components/PhoneInput"

function App() {
    const [page, setPage] = useState("phonebook")
    const [userArr, setUserArr] = useState([
        {
            firstName: "John",
            lastName: "Doe",
            phone: "+380671234567",
        },
        {
            firstName: "Elizabeth",
            lastName: "Smith",
            phone: "+380501234567",
        },
    ])

    return (
        <div className="container">
            <Navbar setPage={setPage} />
            <div className="content-wrapper">
                {page == "phonebook" ? (
                    <PhoneBook userArr={userArr} setUserArr={setUserArr} />
                ) : (
                    <PhoneInput
                        setPage={setPage}
                        userArr={userArr}
                        setUserArr={setUserArr}
                    />
                )}
            </div>
        </div>
    )
}

export default App

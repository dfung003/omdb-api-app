import { useState } from "react";

export default function Form(props) {
    const [formData, setFormData] = useState({
        searchTerm: ""
    })

    const handleChange = (event) => {
        // the event on change happens, it will copy all values of current object and replace to event target name with whatever you type into the search
        // [] allow dynamic object
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        props.moviesearch(formData.searchTerm)
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="searchTerm"
                    onChange={handleChange}
                    value={formData.searchTerm}
                />
                <input type="submit" value="ACTION!" />
            </form>
        </div>
    )
}
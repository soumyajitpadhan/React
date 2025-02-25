import React, { useState } from 'react'

interface FormData {
    name: string;
    email: string;
}


const FormContainer: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (!formData.name || !formData.email) {
            alert("Please fill out all fields!");
            return;
        }

        console.log("Name: ", formData.name);
        console.log("Email: ", formData.email);

        setFormData({ name: "", email: "" });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='name'
                    value={formData.name}
                    placeholder='Enter your name'
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name='email'
                    value={formData.email}
                    placeholder='Enter your email'
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormContainer

// React.ChangeEvent<HTMLInputElement>
// React.ChangeEvent -> Handles value changes in form elements (<input>, <textarea>, etc.)
// <HTMLInputElement> -> Specifies that the event is triggered by an <input> field

// React.MouseEvent<HTMLButtonElement>
// React.MouseEvent -> Handles mouse-related events (e.g., onClick, onMouseOver)
// <HTMLButtonElement> -> Specifies that the event is triggered by a <button>


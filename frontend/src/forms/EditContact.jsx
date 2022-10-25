import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function EditContact({ updateProduction }) {
    const [formData, setFormData] = useState({
        name: '',
        phone_number: '',
        address: ''
    })
    const [errors, setErrors] = useState([])
    const { id } = useParams()
    useEffect(() => {
        fetch(`/productions/${id}`)
            .then(res => res.json())
            .then(setFormData)
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }


    function onSubmit(e) {
        e.preventDefault()
        fetch(`/contacts/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(updateProduction)
                } else {
                    //Display errors
                    res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
                }
            })
    }
    return (
        <div className='App'>
            {errors ? errors.map(e => <div>{e}</div>) : null}
            <form onSubmit={onSubmit}>
                <label>name </label>
                <input type='text' name='name' value={formData.name} onChange={handleChange} />

                <label> phone</label>
                <input type='text' name='phone' value={formData.phone_number} onChange={handleChange} />

                <label>address</label>
                <input type='number' name='address' value={formData.address} onChange={handleChange} />
            </form>
            {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
        </div>
    )
}

export default EditContact
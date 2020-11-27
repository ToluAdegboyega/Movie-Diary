import React, { useState } from 'react';

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', date: '',    review: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.date  || user.review  ) return

				props.addUser(user)
				setUser(initialFormState)
            }}
            autoComplete="off"
		>
            <div className="form-group input-group">
                <input className="form-control" name="name" placeholder="Movie Title"
                    value={user.name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group input-group">
                <input className="form-control" name="date" placeholder="Year  Released"
                    value={user.date}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group input-group">
                <textarea className="form-control" name="review" placeholder="Leave A Review"
                    value={user.review}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-primary btn-block"  value="Add Movie"  />
            </div>
		</form>
	)
}

export default AddUserForm

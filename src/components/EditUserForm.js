import React, { useState, useEffect } from 'react';

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
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
            <input type="submit" className="btn btn-primary btn-block"  value="Update Movie"  />
        </div>
        <div className="form-group">
            <input type="submit" className="btn btn-primary btn-block"  value="Cancel" onClick={() => props.setEditing(false)} />
        </div>
    </form>
  )
}

export default EditUserForm
import React, { useState, useEffect } from 'react';

const MovieForm = (props) => {
    const initialFieldValues = {
        fullName: '',
        date:   '',
        review: ''
    }

    var [values, setValues] = useState(initialFieldValues);


    useEffect(() => {
        if (props.currentId === '')
            setValues({ ...initialFieldValues })
        else
            setValues({
                ...props.movieObjects[props.currentId]
            })
    }, [props.currentId, props.movieObjects])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        props.addOrEdit(values);
    }

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <input className="form-control" name="fullName" placeholder="Movie Name"
                    value={values.fullName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group input-group">
                <input className="form-control" name="date" placeholder="Year Released"
                    value={values.date}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
               <textarea className="form-control" name="review" placeholder="Leave A Review"
                    value={values.review}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input type="submit" value={props.currentId === "" ? "Add  Movie" : "Update"} className="btn btn-primary btn-block" />
            </div>
        </form>
    );
}

export default MovieForm;
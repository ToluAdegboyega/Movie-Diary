import React, { useState, useEffect } from 'react';
import MovieForm from "./MovieForm";
import firebaseDb from "../firebase";
import  '../assets/Movies.css';

const Movies = () => {

	var [currentId, setCurrentId] = useState('');
    var [movieObjects, setMovieObjects] = useState({})

    //Once components load complete
    useEffect(() => {
        firebaseDb.child('movies').on('value', snapshot => {
            if (snapshot.val() != null) {
                setMovieObjects({
                    ...snapshot.val()
                });
            }
        })
    }, [])

    const addOrEdit = (obj) => {
        if (currentId === '')
            firebaseDb.child('movies').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
             })
        else
            firebaseDb.child(`movies/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
            })
    }
    
    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?')) {
            firebaseDb.child(`movies/${id}`).remove(
                err => {
                if (err)
                    console.log(err)
                else
                    setCurrentId('')
            })
        }
    }


  return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Movie Database</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <MovieForm {...({ currentId, movieObjects, addOrEdit})} ></MovieForm>
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Name</th>
                                <th>Year Released</th>
                                <th>Review</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(movieObjects).map((key) => (
                                    <tr key={key} className="table-row" >
                                        <td>{movieObjects[key].fullName}</td>
                                        <td>{movieObjects[key].date}</td>
                                        <td>{movieObjects[key].review}</td>
                                        <td >
                                            <a className="btn text-primary" onClick={() => { setCurrentId(key) }}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn text-danger" onClick={() => { onDelete(key) }}>
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Movies;
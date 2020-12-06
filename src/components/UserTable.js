import React from 'react';
import  '../assets/UserTable.css';

const UserTable = props => (
  <div className="card-wrap">
      {props.users.length > 0 ? (
        props.users.map(user => (
          <div key={user.id}  className="movie-card">
            <p className="card-name" >{user.name}</p>
            <p className="card-date" >Date Watched: {user.date}</p>
            <p className="card-review" >{user.review}</p>
            <div className="edit-delete" >
              <a
                onClick={() => {
                  props.editRow(user)
                }}
                className="btn text-primary"
              >
                <i className="fas fa-pencil-alt"></i>
              </a>
              <a
                onClick={() => props.deleteUser(user.id)}
                className="btn text-danger"
              >
               <i className="far fa-trash-alt"></i>
              </a>
            </div>
          </div>
        ))
      ) : (
        <div  className="no-movie-card">No movies</div>
      )}
  </div>
)

export default UserTable;
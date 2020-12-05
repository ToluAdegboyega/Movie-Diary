import React from 'react';
import  '../assets/UserTable.css';

const UserTable = props => (
  <table    className="table table-borderless table-stripped">
    <thead  className="thead-light">
      <tr>
        <th>Movie Title</th>
        <th>Date Watched</th>
        <th> Review</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id} className="table-row">
            <td>{user.name}</td>
            <td>{user.date}</td>
            <td>{user.review}</td>
            <td>
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
            </td>
          </tr>
        ))
      ) : (
        <tr className="table-row">
          <td colSpan={3}>No movies</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable;
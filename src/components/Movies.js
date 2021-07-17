import React, { useState, Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import UserTable from "./UserTable";
import Button from "@material-ui/core/Button";

import firebaseConfig from "../firebase";
import "../assets/Movies.css";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    textAlign: "center",
    marginBottom: "50px",
    background:
      "linear-gradient( 90deg, rgba(255, 118, 20, 1) 0%,  rgba(255, 84, 17, 1) 100% )",
    padding: "16px",
    borderRadius: "5px",
    marginLeft: "20px",
    fontFamily: "Comfortaa",
    marginTop: 50,
  },
}));

const Movies = () => {
  const classes = useStyles();

  // Data
  const usersData = [
    {
      id: 1,
      name: "Rush Hour",
      date: "1998-03-19",
      review:
        "A vindication of what some of us have always known: that Jackie is a screen legend.",
    },
    {
      id: 2,
      name: "La La Land",
      date: "2016-09-23",
      review: "It is joyful. It leaps off the screen.",
    },
    {
      id: 3,
      name: "Selma",
      date: "2014-11-05",
      review: `Selma is worthy of my highest recommendation. Hopefully like me, you'll clap once the end credits roll.`,
    },
  ];

  const initialFormState = { id: null, name: "", date: "", review: "" };

  // Setting state
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      name: user.name,
      date: user.date,
      review: user.review,
    });
  };

  //save session

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      setUsers(users);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div className="container">
      <Button
        onClick={() => firebaseConfig.auth().signOut()}
        className={classes.button}
      >
        Logout
      </Button>

      <div className="movie-wrap">
        <div className="edit-table">
          {editing ? (
            <Fragment>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </div>
        <div>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default Movies;

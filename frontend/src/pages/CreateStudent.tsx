import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { database } from "../services/firebase";

import toast, { Toaster } from "react-hot-toast";

import "../styles/create-student.css";

function CreateStudent() {
  interface IStudent {
    name: string;
    email: string;
    room: number;
    teacher: string;
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState(0);
  const [teacher, setTeacher] = useState("");

  const studentsCollectionRef = collection(database, "students");

  const handleCreate = async () => {
    const newStudent: IStudent = {
      name,
      email,
      room,
      teacher,
    };

    await addDoc(studentsCollectionRef, newStudent);

    toast.success("Student created successfully", {
      style: {
        fontSize: "clamp(1rem, 2.5vw, 1.8rem)",
      },
    });
  };

  return (
    <div className="create-student">
      <Toaster />

      <h1>Add new student</h1>

      <div>
        <label htmlFor="name">
          Name
          <br />
          <input
            type="text"
            value={name}
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email
          <br />
          <input
            type="email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label htmlFor="room">
          Room <br />
          <input
            type="number"
            value={room}
            id="room"
            onChange={(e) => setRoom(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label htmlFor="teacher">
          Teacher <br />
          <input
            type="text"
            value={teacher}
            id="teacher"
            onChange={(e) => setTeacher(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
}

export default CreateStudent;

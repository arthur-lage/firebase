import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { database } from "../services/firebase";

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

    await addDoc(studentsCollectionRef, newStudent)
  };

  return (
    <div className="create-student">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        value={room}
        onChange={(e) => setRoom(Number(e.target.value))}
      />
      <input
        type="text"
        value={teacher}
        onChange={(e) => setTeacher(e.target.value)}
      />

      <button onClick={handleCreate}>Create</button>
    </div>
  );
}

export default CreateStudent;

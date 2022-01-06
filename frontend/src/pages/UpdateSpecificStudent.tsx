import {
  updateDoc,
  collection,
  doc,
  addDoc,
  getDocs,
  getDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../services/firebase";

import "../styles/update-specific-student.css";

import toast, { Toaster } from "react-hot-toast";

function UpdateSpecificStudent() {
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

  const { id }: any = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const studentDoc = doc(database, "students", id);

      const studentInfo = await getDoc(studentDoc);

      setName(studentInfo.data()?.name);
      setEmail(studentInfo.data()?.email);
      setRoom(studentInfo.data()?.room);
      setTeacher(studentInfo.data()?.teacher);
    };

    fetchData();
  }, []);

  const handleUpdate = async () => {
    if (name.length === 0 || email.length === 0 || teacher.length === 0) {
      toast.error("Fields can't be empty", {
        style: {
          fontSize: "clamp(1rem, 2.5vw, 1.8rem)",
        },
      });
      return;
    }

    const studentDoc = doc(database, "students", id);

    await updateDoc(studentDoc, {
      name,
      email,
      room,
      teacher,
    });

    toast.success("Student updated successfully", {
      style: {
        fontSize: "clamp(1rem, 2.5vw, 1.8rem)",
      },
    });
  };

  return (
    <div className="update-specific-student">
      <Toaster />

      <h1>Update student</h1>

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
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UpdateSpecificStudent;

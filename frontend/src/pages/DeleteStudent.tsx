import React, { useState, useEffect } from "react";

import { database } from "../services/firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

import "../styles/delete-student.css";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function DeleteStudent() {
  interface IStudent {
    id: string;
    name: string;
    email: string;
    room: number;
    teacher: string;
  }

  const [students, setStudents] = useState<IStudent[]>([]);
  const studentsCollectionRef = collection(database, "students");

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const data = await getDocs(studentsCollectionRef);

      const studentsArr = data.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        email: doc.data().email,
        room: doc.data().room,
        teacher: doc.data().teacher,
      }));

      setStudents(studentsArr);
    }

    fetchData();

    // eslint-disable-next-line
  }, []);

  const deleteStudent = async (id: string) => {
    const studentDoc = doc(database, "students", id);

    await deleteDoc(studentDoc);

    toast.success("Student deleted successfully", {
      style: { fontSize: "clamp(1rem, 2.5vw, 1.8rem)" },
    });

    navigate(0);
  };

  return (
    <div className="delete-students">
      <Toaster />

      <h1>Delete</h1>
      {students.length > 0 ? (
        <div className="students-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Room</th>
                <th>Teacher</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, key) => (
                <tr key={key}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.room}</td>
                  <td>{student.teacher}</td>
                  <td>
                    <button
                      className="delete"
                      onClick={() => deleteStudent(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h3>No users found</h3>
      )}
    </div>
  );
}

export default DeleteStudent;

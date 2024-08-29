import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt, FaEdit, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../common/Search";

const StudentsView = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);
  const loadStudents = async () => {
    const result = await axios.get("http://localhost:9192/students", {
      validateStatus: () => {
        return true;
      },
    });
    if (result.status === 302) {
      setStudents(result.data);
    }
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:9192/students/delete/${id}`);
    loadStudents();
  };

  return (
    <section>
      <Search search={search} setSearch={setSearch} />
      <table className="table table-bordered table-hover shadow">
        <thead className="text-bg-primary">
          <tr className="text-center   ">
            <th>Id</th>
            <th>Nome</th>
            <th>Sobre Nome</th>
            <th>Email</th>
            <th>Departamento</th>
            <th colSpan={3}>acções</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {students
            .filter((st) => st.firstName.toLowerCase().includes(search))
            .map((student, index) => (
              <tr key={student.id}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>

                <td>{student.email}</td>

                <td>{student.department}</td>

                <td className="mx-2">
                  <Link
                    to={`/view-students/${student.id}`}
                    className="btn btn-info"
                  >
                    <FaEye />
                  </Link>
                </td>
                <td className="mx-2">
                  <Link
                    to={`/edit-students/${student.id}`}
                    className="btn btn-warning"
                  >
                    <FaEdit />
                  </Link>
                </td>
                <td className="mx-2">
                  <button
                    className="btn btn-danger"
                    onClick={(e) => handleDelete(student.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default StudentsView;

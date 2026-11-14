import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoModal from "./components/TodoModal";
import "./App.css";

const initialTodos = [
  {
    id: 1,
    title: "Project Lab Pemweb",
    description: "Menyelesaikan pembuatan website rumah karsa",
    priority: "Medium",
    deadline: "2026-11-30",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Persiapan UTS Lab Struktur Data",
    description: "Mengulang materi pertemuan 1-4",
    priority: "High",
    deadline: "2026-11-17",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Quiz Lab Struktur Data",
    description: "Mengerjakan soal 1-4, dan buat video penjelasan code",
    priority: "High",
    deadline: "2026-11-14",
    status: "Done",
  },
  {
    id: 4,
    title: "Tugas kelompok KCB",
    description: "Implementasi ANFIS dengan Python",
    priority: "Medium",
    deadline: "2026-11-21",
    status: "To Do",
  },
  {
    id: 5,
    title: "Tugas kelompok MKWU (Extensive Reading)",
    description: "Membuat ppt dan analisis artikel yang diberikan",
    priority: "Low",
    deadline: "2026-11-23",
    status: "To Do",
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [modalType, setModalType] = useState(null);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleClose = () => {
    setModalType(null);
    setSelectedTodo(null);
  };

  const handleCreate = (data) => {
    setTodos([...todos, { ...data, id: Date.now() }]);
    handleClose();
  };

  const handleUpdate = (data) => {
    setTodos(todos.map((todo) =>
      todo.id === selectedTodo.id ? { ...data, id: todo.id } : todo
    ));
    handleClose();
  };

  const handleDelete = (id) => {
    if (window.confirm("Apakah yakin ingin menghapus tugas ini?")) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div className="app-container">
      <header className="page-header">
        <h1>Todo List 📝</h1>
        <button className="btn-primary" onClick={() => setModalType("add")}>
          + Tambah Tugas
        </button>
      </header>

      <TodoList
        todos={todos}
        onDetail={(todo) => {
          setSelectedTodo(todo);
          setModalType("detail");
        }}
        onDelete={handleDelete}
      />

      {modalType && (
        <TodoModal
          type={modalType}
          todo={selectedTodo}
          onClose={handleClose}
          onEdit={() => setModalType("edit")}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}

export default App;
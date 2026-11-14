function TodoList({ todos, onDetail, onDelete }) {
  const formatDeadline = (date) => {
    if (!date) return "-";
    const [year, month, day] = date.split("-");
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Judul</th>
            <th>Status</th>
            <th>Prioritas</th>
            <th>Deadline</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <tr key={todo.id}>
                <td className="title-cell">{todo.title}</td>
                <td>
                  <span className={`status-text ${todo.status.toLowerCase().replace(" ", "-")}`}>
                    {todo.status}
                  </span>
                </td>
                <td>
                  <span className={`priority-text ${todo.priority.toLowerCase()}`}>
                    {todo.priority}
                  </span>
                </td>
                <td>{formatDeadline(todo.deadline)}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn detail-btn" onClick={() => onDetail(todo)}>
                      Detail
                    </button>
                    <button className="action-btn delete-btn" onClick={() => onDelete(todo.id)}>
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="empty-message">
                <div className="empty-state">
                  <strong>Belum ada tugas</strong>
                  <p>Tambahkan tugas baru untuk mulai mengatur aktivitasmu.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
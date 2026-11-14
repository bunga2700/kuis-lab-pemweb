import TodoForm from "./TodoForm";

function TodoModal({ type, todo, onClose, onEdit, onCreate, onUpdate }) {
  const isDetail = type === "detail";
  const isEdit = type === "edit";

  const handleSubmit = (data) => {
    isEdit ? onUpdate(data) : onCreate(data);
  };

  const formatDeadline = (date) => {
    if (!date) return "-";
    const [year, month, day] = date.split("-");
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content ${isDetail ? "detail-modal" : "form-modal"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-heading">
          <h2>
            {isDetail ? "Detail Tugas" : isEdit ? "Update Tugas" : "Tambah Tugas"}
          </h2>
        </div>

        {isDetail ? (
          <div className="detail-content">
            <div className="detail-title-box">
              <span className="detail-label">Judul Tugas</span>
              <h3>{todo.title}</h3>
            </div>

            <div className="detail-description">
              <span className="detail-label">Deskripsi</span>
              <p>{todo.description || "Tidak ada deskripsi."}</p>
            </div>

            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Status</span>
                <strong>{todo.status}</strong>
              </div>
              <div className="detail-item">
                <span className="detail-label">Prioritas</span>
                <strong>{todo.priority}</strong>
              </div>
              <div className="detail-item detail-deadline">
                <span className="detail-label">Deadline</span>
                <strong>{formatDeadline(todo.deadline)}</strong>
              </div>
            </div>

            <div className="modal-actions detail-actions">
              <button className="btn-modal-back" onClick={onClose}>
                Kembali
              </button>
              <button className="btn-modal-update" onClick={onEdit}>
                Update
              </button>
            </div>
          </div>
        ) : (
          <TodoForm
            initialData={todo}
            isEdit={isEdit}
            onSubmit={handleSubmit}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
}

export default TodoModal;
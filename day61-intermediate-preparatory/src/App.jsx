import { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:3001/products";

const emptyForm = { title: "", price: "", inStock: false };

function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    // Task 1: Get All the Products from Given API
    axios.get(API).then((res) => setProducts(res.data));
  }, []);

  const handleSubmit = async () => {
    if (!form.title || !form.price) return alert("Title and price are required");
    const payload = { ...form, price: parseFloat(form.price) };
    if (editId) {
      const res = await axios.put(`${API}/${editId}`, payload);
      setProducts(products.map((p) => (p.id === editId ? res.data : p)));
      setEditId(null);
    } else {
      const res = await axios.post(API, payload);
      setProducts([...products, res.data]);
    }
    setForm(emptyForm);
  };

// Task 2: handleEdit Function to update the existing data
const handleEdit = (product) => {
  setEditId(product.id);
  setForm({title: product.title, price: product.price, inStock: product.inStock});
}

// Task 3: Delete Function to remove the data from db.json
const handleDelete = async (id) => {
  await axios.delete(`${API}/${id}`);
  setProducts(products.filter((data) => data.id !== id));
}


  const handleCancel = () => {
    setEditId(null);
    setForm(emptyForm);
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Segoe UI', sans-serif; background: #f4f5f7; color: #1a1a2e; }
        .container { max-width: 720px; margin: 40px auto; padding: 0 16px; }
        h1 { font-size: 1.8rem; font-weight: 700; margin-bottom: 24px; letter-spacing: -0.5px; }

        .form-card {
          background: #fff;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 28px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.07);
        }
        .form-card h2 { font-size: 1rem; font-weight: 600; margin-bottom: 14px; color: #555; text-transform: uppercase; letter-spacing: 0.5px; }
        .form-row { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
        .form-row input[type="text"],
        .form-row input[type="number"] {
          flex: 1;
          min-width: 140px;
          padding: 9px 12px;
          border: 1.5px solid #ddd;
          border-radius: 7px;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-row input:focus { border-color: #4f46e5; }
        .check-label { display: flex; align-items: center; gap: 6px; font-size: 0.9rem; cursor: pointer; white-space: nowrap; }
        .check-label input { width: 16px; height: 16px; cursor: pointer; accent-color: #4f46e5; }
        .btn { padding: 9px 18px; border: none; border-radius: 7px; font-size: 0.88rem; font-weight: 600; cursor: pointer; transition: opacity 0.15s; }
        .btn:hover { opacity: 0.85; }
        .btn-primary { background: #4f46e5; color: #fff; }
        .btn-ghost { background: #eee; color: #555; }

        table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.07); }
        thead { background: #4f46e5; color: #fff; }
        th, td { padding: 12px 16px; text-align: left; font-size: 0.88rem; }
        th { font-weight: 600; text-transform: uppercase; letter-spacing: 0.4px; font-size: 0.78rem; }
        tbody tr { border-bottom: 1px solid #f0f0f0; transition: background 0.12s; }
        tbody tr:hover { background: #fafafa; }
        tbody tr:last-child { border-bottom: none; }
        .badge { display: inline-block; padding: 2px 10px; border-radius: 99px; font-size: 0.78rem; font-weight: 600; }
        .badge-yes { background: #d1fae5; color: #065f46; }
        .badge-no  { background: #fee2e2; color: #991b1b; }
        .action-btns { display: flex; gap: 8px; }
        .btn-sm { padding: 5px 12px; font-size: 0.8rem; border-radius: 6px; }
        .btn-edit { background: #e0e7ff; color: #3730a3; }
        .btn-del  { background: #fee2e2; color: #b91c1c; }
        .empty { text-align: center; padding: 32px; color: #aaa; font-size: 0.9rem; }
      `}</style>

      <div className="container">
        <h1>📦 Products</h1>

        <div className="form-card">
          <h2>{editId ? "Edit Product" : "Add Product"}</h2>
          <div className="form-row">
            <input
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <input
              type="number"
              placeholder="Price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />
            <label className="check-label">
              <input
                type="checkbox"
                checked={form.inStock}
                onChange={(e) => setForm({ ...form, inStock: e.target.checked })}
              />
              In Stock
            </label>
            <button className="btn btn-primary" onClick={handleSubmit}>
              {editId ? "Update" : "Add"}
            </button>
            {editId && (
              <button className="btn btn-ghost" onClick={handleCancel}>
                Cancel
              </button>
            )}
          </div>
        </div>

        {products.length === 0 ? (
          <div className="empty">No products yet. Add one above!</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Price</th>
                <th>In Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.id}>
                  <td>{i + 1}</td>
                  <td>{p.title}</td>
                  <td>${Number(p.price).toFixed(2)}</td>
                  <td>
                    <span className={`badge ${p.inStock ? "badge-yes" : "badge-no"}`}>
                      {p.inStock ? "Yes" : "No"}
                    </span>
                  </td>
                  <td>
                    <div className="action-btns">
                      <button className="btn btn-sm btn-edit" onClick={() => handleEdit(p)}>Edit</button>
                      <button className="btn btn-sm btn-del" onClick={() => handleDelete(p.id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default App;
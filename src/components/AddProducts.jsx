import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("Laptops"); // Default
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("product_name", name);
    formData.append("product_cost", cost);
    // WE ADD THE CATEGORY TAG TO THE DESCRIPTION AUTOMATICALLY
    formData.append("product_description", `[${category}] ${desc}`);
    formData.append("product_photo", file);

    try {
      await axios.post("https://agnes.alwaysdata.net/api/addproduct", formData);
      alert("Product Added to " + category);
      navigate('/products');
    } catch (err) {
      alert("Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5 mt-5">
      <div className="card shadow-sm p-4 mx-auto" style={{maxWidth: '500px'}}>
        <h3 className="fw-bold mb-4 text-center">Upload New Product</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Select Category</label>
            <select className="form-select" value={category} onChange={e => setCategory(e.target.value)}>
              <option value="Laptops">Laptops</option>
              <option value="Phones">Phones</option>
              <option value="Tablets">Tablets</option>
              <option value="Gaming">Gaming</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
          <input type="text" className="form-control mb-3" placeholder="Name" onChange={e => setName(e.target.value)} required />
          <input type="number" className="form-control mb-3" placeholder="Cost" onChange={e => setCost(e.target.value)} required />
          <textarea className="form-control mb-3" placeholder="Description" onChange={e => setDesc(e.target.value)} required />
          <input type="file" className="form-control mb-3" onChange={e => setFile(e.target.files[0])} required />
          <button type="submit" className="btn btn-primary w-100 fw-bold" disabled={loading}>
            {loading ? "Uploading..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
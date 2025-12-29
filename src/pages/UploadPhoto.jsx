// UploadPhoto.jsx
import { useState, useRef } from "react";
import { X } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import "./UploadPhoto.css";

export default function UploadPhoto({ onClose, currentUser }) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [customCountry, setCustomCountry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [customCategory, setCustomCategory] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file?.type.startsWith("image/")) return toast.error("Select a valid image");
    setImageFile(file);
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!imageFile) return toast.error("Select an image");
    if (!currentUser) return toast.error("User not logged in");

    const country = selectedCountry === "other" ? customCountry : selectedCountry;
    const category = selectedCategory === "other" ? customCategory : selectedCategory;

    if (!country || !category) return toast.error("Country and category are required");

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("country", country);
    formData.append("category", category);
    formData.append("uploadedBy", currentUser.id);
    formData.append("uploaderName", currentUser.username);

    try {
      setLoading(true);
      const res = await axios.post(`${API_URL}/api/photos/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(res.data.message || "Photo uploaded successfully!");
      resetForm();
      onClose();
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSelectedCountry("");
    setCustomCountry("");
    setSelectedCategory("");
    setCustomCategory("");
    setImageFile(null);
    setImagePreview("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-header">
          <h2>Upload Photo</h2>
          <button onClick={onClose}><X /></button>
        </div>
        <div className="dialog-body">
          <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} />
          {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}

          <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
            <option value="">Select country</option>
            <option value="Pakistan">Pakistan</option>
            <option value="China">China</option>
            <option value="Japan">Japan</option>
            <option value="France">France</option>
            <option value="Turkey">Turkey</option>
            <option value="other">Other</option>
          </select>
          {selectedCountry === "other" && (
            <input placeholder="Custom country" value={customCountry} onChange={(e) => setCustomCountry(e.target.value)} />
          )}

          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Select category</option>
            <option value="General">General</option>
            <option value="Nature">Nature</option>
            <option value="Sky">Sky</option>
            <option value="Place">Place</option>
            <option value="other">Other</option>
          </select>
          {selectedCategory === "other" && (
            <input placeholder="Custom category" value={customCategory} onChange={(e) => setCustomCategory(e.target.value)} />
          )}
        </div>
        <div className="dialog-footer">
          <button onClick={onClose} disabled={loading}>Cancel</button>
          <button onClick={handleUpload} disabled={loading}>
            {loading ? "Uploading..." : "Upload Photo"}
          </button>
        </div>
      </div>
    </div>
  );
}

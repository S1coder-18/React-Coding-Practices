import { useState } from "react";
import "./FormValidator.css";
function FormValidator() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  function Validite() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Validite()) {
      alert("Form Submitted Successfully!.");

      setFormData({ name: "", email: "", password: "" });
      setErrors({});
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="Form-Validator">
          <h2>Form-Validator</h2>
          <div className="Name-Validator">
            <label>Name:</label>
            <input
              type="text"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="Email-Validator">
            <label>Email:</label>
            <input
              type="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label>password:</label>
            <input
              type="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button>submit</button>
        </div>
      </form>
    </>
  );
}

export default FormValidator;

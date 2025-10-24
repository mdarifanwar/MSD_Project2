import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../Common/LoadingSpinner";

const AddProperty = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'apartment',
    price: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    location: '',
    address: '',
    features: [],
    images: []
  });

  const propertyFeatures = [
    'Parking', 'Swimming Pool', 'Garden', 'Security', 'Gym',
    'Balcony', 'Furnished', 'Pet Friendly', 'Air Conditioning'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFeatureToggle = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    // In real app, you would upload to cloud storage
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...files.slice(0, 5)] // Limit to 5 images
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert('Property added successfully! Awaiting approval.');
      navigate('/retailer/dashboard');
    }, 2000);
  };

  if (loading) {
    return <LoadingSpinner text="Adding Property..." />;
  }

  return (
    <div className="add-property-page">
      <div className="container">
        <div className="page-header">
          <h1>Add New Property</h1>
          <p>List your property to reach thousands of potential buyers</p>
        </div>

        <form onSubmit={handleSubmit} className="property-form">
          {/* Basic Information */}
          <div className="form-section">
            <h3>Basic Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Property Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Luxury 3-Bedroom Apartment"
                  required
                />
              </div>

              <div className="form-group">
                <label>Property Type *</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="house">House</option>
                  <option value="studio">Studio</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>

              <div className="form-group">
                <label>Price ($) *</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="500000"
                  required
                />
              </div>

              <div className="form-group">
                <label>Area (sq ft) *</label>
                <input
                  type="number"
                  name="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  placeholder="1800"
                  required
                />
              </div>

              <div className="form-group">
                <label>Bedrooms *</label>
                <input
                  type="number"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleInputChange}
                  placeholder="3"
                  required
                />
              </div>

              <div className="form-group">
                <label>Bathrooms *</label>
                <input
                  type="number"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleInputChange}
                  placeholder="2"
                  required
                />
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="form-section">
            <h3>Location Details</h3>
            <div className="form-grid">
              <div className="form-group full-width">
                <label>Full Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter complete address"
                  required
                />
              </div>

              <div className="form-group full-width">
                <label>Location/Area *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g., Downtown, Suburb"
                  required
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="form-section">
            <h3>Description</h3>
            <div className="form-group full-width">
              <label>Property Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe your property in detail..."
                rows="5"
                required
              ></textarea>
            </div>
          </div>

          {/* Features */}
          <div className="form-section">
            <h3>Features & Amenities</h3>
            <div className="features-grid">
              {propertyFeatures.map(feature => (
                <label key={feature} className="feature-checkbox">
                  <input
                    type="checkbox"
                    checked={formData.features.includes(feature)}
                    onChange={() => handleFeatureToggle(feature)}
                  />
                  <span className="checkmark"></span>
                  {feature}
                </label>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="form-section">
            <h3>Property Images</h3>
            <div className="image-upload-section">
              <div className="upload-area">
                <i className="fas fa-cloud-upload-alt"></i>
                <p>Drag & drop images here or click to browse</p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="file-input"
                />
                <small>Maximum 5 images. Supported formats: JPG, PNG</small>
              </div>
              
              {formData.images.length > 0 && (
                <div className="uploaded-images">
                  <h4>Uploaded Images ({formData.images.length}/5)</h4>
                  <div className="images-preview">
                    {formData.images.map((image, index) => (
                      <div key={index} className="image-preview">
                        <img src={URL.createObjectURL(image)} alt={`Preview ${index}`} />
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({
                            ...prev,
                            images: prev.images.filter((_, i) => i !== index)
                          }))}
                          className="remove-image"
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="form-actions">
            <button type="button" className="btn-secondary" onClick={() => navigate('/retailer/dashboard')}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              <i className="fas fa-plus"></i>
              Add Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
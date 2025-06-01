import React, { useState } from 'react';

function DashboardForm() {
  const [formData, setFormData] = useState({
    dropdown1: '',
    dropdown2: '',
    dropdown3: '',
    dropdown4: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
   // <h1>Nothing to add yet</h1>
   <h1> Nothing to add yet </h1>
  );
}

export default DashboardForm;

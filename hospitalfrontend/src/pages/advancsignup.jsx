import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    hospitalName: '',
    email: '',
    address: '',
    phoneNumber: '',
    username: '',
    password: '',
    logo: null,
  });

  const [emailError, setEmailError] = useState('');
  const [passwordErrors, setPasswordErrors] = useState({
    uppercase: false,
    lowercase: false,
    number: false,
    specialCharacter: false,
    length: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'email') {
      // Email format validation
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!emailRegex.test(value)) {
        setEmailError('Invalid email format');
      } else {
        setEmailError('');
      }
    }

    if (name === 'password') {
      // Password strength validation
      const uppercaseRegex = /[A-Z]/;
      const lowercaseRegex = /[a-z]/;
      const numberRegex = /[0-9]/;
      const specialCharacterRegex = /[@$!%*?&]/;

      setPasswordErrors({
        uppercase: uppercaseRegex.test(value),
        lowercase: lowercaseRegex.test(value),
        number: numberRegex.test(value),
        specialCharacter: specialCharacterRegex.test(value),
        length: value.length >= 8,
      });
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      logo: file,
    });
  };

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-00">
      <h2 className="text-3xl font-semibold text-blue-500 text-center my-7 text">
        HOSPITAL REGISTRATION
        </h2>
      <div className="w-full max-w-md bg-white  rounded-lg shadow-md p-8">
        

        <div className="mb-4">
          <label className="text-blue-500">Hospital Name</label>
          <input
            type="text"
            name="hospitalName"
            value={formData.hospitalName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="text-blue-500">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
        </div>

        <div className="mb-4">
          <label className="text-blue-500">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="text-blue-500">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="text-blue-500  " id='username' >Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="text-blue-500"id='Password'>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <div className="mt-2 space-x-2">
            <p
              className={`text-${
                passwordErrors.uppercase ? 'green' : 'red'
              }-500`}
            >
              {passwordErrors.uppercase
                ? '✓ Uppercase letter'
                : '✗ Uppercase letter'}
            </p>
            <p
              className={`text-${
                passwordErrors.lowercase ? 'green' : 'red'
              }-500`}
            >
              {passwordErrors.lowercase
                ? '✓ Lowercase letter'
                : '✗ Lowercase letter'}
            </p>
            <p
              className={`text-${
                passwordErrors.number ? 'green' : 'red'
              }-500`}
            >
              {passwordErrors.number ? '✓ Number' : '✗ Number'}
            </p>
            <p
              className={`text-${
                passwordErrors.specialCharacter ? 'green' : 'red'
              }-500`}
            >
              {passwordErrors.specialCharacter
                ? '✓ Special character'
                : '✗ Special character'}
            </p>
            <p
              className={`text-${
                passwordErrors.length ? 'green' : 'red'
              }-500`}
            >
              {passwordErrors.length ? '✓ Minimum 8 characters' : '✗ Minimum 8 characters'}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <label className="text-blue-500">Logo Upload</label>
          <input
            type="file"
            name="logo"
            accept=".jpg, .jpeg, .png"
            onChange={handleLogoUpload}
            className="w-full border rounded-lg p-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default RegistrationForm;

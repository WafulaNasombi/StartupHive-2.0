import React, { useState } from 'react';

function DeveloperProfile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [technologies, setTechnologies] = useState([]);
  const [profilePicture, setProfilePicture] = useState('');
  const [password, setPassword] = useState('');
  
  // Function to handle changes to the technologies field
  const handleTechnologiesChange = (event) => {
    const selectedTechnologies = Array.from(event.target.selectedOptions, option => option.value);
    setTechnologies(selectedTechnologies);
  };
  
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting form:', {
      firstName,
      lastName,
      age,
      email,
      phone,
      technologies,
      profilePicture,
      password,
    });
    // TODO: Save form data to server
  };
  
  return (
    <div>
      <h1>Create Developer Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
        </label>
        <label>
          Age:
          <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </label>
        <label>
          Technologies:
          <select multiple={true} value={technologies} onChange={handleTechnologiesChange}>
            <option value="JavaScript">JavaScript</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
          </select>
        </label>
        <label>
          Profile Picture:
          <input type="file" onChange={(event) => setProfilePicture(event.target.files[0])} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default DeveloperProfile;

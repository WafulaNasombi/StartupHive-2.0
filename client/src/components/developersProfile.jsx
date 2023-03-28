import React, { useState } from "react";

const DeveloperProfile = () => {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    bio: "",
  });

  const handleProfileDataChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProfilePictureChange = (e) => {
    // Handle profile picture update logic here
  };

  const handleProfileFormSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
  };

  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    techStack: "",
    fundingGoal: 0,
  });

  const handleProjectDataChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProjectFormSubmit = (e) => {
    e.preventDefault();
    // Handle project submission logic here
  };

  const [investorIdeas, setInvestorIdeas] = useState([]);

  const handleReviewInvestorIdeas = (e) => {
    e.preventDefault();
    // Handle review investor ideas logic here
  };

  const [portfolioData, setPortfolioData] = useState({
    title: "",
    description: "",
    techStack: "",
    link: "",
  });

  const handlePortfolioDataChange = (e) => {
    setPortfolioData({
      ...portfolioData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePortfolioFormSubmit = (e) => {
    e.preventDefault();
    // Handle portfolio submission logic here
  };

  const [stakeData, setStakeData] = useState({
    company: "",
    stake: 0,
    valuation: 0,
  });

  const handleStakeDataChange = (e) => {
    setStakeData({
      ...stakeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStakeFormSubmit = (e) => {
    e.preventDefault();
    // Handle stake offer submission logic here
  };

  return (
    <div>
      <h1>Developer Profile</h1>
      <h2>Edit Profile</h2>
      <form onSubmit={handleProfileFormSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" value={profileData.firstName} onChange={handleProfileDataChange} />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={profileData.lastName} onChange={handleProfileDataChange} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={profileData.email} onChange={handleProfileDataChange} />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" value={profileData.phone} onChange={handleProfileDataChange} />
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={profileData.address} onChange={handleProfileDataChange} />
        <label htmlFor="bio">Bio:</label>
        <textarea id="bio" name="bio" value={profileData.bio} onChange={handlePortfolioDataChange}/>
        </form>
        </div>
  );
}

export default DeveloperProfile;
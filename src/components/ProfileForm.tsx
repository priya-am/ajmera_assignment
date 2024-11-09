import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import apiService from '../services/apiService';
import { ProfileData } from '../types';
import './style.css'
const ProfileForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const existingProfile = location.state?.profile;

  const [profile, setProfile] = useState<ProfileData>({
    firstName: '',
    lastName: '',
    email: '',
    age: undefined,
  });

  useEffect(() => {
    if (existingProfile) {
      setProfile(existingProfile);
    }
  }, [existingProfile]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: name === 'age' ? (value ? parseInt(value) : undefined) : value,
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (existingProfile?.id) {
        await apiService.updateProfile(existingProfile.id, profile);
        alert('Profile updated successfully');
      } else {
        await apiService.saveProfile(profile);
        alert('Profile saved successfully');
      }
      navigate('/profile');
    } catch (error) {
      alert(existingProfile?.id ? 'Failed to update profile' : 'Failed to save profile');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="FormSubmit">
         <h2>Profile Form</h2>
      <div>
        <label htmlFor="firstName">FirstName : </label>
        <input
          type="text"
          name="firstName"
          value={profile.firstName}
          onChange={handleChange}
          required
          placeholder="First Name"
        />
      </div>
      <div>
      <label htmlFor="lastName" >LastName : </label>
        <input
          type="text"
          name="lastName"
          value={profile.lastName}
          onChange={handleChange}
          required
          placeholder="Last Name"
        />
      </div>
      <div>
      <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          required
          placeholder="Email"
        />
      </div>
      <div>
      <label htmlFor="age">Age : </label>
        <input
          type="number"
          name="age"
          value={profile.age ?? ''}
          onChange={handleChange}
          placeholder="Age (optional)"
        />
      </div>
      <button
        type="submit"
        className="buttonsave"
      >
        {existingProfile?.id ? 'Update Profile' : 'Save Profile'}
      </button>
    </form>
  );
};

export default ProfileForm;

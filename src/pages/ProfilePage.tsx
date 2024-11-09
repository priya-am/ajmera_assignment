import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/apiService';
import { ProfileData } from '../types';
import './ProfilePage.css';

const ProfilePage: React.FC = () => {
  const [profiles, setProfiles] = useState<ProfileData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = () => {
    apiService
      .fetchProfiles()
      .then((data) => {
        setProfiles(Array.isArray(data) ? data : [data]);
      })
      .catch((err) => {
        console.error('Error fetching profiles:', err);
        setError('Failed to load profiles');
      });
  };

  const handleEdit = (profile: ProfileData) => {
    navigate('/profile-form', { state: { profile } });
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this profile?')) {
      try {
        await apiService.deleteProfile(id);
        fetchProfiles(); // Refresh the list after deletion
      } catch (err) {
        console.error('Error deleting profile:', err);
        setError('Failed to delete profile');
      }
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!profiles.length) {
    return <div>No profile found. Please create one.</div>;
  }

  return (
    <div className="profile-page">
      <h2 className="profile-title">Your Profiles</h2>
      <div className="profile-grid">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-card">
            <p className="profile-field">Name: {profile.firstName} {profile.lastName}</p>
            <p className="profile-field">Email: {profile.email}</p>
            {profile.age && <p className="profile-field">Age: {profile.age}</p>}
            <div className="button-group">
              <button
                onClick={() => handleEdit(profile)}
                className="edit-button"
              >
                Edit
              </button>
              <button
                onClick={() => profile.id && handleDelete(profile.id)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;

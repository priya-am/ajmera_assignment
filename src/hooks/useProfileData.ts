import { useState, useEffect } from 'react';
import apiService from '../services/apiService';
import { ProfileData } from '../types';

export const useProfileData = () => {
  const [profile, setProfile] = useState<ProfileData | null>(null);

  useEffect(() => {
    apiService
      .fetchProfiles()
      .then((response) => {
        console.log('Fetched profile data:', response.data); // Debugging line
        const data: ProfileData = response.data;
        setProfile(data);
        localStorage.setItem('profile', JSON.stringify(data));
      })
      .catch((error) => {
        console.error('Error fetching profile:', error);
      });
  }, []);
   
  return profile;
};

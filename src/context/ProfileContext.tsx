import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  age?: number;
}

interface ProfileContextProps {
  profile: ProfileData | null;
  setProfile: (profile: ProfileData) => void;
}

const ProfileContext = createContext<ProfileContextProps | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<ProfileData | null>(null);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

import React, { createContext, useContext, useState, ReactNode } from "react";
import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome deve ter no máximo 100 caracteres"),
  phone: z.string().trim().min(1, "Telefone é obrigatório").max(20, "Telefone deve ter no máximo 20 caracteres"),
  city: z.string().trim().min(1, "Cidade é obrigatória").max(100, "Cidade deve ter no máximo 100 caracteres"),
  message: z.string().trim().min(1, "Mensagem é obrigatória").max(500, "Mensagem deve ter no máximo 500 caracteres"),
});

export type ProfileData = z.infer<typeof profileSchema>;

interface ProfileContextType {
  profileData: ProfileData;
  updateProfile: (data: ProfileData) => void;
  avatarUrl: string;
  updateAvatar: (url: string) => void;
}

const defaultProfile: ProfileData = {
  name: "Seu Nome",
  phone: "",
  city: "",
  message: ""
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profileData, setProfileData] = useState<ProfileData>(defaultProfile);
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  const updateProfile = (data: ProfileData) => {
    setProfileData(data);
  };

  const updateAvatar = (url: string) => {
    setAvatarUrl(url);
  };

  return (
    <ProfileContext.Provider value={{ profileData, updateProfile, avatarUrl, updateAvatar }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be used within ProfileProvider");
  return ctx;
};
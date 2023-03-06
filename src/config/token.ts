import { AUTH_TOKEN, IMAGE, NAME } from './constants';

export const setImage = (image: string) => localStorage.setItem(IMAGE, image);
export const deleteImage = () => localStorage.removeItem(IMAGE);
export const getImage = (): string | null => localStorage.getItem(IMAGE);

export const getToken = () => localStorage.getItem(AUTH_TOKEN);
export const setToken = (token: string) => localStorage.setItem(AUTH_TOKEN, token);
export const deleteToken = () => localStorage.removeItem(AUTH_TOKEN);
export const deleteName = () => localStorage.removeItem(NAME);
export const clearAllUserDataInformation = () => {
  deleteToken();
  deleteImage();
  deleteName();
};

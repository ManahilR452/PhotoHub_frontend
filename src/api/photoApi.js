import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Get all photos
export const getAllPhotos = async () => {
  try {
    const response = await api.get('/api/photos');
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
};

// Upload photo
export const uploadPhoto = async (formData) => {
  try {
    const response = await api.post('/api/photos/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading photo:', error);
    throw error;
  }
};

// Delete photo
export const deletePhoto = async (id) => {
  try {
    const response = await api.delete(`/api/photos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting photo:', error);
    throw error;
  }
};

// Like photo
export const likePhoto = async (photoId, userId) => {
  try {
    const response = await api.post(`/api/photos/${photoId}/like`, { userId });
    return response.data;
  } catch (error) {
    console.error('Error liking photo:', error);
    throw error;
  }}
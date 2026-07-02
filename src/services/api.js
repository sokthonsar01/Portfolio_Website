// Base URL for the backend API
// During production, this will use the AWS Elastic Beanstalk URL.
// During local development, it defaults to localhost:5001/api.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

export const fetchProjects = async () => {
  try {
    const response = await fetch(`${API_URL}/projects`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Backend fetch failed:", error);
    throw error;
  }
};

export const fetchProjectById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/projects/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching project ${id}:`, error);
    throw error;
  }
};

export const sendMessage = async (messageData) => {
  try {
    const response = await fetch(`${API_URL}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageData),
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to send message');
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

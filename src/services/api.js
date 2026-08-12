const rawApiUrl = import.meta.env.VITE_API_URL || 'https://psg-dit-backend.onrender.com/api';
const API_BASE = rawApiUrl.replace(/\/+$/, '');

async function request(endpoint, options = {}) {
  try {
    const token = localStorage.getItem('dit_admin_token');
    const customHeaders = options.headers || {};
    const headers = {
      'Content-Type': 'application/json',
      ...customHeaders
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    const url = `${API_BASE}${cleanEndpoint}`;

    const fetchOptions = {
      ...options,
      headers
    };

    const res = await fetch(url, fetchOptions);
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || err.error || `HTTP error ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.warn(`API Request failed for ${endpoint}:`, err.message);
    throw err;
  }
}

// 1. Stats
export const fetchStats = () => request('/stats');

// 2. Faculty
export const fetchFaculty = () => request('/faculty');
export const addFaculty = (data) => request('/faculty', { method: 'POST', body: JSON.stringify(data) });
export const updateFaculty = (id, data) => request(`/faculty/${id}`, { method: 'PUT', body: JSON.stringify(data) });
export const deleteFaculty = (id) => request(`/faculty/${id}`, { method: 'DELETE' });
export const setHod = (id) => request(`/faculty/${id}/hod`, { method: 'PUT' });

// 3. Subjects (No Syllabus)
export const fetchSubjects = () => request('/subjects');
export const addSubject = (data) => request('/subjects', { method: 'POST', body: JSON.stringify(data) });
export const updateSubject = (id, data) => request(`/subjects/${id}`, { method: 'PUT', body: JSON.stringify(data) });
export const deleteSubject = (id) => request(`/subjects/${id}`, { method: 'DELETE' });

// 4. Laboratories
export const fetchLaboratories = () => request('/laboratories');
export const addLaboratory = (data) => request('/laboratories', { method: 'POST', body: JSON.stringify(data) });
export const updateLaboratory = (id, data) => request(`/laboratories/${id}`, { method: 'PUT', body: JSON.stringify(data) });
export const deleteLaboratory = (id) => request(`/laboratories/${id}`, { method: 'DELETE' });

// 5. Projects
export const fetchProjects = () => request('/projects');
export const addProject = (data) => request('/projects', { method: 'POST', body: JSON.stringify(data) });
export const updateProject = (id, data) => request(`/projects/${id}`, { method: 'PUT', body: JSON.stringify(data) });
export const deleteProject = (id) => request(`/projects/${id}`, { method: 'DELETE' });

// 6. Achievements
export const fetchAchievements = () => request('/achievements');
export const addAchievement = (data) => request('/achievements', { method: 'POST', body: JSON.stringify(data) });
export const updateAchievement = (id, data) => request(`/achievements/${id}`, { method: 'PUT', body: JSON.stringify(data) });
export const deleteAchievement = (id) => request(`/achievements/${id}`, { method: 'DELETE' });

// 7. Events
export const fetchEvents = () => request('/events');
export const addEvent = (data) => request('/events', { method: 'POST', body: JSON.stringify(data) });
export const updateEvent = (id, data) => request(`/events/${id}`, { method: 'PUT', body: JSON.stringify(data) });
export const deleteEvent = (id) => request(`/events/${id}`, { method: 'DELETE' });

// 8. Gallery
export const fetchGallery = () => request('/gallery');
export const addGallery = (data) => request('/gallery', { method: 'POST', body: JSON.stringify(data) });
export const deleteGallery = (id) => request(`/gallery/${id}`, { method: 'DELETE' });

// 9. Calendar
export const fetchCalendar = () => request('/calendar');
export const addCalendar = (data) => request('/calendar', { method: 'POST', body: JSON.stringify(data) });
export const updateCalendar = (id, data) => request(`/calendar/${id}`, { method: 'PUT', body: JSON.stringify(data) });
export const deleteCalendar = (id) => request(`/calendar/${id}`, { method: 'DELETE' });

// 10. Contact
export const fetchContact = () => request('/contact');
export const updateContact = (data) => request('/contact', { method: 'PUT', body: JSON.stringify(data) });

// Image Upload
export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('image', file);

  const token = localStorage.getItem('dit_admin_token');
  const headers = {};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE}/upload`, {
    method: 'POST',
    headers,
    body: formData
  });
  if (!res.ok) throw new Error('Failed to upload file');
  const data = await res.json();
  const host = import.meta.env.VITE_API_HOST || API_BASE.replace(/\/api\/?$/, '');
  const cleanHost = host.replace(/\/+$/, '');
  const cleanUrl = data.url.startsWith('/') ? data.url : `/${data.url}`;
  return `${cleanHost}${cleanUrl}`;
};

// Admin Auth
export const loginAdmin = (username, password) => request('/auth/login', {
  method: 'POST',
  body: JSON.stringify({ username, password })
});

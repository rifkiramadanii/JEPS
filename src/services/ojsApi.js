// src/services/ojsApi.js
import axios from 'axios';

// Mengambil URL backend dan ID Jurnal dari file .env (Vite)
// Jika .env gagal terbaca, kita beri nilai default (fallback) ke 'jeps'
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const JOURNAL_ID = import.meta.env.VITE_JOURNAL_ID; 

// Konfigurasi Axios mengarah ke Backend Node.js, BUKAN ke OJS langsung
const apiClient = axios.create({
  // Contoh hasil: http://localhost:5000/api/jeps
  baseURL: `${BACKEND_URL}/${JOURNAL_ID}`,
  headers: {
    'Content-Type': 'application/json',
  }
});

/* 
  Catatan: Node.js kita membalas dengan format { success: true, journal: 'jeps', data: {...} }
  Sehingga kita mengembalikan `response.data.data` ke halaman UI.
*/

export const getJournalInfo = async () => {
  // Mengarah ke endpoint /api/jeps/info yang sudah kita buat di backend
  const response = await apiClient.get('/info');
  return response.data.data; 
};

export const getCurrentIssue = async () => {
  // Mengarah ke endpoint /api/jeps/issues/current
  const response = await apiClient.get('/issues/current');
  return response.data.data; 
};

export const getArchives = async () => {
  // Mengarah ke endpoint /api/jeps/issues/archives
  const response = await apiClient.get('/issues/archives');
  return response.data.data;
};

// Menambahkan fungsi untuk mendapatkan daftar artikel di dalam edisi spesifik
export const getIssueDetails = async (issueId) => {
  // Mengarah ke endpoint /api/jeps/issues/:id
  const response = await apiClient.get(`/issues/${issueId}`);
  return response.data.data;
};

export const getArticleDetails = async (articleId) => {
  // Mengarah ke endpoint /api/jeps/articles/:id (BUKAN /submissions)
  const response = await apiClient.get(`/articles/${articleId}`);
  return response.data.data;
};
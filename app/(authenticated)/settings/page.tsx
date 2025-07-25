"use client";

import React, { useState, useEffect } from 'react';
import LogoutButton from "@/components/LogoutButton";
const SettingsPage = () => {
  const [fullName, setFullName] = useState('');
  const [gmail, setGmail] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const token = 'your_jwt_token_here'; // Ganti dengan token asli

  // Load data dari localStorage saat pertama kali render
  useEffect(() => {
    const storedName = localStorage.getItem('fullName');
    const storedGmail = localStorage.getItem('gmail');
    const storedPhoto = localStorage.getItem('photoPreview');

    if (storedName) setFullName(storedName);
    if (storedGmail) setGmail(storedGmail);
    if (storedPhoto) setPhotoPreview(storedPhoto);
  }, []);

  // Simpan data ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem('fullName', fullName);
  }, [fullName]);

  useEffect(() => {
    localStorage.setItem('gmail', gmail);
  }, [gmail]);

  useEffect(() => {
    if (photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPhotoPreview(result);
        localStorage.setItem('photoPreview', result);
      };
      reader.readAsDataURL(photo);
    }
  }, [photo]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!photo) {
      alert('Mohon upload foto');
      return;
    }

    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('gmail', gmail);
    formData.append('photo', photo);

    try {
      const res = await fetch('http://localhost:4000/profile/save', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Gagal upload: ${res.status} - ${errText}`);
      }

      const result = await res.json();
      console.log('Berhasil upload:', result);
      alert('Profil berhasil disimpan!');
    } catch (err) {
      console.error('Upload error:', err);
      alert('Gagal upload profil.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6 dark:bg-slate-800"
      >
        <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-white">
          Edit Profil
        </h2>

        <div className="flex justify-center">
          {photoPreview ? (
            <img
              src={photoPreview}
              alt="Preview"
              className="w-32 h-32 rounded-full object-cover border-4 border-indigo-400 shadow-md"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center text-slate-500">
              No Image
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Full Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Gmail
          </label>
          <input
            type="email"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Photo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files?.[0] || null)}
            className="mt-1 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Simpan Profil
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;

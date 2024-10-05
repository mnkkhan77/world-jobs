import React, { useState } from 'react';
import { Upload, FileText, X } from 'lucide-react';

export default function ResumeUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(selectedFile.name);
    }
  };

  const handleRemove = () => {
    setFile(null);
    setPreview(null);
  };

  return (
    <div className="space-y-4">
      {!file ? (
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6">
          <div className="text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
            <div className="mt-4">
              <label
                htmlFor="resume-upload"
                className="cursor-pointer text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                <span>Upload a file</span>
                <input
                  id="resume-upload"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="sr-only"
                  onChange={handleFileChange}
                />
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                PDF, DOC, or DOCX up to 10MB
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="flex items-center space-x-3">
            <FileText className="h-6 w-6 text-gray-400 dark:text-gray-500" />
            <span className="text-sm text-gray-900 dark:text-white">{preview}</span>
          </div>
          <button
            onClick={handleRemove}
            className="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400"
          >
            <X size={20} />
          </button>
        </div>
      )}

      {file && (
        <button
          type="button"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Upload Resume
        </button>
      )}
    </div>
  );
}
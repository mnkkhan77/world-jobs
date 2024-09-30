import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  jobTitle: string;
}

export default function DeleteConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  jobTitle,
}: DeleteConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 dark:bg-gray-800 dark:bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md p-6">
        <div className="flex items-center mb-4">
          <AlertTriangle className="text-red-600 mr-2" size={24} />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Delete Job Post
          </h2>
          <button
            onClick={onClose}
            className="ml-auto text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X size={24} />
          </button>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Are you sure you want to delete "{jobTitle}"? This action cannot be
          undone.
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

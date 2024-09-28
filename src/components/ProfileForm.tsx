import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Award, Briefcase, GraduationCap, Calendar } from 'lucide-react';

interface ProfileData {
  phone: string;
  location: string;
  skills: string[];
  experience: {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  education: {
    degree: string;
    institution: string;
    graduationYear: string;
  }[];
  bio: string;
}

const initialData: ProfileData = {
  phone: '',
  location: '',
  skills: [],
  experience: [],
  education: [],
  bio: '',
};

export default function ProfileForm() {
  const [profile, setProfile] = useState<ProfileData>(initialData);
  const [newSkill, setNewSkill] = useState('');
  const [hasChanges, setHasChanges] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const hasChanges = JSON.stringify(profile) !== JSON.stringify(initialData);
    setHasChanges(hasChanges);
  }, [profile]);

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    return phoneRegex.test(phone) ? '' : 'Please enter a valid phone number';
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setProfile({ ...profile, phone: value });
    const error = validatePhone(value);
    setErrors(prev => ({ ...prev, phone: error }));
  };

  const handleAddSkill = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newSkill.trim()) {
      e.preventDefault();
      setProfile({
        ...profile,
        skills: [...profile.skills, newSkill.trim()],
      });
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setProfile({
      ...profile,
      skills: profile.skills.filter(skill => skill !== skillToRemove),
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!profile.phone) newErrors.phone = 'Phone number is required';
    else if (validatePhone(profile.phone)) newErrors.phone = validatePhone(profile.phone);
    
    if (!profile.location) newErrors.location = 'Location is required';
    if (!profile.bio) newErrors.bio = 'Bio is required';
    
    profile.experience.forEach((exp, index) => {
      if (!exp.title) newErrors[`experience_${index}_title`] = 'Job title is required';
      if (!exp.company) newErrors[`experience_${index}_company`] = 'Company is required';
      if (!exp.startDate) newErrors[`experience_${index}_startDate`] = 'Start date is required';
    });

    profile.education.forEach((edu, index) => {
      if (!edu.degree) newErrors[`education_${index}_degree`] = 'Degree is required';
      if (!edu.institution) newErrors[`education_${index}_institution`] = 'Institution is required';
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', profile);
      // Handle form submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-900 dark:text-white">Basic Information</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="mt-1 relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="tel"
                value={profile.phone}
                onChange={handlePhoneChange}
                className={`pl-10 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Location <span className="text-red-500">*</span>
            </label>
            <div className="mt-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                value={profile.location}
                onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                className={`pl-10 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.location ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
            </div>
            {errors.location && (
              <p className="mt-1 text-sm text-red-500">{errors.location}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Bio <span className="text-red-500">*</span>
          </label>
          <textarea
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            rows={4}
            className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.bio ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Tell us about yourself..."
            required
          />
          {errors.bio && (
            <p className="mt-1 text-sm text-red-500">{errors.bio}</p>
          )}
        </div>
      </div>

      {/* Rest of the form components with dark mode support */}
      {/* ... (previous skills, experience, and education sections remain the same but with dark mode classes added) ... */}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!hasChanges}
          className={`px-4 py-2 rounded-lg transition-colors ${
            hasChanges
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
          }`}
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
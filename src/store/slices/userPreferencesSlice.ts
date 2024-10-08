import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserPreferences {
  skills: string[];
  preferredLocations: string[];
  preferredJobTypes: string[];
  salaryCap: number;
}

const initialState: UserPreferences = {
  skills: ['React', 'TypeScript', 'Node.js'],
  preferredLocations: ['Remote', 'San Francisco, CA'],
  preferredJobTypes: ['Full-time', 'Remote'],
  salaryCap: 200000,
};

const userPreferencesSlice = createSlice({
  name: 'userPreferences',
  initialState,
  reducers: {
    updateSkills: (state, action: PayloadAction<string[]>) => {
      state.skills = action.payload;
    },
    updatePreferredLocations: (state, action: PayloadAction<string[]>) => {
      state.preferredLocations = action.payload;
    },
    updatePreferredJobTypes: (state, action: PayloadAction<string[]>) => {
      state.preferredJobTypes = action.payload;
    },
    updateSalaryCap: (state, action: PayloadAction<number>) => {
      state.salaryCap = action.payload;
    },
  },
});

export const {
  updateSkills,
  updatePreferredLocations,
  updatePreferredJobTypes,
  updateSalaryCap,
} = userPreferencesSlice.actions;
export default userPreferencesSlice.reducer;
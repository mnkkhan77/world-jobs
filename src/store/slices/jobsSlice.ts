import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Job } from '../../types';
import { jobs as initialJobs } from '../../data/mockJobs';

interface JobsState {
  jobs: Job[];
  savedJobs: string[];
  loading: boolean;
  error: string | null;
}

const initialState: JobsState = {
  jobs: initialJobs,
  savedJobs: [],
  loading: false,
  error: null,
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    toggleSaveJob: (state, action: PayloadAction<string>) => {
      const jobId = action.payload;
      if (state.savedJobs.includes(jobId)) {
        state.savedJobs = state.savedJobs.filter(id => id !== jobId);
      } else {
        state.savedJobs.push(jobId);
      }
    },
    setJobs: (state, action: PayloadAction<Job[]>) => {
      state.jobs = action.payload;
    },
  },
});

export const { toggleSaveJob, setJobs } = jobsSlice.actions;
export default jobsSlice.reducer;
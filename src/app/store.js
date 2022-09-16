import { configureStore } from '@reduxjs/toolkit';
import offreReducer from '../features/offre/offreSlice';
import cvReducer from '../features/cv/cvSlice';
import userReducer from '../features/user/userSlice';
import candidatReducer from '../features/candidatCv/candidatCvSlice';
export const store = configureStore({
  reducer: {
    offres: offreReducer,
    cvs: cvReducer,
    users: userReducer,
    candidats:candidatReducer
  },
});

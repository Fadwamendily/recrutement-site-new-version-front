import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ALLCv, createCV, deleteCv, getCvByID, getCVBySearch, getcvByUser, search } from './cvAPI';



const initialState = {
    allcv: [],
    Mycv:[],
    getCVById:[],
    getAllcv: '',
    createcv: '',
    show: (false),
    message: (''),
};

export const Getallcv = createAsyncThunk( // génere les créateurs d'acttion Redux
    'cvs/ALLCv',
    async (data) => {
        const response = await search(data);
        // The value we return becomes the fulfilled action payload // La valeur que nous retournons devient la fulfilled action payload
        return response.data;
    }
);

export const GetallcvAdmin = createAsyncThunk( // génere les créateurs d'acttion Redux
    'cvs/ALLCvAdmin',
    async () => {
        const response = await ALLCv();
        // The value we return becomes the fulfilled action payload // La valeur que nous retournons devient la fulfilled action payload
        return response.data;
    }
);

export const GetCvByID = createAsyncThunk( // génere les créateurs d'acttion Redux
    'cvs/getCvByID',
    async (id) => {
        const response = await getCvByID(id);
        // The value we return becomes the fulfilled action payload // La valeur que nous retournons devient la fulfilled action payload
        return response.data;
    }
);
export const GetcvByUser = createAsyncThunk( // générer les créateurs d'action Redux
    'cvs/getcvByUser',
    async (userId) => {
        const response = await getcvByUser(userId);
        // The value we return becomes the fulfilled action payload // La valeur que nous retournons devient la fulfilled action payload
        return response.data;
    }
);

export const CreateCV = createAsyncThunk(
    'cvs/createCV',
    async (data) => {
        const response = await createCV(data)
        return response.data
    }
);

export const DeleteCv = createAsyncThunk(
    'cvs/deleteCv',
    async (id) => {
        const response = await deleteCv(id);
        return response
    }
);

export const GetCVBySearch = createAsyncThunk( // génere les créateurs d'acttion Redux
    'cvs/getCVBySearch',
    async (searchQuery) => {
        const response = await search(searchQuery);
        // The value we return becomes the fulfilled action payload // La valeur que nous retournons devient la fulfilled action payload
        return response.data;
    }
);

export const cvSlice = createSlice({
    name: 'cvs', // Un nom, utilisé dans les types d’action
    initialState, // L’état initial du réducteur
    reducers: { // Un objet contenant des fonctions Redux «case reducers ». Les noms clés seront utilisés pour générer des actions.

    },

    extraReducers: (builder) => { // Ajouter des réducteurs pour des types d’action supplémentaires ici, et gérer l’état de chargement si nécessaire
        builder

            // Getallcv
            .addCase(Getallcv.pending, (state) => {
                state.getAllcv = 'loading'
                console.log(state)
            })
            .addCase(Getallcv.fulfilled, (state, action) => {

                state.allcv = action.payload.data  // Ajouter un utilisateur au tableau d’état
                console.log(action)
            })

            .addCase(Getallcv.rejected, (state, action) => {
                state.getAllcv = 'rejected'
            })

            // GetallcvAdmin
            .addCase(GetallcvAdmin.pending, (state) => {
                state.getAllcv = 'loading'
                console.log(state)
            })
            .addCase(GetallcvAdmin.fulfilled, (state, action) => {

                state.allcv = action.payload.data  // Ajouter un utilisateur au tableau d’état
                console.log(action)
            })

            .addCase(GetallcvAdmin.rejected, (state, action) => {
                state.getAllcv = 'rejected'
            })

            // CreateCV
            .addCase(CreateCV.pending, (state) => {
                state.createcv = 'loading'
            })
            .addCase(CreateCV.fulfilled, (state, action) => {
                state.createcv = 'success'
                console.log("action.payload",action.payload.data);
                state.show = true;
                state.message = 'CV créée avec succès'
            })

            .addCase(CreateCV.rejected, (state, action) => {
                state.createcv = 'failed'
            })

            // DeleteCv
            .addCase(DeleteCv.pending, (state) => {

            })
            .addCase(DeleteCv.fulfilled, (state, action) => {
                console.log('payload', action)
                state.allcv = state.allcv.filter(p => p._id !== action.payload)

            })

            .addCase(DeleteCv.rejected, (state, action) => {

            })
            .addCase(GetCVBySearch.pending, (state) => {

                console.log(state)
            })
            .addCase(GetCVBySearch.fulfilled, (state, action) => {

                state.allcv = action.payload.data  // Ajouter un utilisateur au tableau d’état
                console.log(action)
            })

            .addCase(GetCVBySearch.rejected, (state, action) => {

            })

            //GetCVById
            .addCase(GetCvByID.pending, (state) => {
                state.getAllcv = 'loading'
                console.log(state)
            })
            .addCase(GetCvByID.fulfilled, (state, action) => {

                state.getCVById = action.payload.data  // Ajouter un utilisateur au tableau d’état
                console.log(action)
            })

            .addCase(GetCvByID.rejected, (state, action) => {
                state.getAllcv = 'rejected'
                // pending, fulfilled, rejected: créateur d'action Redux
            })

            // GetcvByUser
            .addCase(GetcvByUser.pending, (state) => {

            })
            .addCase(GetcvByUser.fulfilled, (state, action) => {
                console.log('action',action.payload);
                state.Mycv = action.payload.data[0].cv  // Ajouter un utilisateur au tableau d’état
            })

            .addCase(GetcvByUser.rejected, (state, action) => {
            })
    }
})

export const {} = cvSlice.actions;

export const selectCV = (state) => state.cvs.allcv;
export const selectMycv = (state) => state.cvs.Mycv;
export const selectCVById = (state) => state.cvs.getCVById;
export const selectshow = (state) => state.offres.show;
export const selectmessage = (state) => state.offres.message;
export default cvSlice.reducer;
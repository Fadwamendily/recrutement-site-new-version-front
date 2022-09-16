import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ALLCandidat, createCandidat, deleteCondidat } from "./candidatCvAPI";


const initialState = {
    aLLCondidat: [],
    getAllcandidat:'',
    CreateCandidat:'',
    show:(false),
    message:('')

};

export const Getallcandidat = createAsyncThunk( // génere les créateurs d'acttion Redux
    'candidats/ALLCondidat',
    async () => {
        const response = await ALLCandidat();
        // The value we return becomes the fulfilled action payload // La valeur que nous retournons devient la fulfilled action payload
        return response.data;
    }
);

export const CreateCandidat = createAsyncThunk(
    'candidats/createCandidat',
    async (data) => {
        const response = await createCandidat(data)
        return response.data
    }
);
export const DeleteCondidat = createAsyncThunk(
    'candidats/deleteCondidat',
    async (id) => {
        const response = await deleteCondidat(id);
        return response  
    }
);


export const CandidatSlice = createSlice({
    name: 'candidats',
    initialState ,
    reducers:{

    },

    extraReducers: (builder) => {
        builder
            .addCase(Getallcandidat.pending, (state) => {
                state.getAllcandidat = 'Loading'
            })
            .addCase(Getallcandidat.fulfilled,(state, action) => {
                state.getAllcandidat = 'success'
                console.log(action.payload)
                state.aLLCondidat = action.payload.data
                
            })
            .addCase(Getallcandidat.rejected, (state) => {
                state.getAllcandidat = 'failed'
            })
            .addCase(CreateCandidat.pending, (state) => {
                state.CreateCandidat = 'loading' 
            })
            .addCase(CreateCandidat.fulfilled, (state, action) => {
                state.CreateCandidat = 'success'
                console.log(action.payload); 
                state.show = true ;
                state.message = 'CV postuler avec succès'
            })

            .addCase(CreateCandidat.rejected, (state, action) => {
                state.CreateCandidat = 'failed'
            })

            .addCase(DeleteCondidat.pending, (state) => {
                 
            })
            .addCase(DeleteCondidat.fulfilled, (state, action) => {
                console.log('payload',action)
                state.aLLCondidat = state.aLLCondidat.filter(p =>p._id !== action.payload)
                
            })

            .addCase(DeleteCondidat.rejected, (state, action) => {
               
            })
    }
})

export const {} = CandidatSlice.actions;
export const selectCandidat = (state) => state.candidats.aLLCondidat;
export const selectshow = (state) => state.candidats.show;
export const selectmessage = (state) => state.candidats.message;
export default CandidatSlice.reducer;
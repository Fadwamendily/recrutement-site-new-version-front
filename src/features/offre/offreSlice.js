import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOffre, deleteOffre, deleteOffreByUser, getallOffre, getOffreByID, getoffreByUser, updateOffre } from './offreAPI';


const initialState = {
    AllOffres: [],
    MyOffre:[],
    offreById:[],
    createoffre: '',
    deleteoffre: '',
    show:(false),
    message:(''),
    
};

export const GetallOffre = createAsyncThunk( // générer les créateurs d'action Redux
    'offre/getallOffre',
    async () => {
        const response = await getallOffre();
        // The value we return becomes the fulfilled action payload // La valeur que nous retournons devient la fulfilled action payload
        return response.data;
    }
);
export const CreateOffre = createAsyncThunk(
    'offre/createOffre',
    async (data) => {
        const response = await createOffre(data )
    
        return response.data
    }
)
export const DeleteOffre = createAsyncThunk(
    'offre/deleteOffre',
    async (id, toast) => {
        const response = await deleteOffre(id);
        toast.success("offre delete successfuly")
        return response  
    }
);

export const DeleteOffreByUser = createAsyncThunk(
    'offre/deleteOffreByUser',
    async (userId) => {
        const response = await deleteOffreByUser(userId);
        return response  
    }
);

export const GetoffreByUser = createAsyncThunk( // générer les créateurs d'action Redux
    'offre/getoffreByUser',
    async (userId) => {
        const response = await getoffreByUser(userId);
        // The value we return becomes the fulfilled action payload // La valeur que nous retournons devient la fulfilled action payload
        return response.data;
    }
);

export const GetOffreByID = createAsyncThunk( // générer les créateurs d'action Redux
    'offre/getOffreByID',
    async (id) => {
        const response = await getOffreByID(id);
        // The value we return becomes the fulfilled action payload // La valeur que nous retournons devient la fulfilled action payload
        return response.data;
    }
);

export const UpdateOffre = createAsyncThunk(
    'offre/updateOffre',
    async (id,data) => {
        const response = await updateOffre(id,data )
    
        return response.data
    }
)

  // gérer les actions dans vos réducteurs
export const OffreSlice = createSlice({
    name: 'offres', // Un nom, utilisé dans les types d’action
    initialState, // L’état initial du réducteur
    reducers: { // Un objet contenant des fonctions Redux «case reducers ». Les noms clés seront utilisés pour générer des actions.

    },
    // ta3mel listen up or subscribe 3al action t3amlet 5arej ll slice
    extraReducers: (builder) => { // Ajouter des réducteurs pour des types d’action supplémentaires ici, et gérer l’état de chargement si nécessaire
        builder
             
            // GetallOffre
            .addCase(GetallOffre.pending, (state) => {

            })
            .addCase(GetallOffre.fulfilled, (state, action) => {
                console.log('offre data', action.payload.data);
                
                state.AllOffres = action.payload.data  // Ajouter un utilisateur au tableau d’état
            })

            .addCase(GetallOffre.rejected, (state, action) => {
            })
            // pending, fulfilled, rejected: créateur d'action Redux
            
            // CreateOffre
            .addCase(CreateOffre.pending, (state) => {
                state.createoffre = 'loading' 
            })
            .addCase(CreateOffre.fulfilled, (state, action) => {
                state.createoffre = 'success'
                console.log(action.payload.data); 
                state.show = true ;
                state.message = 'offre créée avec succès'
            })

            .addCase(CreateOffre.rejected, (state, action) => {
                state.createoffre = 'failed'
            })

            // DeleteOffre
            .addCase(DeleteOffre.pending, (state) => {
                 
            })
            .addCase(DeleteOffre.fulfilled, (state, action) => {
                
                state.AllOffres = state.AllOffres.filter(p =>p._id !== action.payload)
                console.log('payload',action)
                
            })

            .addCase(DeleteOffre.rejected, (state, action) => {
               
            })
            // DeleteOffreByUser
           .addCase(DeleteOffreByUser.pending, (state) => {
                state.deleteoffre = 'loading' 
            })
            .addCase(DeleteOffreByUser.fulfilled, (state, action) => {
               /* state.deleteoffre = 'success' 
                state.AllOffres = state.AllOffres.filter(p =>p._id !== action.payload)
                state.offres.splice(index, 1);
                console.log('payload',action)*/
                if (action.payload.data) {
                    state.deleteoffre = 'success'
          
                    let index = state.AllOffres.findIndex(offres => offres._id === action.payload._id);
                    state.AllOffres.splice(index, 1);
                  }
                  else {
          
                    state.deleteOffre = 'failure'
                  }
                
            })

            .addCase(DeleteOffreByUser.rejected, (state, action) => {
                state.deleteoffre = 'failed'
               
            })
            // GetoffreByUser
            .addCase(GetoffreByUser.pending, (state) => {

            })
            .addCase(GetoffreByUser.fulfilled, (state, action) => {
                console.log(action.payload);
                state.MyOffre = action.payload.data  // Ajouter un utilisateur au tableau d’état
            })

            .addCase(GetoffreByUser.rejected, (state, action) => {
            })

            // GetoffreByid
            .addCase(GetOffreByID.pending, (state) => {

            })
            .addCase(GetOffreByID.fulfilled, (state, action) => {
                console.log(action.payload);
                state.offreById = action.payload.data  // Ajouter un utilisateur au tableau d’état
            })

            .addCase(GetOffreByID.rejected, (state, action) => {
            })

            // UpdateOffre
            .addCase(UpdateOffre.pending, (state) => {
                
            })
            .addCase(UpdateOffre.fulfilled, (state, action) => {
                
                console.log(action.payload.data); 
                state.show = true ;
                state.message = 'offre créée avec succès'
            })

            .addCase(UpdateOffre.rejected, (state, action) => {
               
            })

    }
})


export const {} = OffreSlice.actions;

export const selectOffre = (state) => state.offres.AllOffres;
export const selectMyOffre = (state) => state.offres.MyOffre;
export const selectoffreById = (state) => state.offres.offreById;
export const selectshow = (state) => state.offres.show;
export const selectmessage = (state) => state.offres.message;
export default OffreSlice.reducer;
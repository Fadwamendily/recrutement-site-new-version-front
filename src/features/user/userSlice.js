import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { avatar, deleteUser, getme, getUser, getUsers } from './userAPI';



const initialState = {
    getme: {},
    alluser:[],
    avatar:[],
    userById:[]
    
};

export const Getme = createAsyncThunk( // génere les créateurs d'acttion Redux
    'users/getme',
    async () => {
        const response = await getme();
        // The value we return becomes the fulfilled action payload // La valeur que nous retournons devient la fulfilled action payload
        return response.data;
    }
);
export const GetUser = createAsyncThunk(
    'users/getUsers',
    async () => {
        const response = await getUsers();
        return response.data
    }
)
export const Avatar = createAsyncThunk(
    'users/avatar',
    async ( data) => {
        const response = await avatar( data);
        return response.data
    }
)
export const DeleteUser = createAsyncThunk(
    'users/deleteUser',
    async (id) => {
        const response = await deleteUser(id);
        return response  
    }
);
export const GetUserById = createAsyncThunk(
    'users/getUserById',
    async (id) => {
        const response = await getUser(id);
        return response.data
    }
)


export const userSlice = createSlice({
    name: 'users', // Un nom, utilisé dans les types d’action
    initialState, // L’état initial du réducteur
    reducers: { // Un objet contenant des fonctions Redux «case reducers ». Les noms clés seront utilisés pour générer des actions.

    },

    extraReducers: (builder) => { // Ajouter des réducteurs pour des types d’action supplémentaires ici, et gérer l’état de chargement si nécessaire
        builder
            
            // Getme
           .addCase(Getme.pending, (state) => {
                 
            })
            .addCase(Getme.fulfilled, (state, action) => {
                
                state.getme = action.payload
                console.log('payload',action.payload)
            })

            .addCase(Getme.rejected, (state, action) => {
               
            })

            // GetUser
            .addCase(GetUser.pending, (state) => {
                 
            })
            .addCase(GetUser.fulfilled, (state, action) => {
                console.log('payload',action.payload.data)
                state.alluser = action.payload.data
                
            })

            .addCase(GetUser.rejected, (state, action) => {
               
            })
            // DeleteUser
            .addCase(DeleteUser.pending, (state) => {
                 
            })
            .addCase(DeleteUser.fulfilled, (state, action) => {
                console.log('payload',action)
                state.alluser = state.alluser.filter(p =>p._id !== action.payload)
                
            })

            .addCase(DeleteUser.rejected, (state, action) => {
               
            })

            // uploadAvatar
            .addCase(Avatar.pending, (state) => {
                state.avatar = 'loading'
            })
            .addCase(Avatar.fulfilled, (state, action) => {
                console.log('payload',action.payload.data)
                state.avatar = 'success'
                
            })

            .addCase(Avatar.rejected, (state, action) => {
                state.avatar = 'failed'
            })

            
            // GetuserByid
            .addCase(GetUserById.pending, (state) => {

            })
            .addCase(GetUserById.fulfilled, (state, action) => {
                console.log(action.payload);
                state.userById = action.payload.data  // Ajouter un utilisateur au tableau d’état
            })

            .addCase(GetUserById.rejected, (state, action) => {
            })
            // pending, fulfilled, rejected: créateur d'action Redux
    }
})

export const {} = userSlice.actions;

export const selectuser = (state) => state.users.getme;
export const selectusers = (state) => state.users.alluser;
export const selectuserById = (state) => state.users.userById;
export default userSlice.reducer;
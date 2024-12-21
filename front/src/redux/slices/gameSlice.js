import { createSlice,createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from 'axios'

export const GetAllGames = createAsyncThunk("getAllGames",async(data,{isRejectedWithValue})=>{
    try{
        const res =await axios.get("/user/getallgames",data)
        return res.data
    }
    catch(error){
        isRejectedWithValue(error.response.data.msg)
    }
}
)

// export const GetGameById = createAsyncThunk("getGameByid",async(data,{isRejectedWithValue})=>{
//     try{
//         const res =await axios.post("/user/getgamebyid",data)
//         return res.data
//     }
//     catch(error){
//         isRejectedWithValue(error.response.data.msg)
//     }
// }
// )

const gameSlice=createSlice({
    name:"game",
    initialState:{
        isLoading:false,
        error:null,
        gameList:[],
        gameInfoLoading:false,
        gameinfo:{},

    },
reducers:{},
extraReducers:(builder)=>{
    builder
    .addCase(GetAllGames.pending,(state)=>{
        state.isLoading=true
        state.error=null
    })
    .addCase(GetAllGames.fulfilled,(state,action)=>{
        state.isLoading=false
        state.error=null
        const sortByDate = (a,b)=>{
            const dateA = new Date(a.releasedate)
            const dateB = new Date(b.releasedate)
            if (dateA< dateB) return 1
            else if (dateA > dateB) return -1
            return 0
          }
        state.gameList=action.payload.games.sort(sortByDate)
        
    })
    .addCase(GetAllGames.rejected,(state,action)=>{
        state.error=action.payload
        state.isAuth=false
    })

    // .addCase(GetGameById.pending,(state)=>{
    //     state.gameInfoLoading=true
    //     state.error=null
    // })
    // .addCase(GetGameById.fulfilled,(state,action)=>{
    //     state.gameInfoLoading=false
    //     state.error=null
    //     state.gameinfo=action.payload.gameinfo
    // })
    // .addCase(GetGameById.rejected,(state,action)=>{
    //     state.error=action.payload
    // })
}
})
export default gameSlice.reducer
// export const {logout}=gameSlice.actions
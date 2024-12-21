import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./slices/authSlice"
import gameSlice from "./slices/gameSlice"

export default configureStore({reducer:{
    auth:authSlice,
    games:gameSlice,
    // library:librarySlice,
    // wishlist:wishlistSlice,
    

}})
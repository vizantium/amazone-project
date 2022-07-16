import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getRegData = createAsyncThunk('loginSlice/getRegData', async() => {
    const {data} = await axios.get('https://62c84bd50f32635590d618e2.mockapi.io/regData')
    return data
})

type regDataType = {
    email: string,
    password: string,
    name: string,
    id: string
}

type initialStateType = {
    email: string
    password: string
    regData: Array<regDataType>
    isLogin: boolean
    isAuth: boolean
}

export const nullRegData = [{
    email: null as unknown as string,
    password: null as unknown as string,
    name: null as unknown as string,
    id: null as unknown as string
}]

const initialState: initialStateType = {
    email: null as unknown as string,
    password: null as unknown as string,
    regData: [{
        email: null as unknown as string,
        password: null as unknown as string,
        name: null as unknown as string,
        id: null as unknown as string
    }],
    isLogin: false,
    isAuth: false
}

const LoginSlice = createSlice({
    name: 'loginSlice',
    initialState: initialState,
    reducers: {
        setEmail (state, action) {
            state.email = action.payload
        },
        setIsLogin (state, action) {
            state.isLogin = action.payload
        },
        setIsAuth (state, action) {
            state.isAuth = action.payload
        },
        signOut (state) {
            state.isAuth = false
            state.isLogin = false
            state.regData = nullRegData
            localStorage.removeItem('email')
            localStorage.removeItem('password')
        }
    },
    extraReducers: builder => {
        builder.addCase(getRegData.fulfilled, (state, action) => {
            let result = (action.payload.filter((obj:regDataType) => {
                console.log(obj.email, state.email)
                return obj.email === state.email
            }))
            console.log(result)
            if (result.length > 0) {
                console.log(result)
                state.regData = result
                state.isLogin = true
            } else {
                state.isLogin = false
                console.log('false')
                state.regData = nullRegData
            }
        });
        builder.addCase(getRegData.rejected, (state, action) => {
            state.isLogin = false
        })
    }
})

export const {setEmail, setIsLogin, setIsAuth, signOut} = LoginSlice.actions

export default LoginSlice.reducer
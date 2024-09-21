import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:JSON.parse(sessionStorage.getItem('User')) || {
    name: '',
    mobile_number: '',
    email: '',
    password: '',
    authUser: false
  },
  error:null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login (state,action){
        const userId = action.payload
        const nameValidation = /^[A-Za-z]{4,10}$/i.test(userId.name)
        const passwordValidation = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{4,10}$/i.test(userId.password)
        state.user=userId
        if(!nameValidation || !passwordValidation){
            state.user.authUser = false
        } else {
            state.user.authUser = true
            const saveUser = JSON.stringify(userId)
            sessionStorage.setItem('User',saveUser)
        }
    },
    logout (state){
        state.user = {
            name: '',
            mobile_number: '',
            email: '',
            password: '',
            authUser: false
        }
        sessionStorage.clear()
    }
  }
})

export const { login,logout } = userSlice.actions
export default userSlice.reducer;
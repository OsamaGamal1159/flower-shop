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
    signup (state,action){
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
    login(state,action){
      const userId = action.payload
      const userAccount = [
        {id:1,
        name:'User_1',
        mobile_number:'06x-xxx-xxxx',
        email:'user_1@gmail.com',
        password: 'user1234'
        },
        {id:2,
        name:'User_2',
        mobile_number:'08x-xxx-xxxx',
        email:'user_2@gmail.com',
        password: 'user5678'
        },
        {id:3,
        name:'User_3',
        mobile_number:'09x-xxx-xxxx',
        email:'user_3@gmail.com',
        password: 'Useruser'
        },
        {id:4,
        name:'User_4',
        mobile_number:'09-xxx-xxxx',
        email:'user_4@gmail.com',
        password: 'User1212'
        }]
        state.user = userId
        if(userId.email===userAccount.forEach((user)=>user.email) && userId.password===userAccount.forEach((user)=>user.password)){
          state.user.authUser = true
          const saveUser = JSON.stringify(userId)
          sessionStorage.setItem('User',saveUser)
        } else {state.user.authUser = false}
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

export const { signup,login,logout } = userSlice.actions
export default userSlice.reducer;
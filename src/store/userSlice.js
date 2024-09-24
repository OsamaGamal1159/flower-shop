import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:JSON.parse(sessionStorage.getItem('User')) || {
    name: '',
    mobile_number: '',
    email: '',
    password: '',
    authUser: false,
    purchaseHistory: []
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
      const mobileValidation = /^(06|08|09)\d{8}$/.test(userId.mobile_number)
      const emailValidation = /^\S+@\S+\.\S+$/.test(userId.email)
      const passwordValidation = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{4,10}$/i.test(userId.password)
      state.user=userId
      if(!nameValidation || !mobileValidation || !emailValidation || !passwordValidation){
          state.user.authUser = false
          state.error='Name, Mobile Number,Email or Password is Fail. Please try again.'
      } else {
          state.user.authUser = true
          const saveUser = JSON.stringify(userId)
          sessionStorage.setItem('User',saveUser)
          state.error=null
      }
    },
    login(state,action){
      const userId = action.payload
      const userAccount = [
        { name:'User1',
          mobile_number:'0612345678',
          email:'user_1@gmail.com',
          password: 'user1234',
          purchaseHistory:[]
        },
        { name:'User2',
          mobile_number:'0812345678',
          email:'user_2@gmail.com',
          password: 'user5678',
          purchaseHistory:[]
        },
        { name:'User3',
          mobile_number:'0912345678',
          email:'user_3@gmail.com',
          password: 'user555',
          purchaseHistory:[]
        },
        { name:'User4',
          mobile_number:'0912345678',
          email:'user_4@gmail.com',
          password: 'user1212',
          purchaseHistory:[]
        }]

        const findUser = userAccount.find((user)=>user.email===userId.email && user.password===userId.password)

        if(findUser){
          state.user = {...findUser,authUser:true}
          const saveUser = JSON.stringify(state.user)
          sessionStorage.setItem('User',saveUser)
        } else {
          state.user.authUser = false
          state.error='Email or Password is Fail. Please try again.'
        }
    },
    logout (state){
        state.user = {
            name: '',
            mobile_number: '',
            email: '',
            password: '',
            authUser: false,
            purchaseHistory:[]
        }
        state.error=null
        sessionStorage.clear()
        
    },
    addPurchase(state,action){
      const purchase = action.payload
      if (!Array.isArray(state.user.purchaseHistory)) {
        state.user.purchaseHistory = []
      }
      state.user.purchaseHistory.push(purchase)
      const saveUser = JSON.stringify(state.user)
      sessionStorage.setItem('User',saveUser)
    }
  }
})

export const { signup,login,logout,addPurchase } = userSlice.actions
export default userSlice.reducer;
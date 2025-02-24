const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'


//action create

export const loginSuccess=(token)=>({
    type:LOGIN_SUCCESS,
    payload:token,
})


export const loginFailure=(error)=>({
    type:LOGIN_FAILURE,
    payload:error,
})

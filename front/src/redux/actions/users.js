import axios from "axios"
import { CREATE_USER, LOGGUE_USER, DESLOGUEO_USER, ALL_USER, SHOW_USER_PROFILE } from "../store/constants"

export const setUsuario = (user) => ({
    type: CREATE_USER,
    user
});

export const logUser = (user) => ({
    type: LOGGUE_USER,
    user
});

export const startLoading = () => ({
    type: 'START_LOADING'
})

export const logout = () => ({
    type: DESLOGUEO_USER,

});
export const AllUser = (allUser) => ({
    type: ALL_USER,
    allUser: allUser
})
export const allOrder = (allOrder) => ({

    type: "ALL_ORDER",
    allOrder


})
export const Products = (allProducts) => ({

    type: "ALL_PRODUCTS",
    allProducts


})

export const showUser = (orderProfile) => ({
    type: SHOW_USER_PROFILE,
    orderProfile
});

export const crearUsuario = (user) => dispatch =>
    axios.post('/user/register', user)
        .then(user => dispatch(logUser(user.data)))


export const showOrderProfile = (userId) => dispatch => {
    console.log(userId)
    return axios.get(`/api/user/profile/${userId}`)
        .then((res) => { console.log(userId), dispatch(showUser(res.data)) }).catch(err => console.log(err)
        )
}

export const loguearUsuario = (user) => dispatch =>
    axios.post('/user/login', { email: user.email, password: user.password })
        .then(res => res.data)
        .then(user => dispatch(logUser(user)))
        .catch(err => { throw new Error(err) })

export const crearUsuarioFacebook = () => dispatch =>
    axios.post('/user/register')
        .then(user => dispatch(logUser(user.data)))


export const logOut = () => {
    return function (dispatch, getState) {
        return axios.get("/user/logout")
            .then((res) => {
                dispatch(logout())
            })
    }
}

export const LogueoCoockie = () => {
    return function (dispatch, getState) {
        dispatch(startLoading())
        return axios.get("/check")
            .then((res) => {
                dispatch(logUser(res.data))
            })
    }
}

export const FetchAllUsers = () => {
    return function (dispatch, getState) {
        return axios.get("/api/user/admin/fetchAllUser")
            .then((res) => {
                dispatch(AllUser(res.data))
            })
    }
}

export const ChangeToAdmin = (idUser) => {
    return function (dispatch, getState) {
        return axios.put(`/api/user/admin/changeToAdmin`, { idUser: idUser })
            .then((res) => (dispatch(FetchAllUsers())))

    }
}

export const ChangeToUser = (idUser) => {
    return function (dispatch, getState) {
        return axios.put(`/api/user/admin/changeToUser/`, { idUser: idUser })
            .then((res) => (dispatch(FetchAllUsers())))

    }
}

export const allOrderAdmin = () => {
    return function (dispatch, getState) {
        return axios.get(`/api/user/admin/allOrder
        `)
            .then((res) => {
                dispatch(allOrder(res.data))

            })
    }
}

export const allProducts = (idProducto) => {
    return function (dispatch, getState) {
        return axios.get(`/api/user/admin/allOrderProducts/${idProducto} `)
            .then((res) => {
                dispatch(Products(res.data))

            })



    }
}
export const changeToEnviado = (idOrder, valor) => {
    return function (dispatch, getState) {
        return axios.put(`/api/user/admin/changeToEnviado`, { idOrder, valor })
            .then((res) => { dispatch(allOrderAdmin()) })

    }
}

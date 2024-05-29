import ApiAxios from "./caller.service";

let getAllOrders = () => {
    return ApiAxios.get('/api/orders')
}

let getOrder = (oid) => {
    return ApiAxios.get('/api/orders/'+oid)
}

let addOrder = (data) => {
    return ApiAxios.post('/api/orders', data)
}

let editOrder = (oid) => {
    return ApiAxios.put('/api/orders/'+oid)
}

let getAllLignOrdersByOrder = (oid) => {
    return ApiAxios.get('http://watchandplay.lndo.site/api/lign_orders?ordertable='+oid)
}


let deleteOrder = (oid) => {
    return ApiAxios.delete('/api/orders/'+oid)
}

export const orderService = {
    getAllOrders, getOrder, addOrder, editOrder, getAllLignOrdersByOrder, deleteOrder
}
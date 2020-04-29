export const addProductToCart  = ({commit}, { quantity, base, name, total, restuarant, addition, itemId})  => {
    commit ('ADD_TO_CART', { quantity, base, name,total,restuarant,addition, itemId });
    
}

export const addSchool  = ({commit}, { id})  => {
    commit ('ADD_SCHOOL', { id });
    
}






export const removeProductFromCart  = ({commit, dispatch}, name)  => {
    commit ('REMOVE_PRODUCT_FROM_CART', name);

    dispatch('addNotification', {
        type: 'warning',
        message: 'Item Removed from Cart'
    })
}

export const removeAllProductFromCart  = ({commit, dispatch})  => {
    commit ('REMOVE_ALL_PRODUCT_FROM_CART');

    dispatch('addNotification', {
        type: 'danger',
        message: 'All Items Removed from Cart'
    })
}






export const addToOrderCart  = ({commit, dispatch}, {restuarantId, id, total, itemList})  => {
    commit ('ADD_TO_ORDER_CART', {restuarantId, id, total, itemList});

    dispatch('addNotification', {
        type: 'primary',
        message: 'Added to Basket'
    })
   


}

export const removeOrderCart  = ({commit, dispatch}, id)  => {
    commit ('REMOVE_ORDER_CART', id);

    dispatch('addNotification', {
        type: 'danger',
        message: 'Order removed from basket'
    })
}

export const removeAllOrderCart  = ({commit, dispatch})  => {
    commit ('REMOVE_ALL_ORDER_CART');

    dispatch('addNotification', {
        type: 'danger',
        message: 'All Items Removed from Basket'
    })
}


export const addToOrder  = ({commit, dispatch}, {costumerId, restuarantId, subtotal, fee, address, itemList})  => {
    commit ('ADD_TO_ORDER', {costumerId, restuarantId, subtotal, fee, address, itemList});

    dispatch('addNotification', {
        type: 'primary',
        message: 'Order Successful'
    })
   


}

export const addNotification  = ({commit}, notification)  => {
    commit ('PUSH_NOTIFICATION', notification);
}

export const removeNotification  = ({commit}, notificationToRemove)  => {
    commit ('REMOVE_NOTIFICATION', notificationToRemove);
}

export const addUser  = ({commit}, {id, phoneNumber, firstName, lastName, middleName, email, preferredLocation, instagram, twitter})  => {
    commit ('ADD_USER', {id, phoneNumber, firstName, lastName, middleName, email, preferredLocation, instagram, twitter });
    
}


export const logout  = ({commit, dispatch})  => {
    commit ('LOGOUT');

    dispatch('removeAllProductFromCart')

    dispatch('addNotification', {
        type: 'danger',
        message: 'Logout Sucessful'
    })


}


export const orderSuccessful  = ({commit})  => {
    commit ('ORDER_SUCESSFUL');

    
}


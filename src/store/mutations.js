 export const ADD_TO_CART = (state, {quantity, base, name, total, restuarant, addition, itemId}) => {

    let productincart = state.cart.find(
        item => {
            return item.name === name;
        }
    );

    let restuarantincart = state.cart.find(
        item => {
            return item.restuarant === restuarant;
        }
    );
    if (restuarantincart || state.cart.length == 0){
    if (productincart){
        
        if (quantity == 0){
            parseInt(quantity)
            quantity = 1
            productincart.quantity = parseInt(productincart.quantity) + parseInt(quantity);
            productincart.total = parseInt(productincart.total) + addition;
            window.localStorage.setItem('cart', JSON.stringify(state.cart))

        state.notification.push({...{
            type: 'success',
            message: 'Item Added to Cart'
        },
            id: (Math.random().toString(36) + Date.now().toString(36)).substr(2)
        })
        return;
            
        }
        productincart.quantity = parseInt(productincart.quantity) + parseInt(quantity);
        let newtotal = parseInt(total) - parseInt(base)

        productincart.total = parseInt(productincart.total) + newtotal;
        
        window.localStorage.setItem('cart', JSON.stringify(state.cart))

        state.notification.push({...{
            type: 'success',
            message: 'Item Added to Cart'
        },
            id: (Math.random().toString(36) + Date.now().toString(36)).substr(2)
        })
        return;
    }

     state.cart.push({quantity, name, total, restuarant, itemId})
     
     window.localStorage.setItem('cart', JSON.stringify(state.cart))

     state.notification.push({...{
        type: 'success',
        message: 'Item Added to Cart'
    },
        id: (Math.random().toString(36) + Date.now().toString(36)).substr(2)
    })
    

    }
    else if(!restuarantincart) {
        
        state.notification.push({...{
            type: 'danger',
            message: 'Shift abeg, You no fit buy food from two different restuarants'
        },
            id: (Math.random().toString(36) + Date.now().toString(36)).substr(2)
        })
        
    }
 }





 export const REMOVE_PRODUCT_FROM_CART = (state, name) =>{
     state.cart = state.cart.filter(item => {
         return item.name !== name;
         
     })
     window.localStorage.setItem('cart', JSON.stringify(state.cart))
 }


 export const REMOVE_ORDER_CART = (state, id) =>{
    state.ordercart = state.ordercart.filter(item => {
        return item.id !== id;
        
    })
    window.localStorage.setItem('ordercart', JSON.stringify(state.ordercart))
}


 

 export const REMOVE_ALL_PRODUCT_FROM_CART = (state) =>{
    state.cart = [];
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
}

export const REMOVE_ALL_ORDER_CART = (state) =>{
    state.ordercart = [];
    window.localStorage.setItem('ordercart', JSON.stringify(state.ordercart))
}





export const ORDER_SUCESSFUL = (state) =>{
    state.cart = [];
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
}





export const LOGOUT = (state) =>{
    state.user = [];
    window.localStorage.setItem('user', JSON.stringify(state.user))
}



export const ADD_TO_ORDER_CART = (state, {restuarantId, id, total, itemList}) => {

    state.ordercart.push({restuarantId, id, total, itemList})
    
    window.localStorage.setItem('ordercart', JSON.stringify(state.ordercart))
}

export const ADD_SCHOOL = (state, { id}) => {

    state.school = [];
    window.localStorage.setItem('school', JSON.stringify(state.school))
    
    state.school.push({ id})
    
    window.localStorage.setItem('school', JSON.stringify(state.school))
}



export const ADD_TO_ORDER = (state, {costumerId, restuarantId, subtotal, fee, address, itemList}) => {

     state.order.push({costumerId, restuarantId, subtotal, fee, address, itemList})
     
     window.localStorage.setItem('order', JSON.stringify(state.order))
 }


 

export const PUSH_NOTIFICATION = (state, notification) => {
    state.notification.push({...notification,
        id: (Math.random().toString(36) + Date.now().toString(36)).substr(2)
    })
}

export const REMOVE_NOTIFICATION = (state, notificationToRemove) => {
    state.notification = state.notification.filter(notification => {
        return notification.id !== notificationToRemove.id;
        
    })
}

export const ADD_USER = (state, {id, phoneNumber, firstName, lastName, middleName, email, preferredLocation, instagram, twitter}) => {
    if (localStorage.getItem("user") === null) {

        state.user.push({id, phoneNumber, firstName, lastName, middleName, email, preferredLocation, instagram, twitter})
        window.localStorage.setItem('user', JSON.stringify(state.user))
      }
    
      else{
        state.user = [];
        window.localStorage.setItem('user', JSON.stringify(state.user))

        state.user.push({id, phoneNumber, firstName, lastName, middleName, email, preferredLocation, instagram, twitter})
        window.localStorage.setItem('user', JSON.stringify(state.user))
      }
}



 
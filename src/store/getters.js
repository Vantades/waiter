export const cartItemCount = (state) => {
    return state.cart.length;
}
export const userCount = (state) => {
    return state.user.length;
}

export const restuarantId = (state) => {
    return state.cart[0].restuarant;
}

export const cart = (state) => {
    return state.cart;
}


export const notification = (state) => {
    return state.notification;
}


export const schoolCount = (state) => {
    return state.school.length;
}

export const cartItemTotal = (state) => {
    let total = 0;

    state.cart.forEach(element => {
        total += element.total
    });
    return total;
}
export default {
    addToCart(state, payload) {
        const item = payload;
        const itemInCartIndex = state.items.findIndex(index => index.id === item.id);

        if(itemInCartIndex >= 0) {
            state.items[itemInCartIndex].quantity++;
        } else {
            const newItem = {
                id: item.id,
                isbn13: item.isbn13,
                title: item.title,
                image: item.image,
                author: item.author,
                price: item.price.replace('$',''),
                quantity: 1
            };
            state.items.push(newItem);
        } 
        state.quantity++;
        state.total += parseFloat(item.price.replace('$',''));
        
    },
    removeFromCart(state) {
        state.items = [];
        state.quantity = 0;
        state.total = 0;
    }
};
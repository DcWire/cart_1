import React from 'react';

// Inherits from component class and it is a class based component
// where as App was a functional component.
class CartItem extends React.Component {
    render () {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>Phone</div>
                    <div style={{color: '#777'}}>Rs 999</div>
                    <div style={{color: '#777'}}>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                    </div>
                </div>
            </div>
        );
    }
} 


// Style object

const styles = {
    image : {
        height: 110,
        width: 100, 
        borderRadius: 4,
        background: '#777'
    }
}


export default CartItem;
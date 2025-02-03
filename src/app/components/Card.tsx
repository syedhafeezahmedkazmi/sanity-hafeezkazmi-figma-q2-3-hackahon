
'use client';

import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../../context/CartContext';

const ShoppingCart = () => {
    const [isCartVisible, setIsCartVisible] = useState(false);
    // const { cart, removeFromCart, updateQuantity } = useCart();
    const { cart, removeFromCart, updateQuantity} = useCart();
    
    const toggleCart = () => setIsCartVisible(!isCartVisible);

    return (
        <div className="relative">
            {/* Cart Icon */}
            <button onClick={toggleCart} className="text-black p-2 hover:bg-gray-200 rounded" aria-label="Toggle Shopping Cart">
                <AiOutlineShoppingCart size={23} />
            </button>

            {/* Cart Sidebar */}
            <div className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ${isCartVisible ? 'translate-x-0' : 'translate-x-full'} sm:w-[400px]`}>
                <div className="p-4 h-full flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
                        <hr />

                        {/* Cart Items */}
                        <div className="space-y-4">
                            {cart.length > 0 ? (
                                cart.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center">
                                        <div className="flex">
                                            <Image src={item.image} height={80} width={80} alt={item.name} />
                                            <div className="ml-4">
                                                <h3 className="mt-2 font-medium">{item.name}</h3>
                                                <p>{item.quantity} x <span className="text-yellow-600">Rs. {item.price.toLocaleString()}</span></p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-gray-300 px-2 rounded">-</button>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-gray-300 px-2 rounded">+</button>
                                            <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-3 rounded">x</button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-500">Your cart is empty</p>
                            )}
                        </div>
                    </div>

                    {/* Checkout Buttons */}
                    <div className="mt-auto">
                        <div className="flex justify-between">
                            <p>Subtotal</p>
                            <p className="ml-8 my-2 text-yellow-600">Rs. {cart.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}</p>
                        </div>
                        <hr />
                        <div className="mt-4 flex justify-around mx-auto gap-4">
                            <Link href="/viewcart">
                                <button className="rounded-full bg-gray-200 px-8 py-2 border border-black">View Cart</button>
                            </Link>
                            <Link href="/checkout">
                                <button className="rounded-full bg-gray-200 px-8 py-2 border border-black">Checkout</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <button onClick={toggleCart} className="absolute top-4 right-4 text-gray-500">Close</button>
            </div>
        </div>
    );
};

export default ShoppingCart;





// -------------------------------------coding------------------------------------------

// 'use client'
// import React, { useState } from 'react';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import Image from 'next/image';
// import Link from 'next/link';

// function ShoppingCart() {
//     // State to toggle cart visibility
//     const [isCartVisible, setIsCartVisible] = useState(false);

//     const toggleCart = () => {
//         setIsCartVisible(!isCartVisible);
//     };

//     return (
//         <div className="relative">
//             {/* Cart Icon */}
//             <button
//                 onClick={toggleCart}
//                 className="text-black p-2 hover:bg-gray-200 rounded"
//                 aria-label="Toggle Shopping Cart"
//             >
//                 <AiOutlineShoppingCart aria-label="Shopping Cart" size={23} />
//             </button>

//             {/* Cart Sidebar */}
//             <div
//                 className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ${isCartVisible ? 'translate-x-0' : 'translate-x-full'} sm:w-[400px] md:w-[450px] lg:w-[500px]`}
//             >
//                 <div className="p-4 overflow-y-auto h-full flex flex-col justify-between">
//                     <div>
//                         <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
//                         <hr />

//                         {/* Cart Items */}
//                         <div className="space-y-4">
//                             <div className="flex justify-between items-center">
//                                 <div className="flex">
//                                     <Image
//                                         src="/shop14.jpeg"
//                                         height={150}
//                                         width={150}
//                                         alt="Asgaard Sofa"
//                                         className="object-cover"
//                                     />
//                                     <div className="ml-4">
//                                         <h3 className="mt-8 font-medium">Asgaard Sofa</h3>
//                                         <p className="my-2">1 x <span className="text-yellow-600">Rs. 250.000.00</span></p>
//                                     </div>
//                                 </div>
//                                 <div className="bg-gray-500 h-[30px] w-[30px] text-white rounded-full flex justify-center items-center cursor-pointer">
//                                     <span className="p-0.5 text-xl font-medium">x</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Bottom Section (Subtotal + Buttons) */}
//                     <div className="mt-auto">
//                         <div className="flex justify-between">
//                             <p>Subtotal</p>
//                             <p className="ml-8 my-2">1 x <span className="text-yellow-600">Rs. 250.000.00</span></p>
//                         </div>
//                         <hr />
//                         <div className="mt-4 flex justify-around mx-auto gap-4">
//                             <Link href='/viewcart'>
//                                 <button className="rounded-full text-black hover:text-white bg-white hover:bg-gray-800 px-8 py-2 border border-black">
//                                     View Cart
//                                 </button>
//                             </Link>
//                             <Link href='/checkout'>
//                                 <button className="rounded-full text-black hover:text-white bg-white hover:bg-gray-800 px-8 py-2 border border-black">
//                                     Checkout
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Close Cart Button */}
//                 <button
//                     onClick={toggleCart}
//                     className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//                     aria-label="Close Cart"
//                 >
//                     Close
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default ShoppingCart;
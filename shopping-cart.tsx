import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "../lib/use-cart";

export function ShoppingCart() {
    const { cart, removeFromCart, checkout } = useCart();

    return (
        <Sheet>
            <SheetTrigger>Open cart</SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>
                    <SheetDescription>
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <ul>
                                {cart.map((item) => (
                                    <li key={item.id}>
                                        {item.name} - ${item.price}
                                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <button onClick={checkout}>Checkout</button>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}

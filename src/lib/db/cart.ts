import { prisma } from "./prisma";
import { cookies } from "next/dist/client/components/headers";


export async function getCart(cartId: string) {
    const localCartId = cookies().get("localCartId")?.value
    const cart = localCartId ?
    await prisma.cart.findUnique({
        where: {id: localCartId},
        include: {
            items: {
                include: {
                    product: true
                }
            }
        }
    }) 
    : null;
    if (!cart) {
        return null;
    }   
    return {
        ...cart,
        items: cart.items.reduce((acc, item) => acc + item.quantity, 0),
        subtotal: cart.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0),
    };
}
export async function createCart() {
  const newCart = await prisma.cart.create({
    data: {},
  });
  cookies().set("localCartId", newCart.id);

}
// needs encryption + secure settings in real production app
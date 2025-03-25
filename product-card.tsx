"use client"

import type { Product } from "@/lib/types"
import { useCart } from "@/lib/use-cart"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-square relative">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={() => addToCart(product)} className="w-full">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}


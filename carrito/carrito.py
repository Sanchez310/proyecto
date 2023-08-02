class Producto:
    def __init__(self, nombre, precio):
        self.nombre = nombre
        self.precio = precio

    def __str__(self):
        return f"{self.nombre} - ${self.precio:.2f}"


class Carrito:
    def __init__(self):
        self.items = {}

    def agregar_producto(self, producto, cantidad=1):
        if producto in self.items:
            self.items[producto] += cantidad
        else:
            self.items[producto] = cantidad

    def eliminar_producto(self, producto):
        if producto in self.items:
            del self.items[producto]

    def total(self):
        total = 0
        for producto, cantidad in self.items.items():
            total += producto.precio * cantidad
        return total

    def mostrar_carrito(self):
        print("Productos en el carrito:")
        for producto, cantidad in self.items.items():
            print(f"{producto} - Cantidad: {cantidad}")
        print(f"Total a pagar: ${self.total():.2f}")


if __name__ == "__main__":
    producto1 = Producto("Camiseta", 15.99)
    producto2 = Producto("Pantalón", 29.99)
    producto3 = Producto("Calcetines", 5.99)

    carrito = Carrito()

    carrito.agregar_producto(producto1, 2)
    carrito.agregar_producto(producto2)
    carrito.agregar_producto(producto3)

    carrito.mostrar_carrito()

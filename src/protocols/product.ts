export type Product = {
    id?: number,
    name: string,
    price: number,
    description: string
}

export type checkUpdate = {
    id: number,
    price: number
}

export type Order = {
    id?: number,
	clientId?: number,
	productsId?: number,
	quantity: number,
	totalPrice: number
}

export type Client = { 
    id?: number,
    name: string, 
    address: string 
}
import LavashImage1 from "./assets/lavash-1.png";
import LavashImage2 from "./assets/lavash-2.png";

const products = [
	{
		id: "1-1",
		title: "Kombo",
		description: "Meat pita bread, fries, cola spill and ketchup",
		price: 39000,
		img: LavashImage1,
	},
	{
		id: "1-2",
		title: "Kombo",
		description: "Meat pita bread, fries, cola spill and ketchup",
		price: 39000,
		img: LavashImage2,
	},
	{
		id: "1-3",
		title: "Kombo",
		description: "Meat pita bread, fries, cola spill and ketchup",
		price: 39000,
		img: LavashImage1,
	},
	{
		id: "1-4",
		title: "Kombo",
		description: "Meat pita bread, fries, cola spill and ketchup",
		price: 39000,
		img: LavashImage2,
	},
];

export const categories = [
	{
		id: "1",
		title: "Pizza",
		products,
	},
	{ id: "2", title: "Pasta", products: products },
	{ id: "3", title: "Snacks", products: products },
	{ id: "4", title: "Cinnamon rolls", products: [] },
	{ id: "5", title: "Drinks", products: [] },
	{ id: "6", title: "Garnish", products: [] },
	{ id: "7", title: "Sauce", products: [] },
	{ id: "8", title: "Salads", products: [] },
	{ id: "9", title: "Lavash", products: [] },
];

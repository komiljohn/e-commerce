export const formatNumbers = (x: number) => {
	if (!x) return 0;
	if (isNaN(Number(x))) return 0;

	const parts = x.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	return parts.join(".");
};

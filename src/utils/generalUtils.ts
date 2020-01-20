// @ts-ignore
export const isNumeric = (n: any): boolean => !isNaN(parseFloat(n)) && isFinite(n);

export const uppercaseWords = (str: string): string => {
	return str.split(' ')
		.map((s: string) => s.charAt(0).toUpperCase() + s.substring(1))
		.join(' ');
};

import { capitalize } from "./capitalize";

export const camelCaseToWords = (string: string) => {
	var words = string.match(/[A-Za-z][a-z]*/g) || [];

	return words.map(capitalize).join(" ");
}
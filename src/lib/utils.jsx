import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export const cn = (...className) => {
	return twMerge(clsx(className));
};

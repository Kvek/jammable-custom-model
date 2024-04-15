import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

export const pathNameExtractor = (key: string): string =>
  key.replaceAll("/", "").replaceAll("-", " ");

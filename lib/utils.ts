import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Creating a timestamp for a given date
 *
 * @param createdAt
 * @returns string
 */

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const secondsAgo = Math.round((now.getTime() - createdAt.getTime()) / 1000);

  const minute = 60;
  const hour = 3600;
  const day = 86400;
  const week = 604800;
  const month = 2592000;
  const year = 31536000;

  if (secondsAgo < minute) {
    return "just now";
  } else if (secondsAgo < hour) {
    const minutesAgo = Math.floor(secondsAgo / minute);
    return `${minutesAgo} minute${minutesAgo > 1 ? "s" : ""} ago`;
  } else if (secondsAgo < day) {
    const hoursAgo = Math.floor(secondsAgo / hour);
    return `${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`;
  } else if (secondsAgo < week) {
    const daysAgo = Math.floor(secondsAgo / day);
    return `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
  } else if (secondsAgo < month) {
    const weeksAgo = Math.floor(secondsAgo / week);
    return `${weeksAgo} week${weeksAgo > 1 ? "s" : ""} ago`;
  } else if (secondsAgo < year) {
    const monthsAgo = Math.floor(secondsAgo / month);
    return `${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago`;
  } else {
    const yearsAgo = Math.floor(secondsAgo / year);
    return `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago`;
  }
};

/**
 * Formatting large numbers into a readable format
 *
 * @param num
 * @returns string
 */

export function formatNumbers(num: number): string {
  if (num < 1000) {
    return num.toString();
  } else if (num < 1000000) {
    return (num / 1000).toFixed(1) + "k";
  } else if (num < 1000000000) {
    return (num / 1000000).toFixed(1) + "m";
  } else {
    return (num / 1000000000).toFixed(1) + "b";
  }
}

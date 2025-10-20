"use strict";

export async function getData(url = "") {
  try {
    const response = await fetch(url);

    if (!response.ok)
      throw new Error(`HTTP error! status: ${response.status}.`);

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
}

// export const val = 5;

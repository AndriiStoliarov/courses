"use strict";

export class Fetch {
  constructor(initURL) {
    this.URL = initURL;
  }

  async getData() {
    try {
      const response = await fetch(this.URL);

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}.`);

      this.data = await response.json();
      return this.data;
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }
}

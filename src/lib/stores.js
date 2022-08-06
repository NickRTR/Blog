import { writable } from "svelte/store";

export const search = writable("");

// restrict search to letters and numbers
search.subscribe((value) => {
	search.set(value.replace(/[^a-z0-9]/gi, ""));
});

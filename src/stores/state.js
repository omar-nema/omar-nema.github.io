import { readable, writable } from 'svelte/store';
export let transitionTime = readable(500);
export let selectedProject = writable(null);
export let siteDir = '';

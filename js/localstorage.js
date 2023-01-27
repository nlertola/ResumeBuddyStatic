// Save data to localStorage
export function setItem(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}
// Get saved data from localStorage
export function getItem(key) {
    return localStorage.getItem(key) ? localStorage.getItem(key) : '0';
}

// Remove saved data from localStorage
export function removeItem(key) {
    localStorage.removeItem(key);
}

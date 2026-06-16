/**
 * Utilitários para manipulação de localStorage e DOM
 */

export const storage = {
  get: (key, defaultValue = null) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  },
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);
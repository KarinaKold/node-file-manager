import { getUser } from '../getUser.js';

export function welcomeUser() {
  console.log(`\nWelcome to the File Manager, ${getUser()}!`);
}
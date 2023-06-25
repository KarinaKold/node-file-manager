import { getUser } from '../getUser.js';

export function byeUser() {
  console.log(`\nThank you for using File Manager, ${getUser()}, goodbye!\n`);
}
export function getUser() {
    const username = process.argv[2] ? process.argv[2].slice(11) : 'User';
    return username;
  }
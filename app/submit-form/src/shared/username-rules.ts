export function checkUsername(username: string): string[] {
  const errors: string[] = [];
  // regex to check for email format
  if (!/\S+@\S+\.\S+/.test(username))
    errors.push('Must use email format: name@domain.tld');

  return errors;
}

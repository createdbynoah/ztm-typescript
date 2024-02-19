/* eslint-disable */

// Discriminated unions are a way to declare a type that can have
// different properties or behaviors based on a specific discriminator property.
// Discriminated unions can be defined using the intersection of a set of types
// with a common property, and the property value can be used to determine which
// type to use.

// We can also use entire objects. Using objects creates
// a 'discriminated union'. Unions only allow the type to be one
// option at a time. Combining this with objects allows multiple
// pieces of data to be associated with each individual option.

type AccountCreationMessage =
  | { kind: 'ok'; greeting: string }
  | { kind: 'passwordComplexityFailure'; message: string }
  | { kind: 'usernameExists' };

// The 'kind' property is the discriminator property.
// It is a common property that is present in all types of the union.
// It is a literal type, which means it can only be one of the specified values.

// use type annotation to get feedback from typescript
const ok: AccountCreationMessage = { kind: 'ok', greeting: 'Welcome' };

const passwordTooShort: AccountCreationMessage = {
  kind: 'passwordComplexityFailure',
  message: 'Password must be at least 10 characters',
};

// cannot include extra properties in the object because no other properties are declared in the union
const exists: AccountCreationMessage = { kind: 'usernameExists' };

function showMessage(msg: AccountCreationMessage) {
  switch (msg.kind) {
    case 'ok':
      console.log(msg.greeting);
      break;
    case 'passwordComplexityFailure':
      console.log(msg.message);
      break;
    case 'usernameExists':
      console.log('Username already exists');
      break;
  }
}

showMessage(ok);
showMessage(passwordTooShort);

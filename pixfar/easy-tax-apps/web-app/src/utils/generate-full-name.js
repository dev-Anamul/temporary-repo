export function generateFullName(firstName, middleName, lastName) {
  let fullName = "";
  if (firstName) {
    fullName += firstName;
  }
  if (middleName) {
    fullName += " " + middleName;
  }
  if (lastName) {
    fullName += " " + lastName;
  }
  return fullName.trim();
}

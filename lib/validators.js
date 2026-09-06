import tlds from '@/data/tlds.json';

// Local/domain parts allow only letters, digits, and single non-repeating
// separators (. _ % + -) — no leading/trailing/consecutive special chars,
// and no other symbols (e.g. #), matching how real mail providers validate.
const EMAIL_REGEX = /^[a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.([a-zA-Z]{2,})$/;

const VALID_TLDS = new Set(tlds);

export function isValidEmail(email) {
  const match = EMAIL_REGEX.exec(String(email).trim());
  if (!match) return false;

  const tld = match[3].toLowerCase();
  return VALID_TLDS.has(tld);
}

export const MIN_PASSENGERS = 5;

export function isValidPassengerCount(value) {
  const n = Number(value);
  return Number.isInteger(n) && n >= MIN_PASSENGERS;
}

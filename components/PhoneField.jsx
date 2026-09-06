'use client';

import { useState } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import { getExampleNumber } from 'libphonenumber-js';
import examples from 'libphonenumber-js/mobile/examples';

export default function PhoneField({ id, label, value, onChange, required, defaultCountry = 'US' }) {
  const [country, setCountry] = useState(defaultCountry);
  const [touched, setTouched] = useState(false);

  const example = getExampleNumber(country, examples);
  const placeholder = example ? example.formatInternational() : 'Phone number';
  const invalid = touched && !!value && !isValidPhoneNumber(value);

  return (
    <div>
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      <PhoneInput
        id={id}
        international
        flags={flags}
        defaultCountry={defaultCountry}
        value={value}
        onChange={(val) => onChange(val || '')}
        onCountryChange={(c) => c && setCountry(c)}
        onBlur={() => setTouched(true)}
        placeholder={placeholder}
        required={required}
        className={invalid ? 'border-red-400' : undefined}
      />
      {invalid && <p className="mt-1.5 text-xs text-red-600">Enter a valid phone number for the selected country.</p>}
    </div>
  );
}

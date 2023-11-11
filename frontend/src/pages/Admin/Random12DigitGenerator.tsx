// Random12DigitGenerator.tsx

import React, { useState } from 'react';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
const CitizenshipNo: React.FC = () => {
  const [generatedNumber, setGeneratedNumber] = useState<string | null>(null);
  const [generatedNumbers, setGeneratedNumbers] = useState<string[]>([]);

  const generateUniqueRandom12DigitNumber = () => {
    while (true) {
      const randomNumber = Math.floor(Math.random() * 1000000000000);
      const twelveDigitNumber = randomNumber.toString().padStart(12, '0');

      if (!generatedNumbers.includes(twelveDigitNumber)) {
        setGeneratedNumbers([...generatedNumbers, twelveDigitNumber]);
        setGeneratedNumber(twelveDigitNumber);
        break;
      }
    }
  };

  return (
    <div>
      <h1>Random 12-Digit Number Generator</h1>
      <button onClick={generateUniqueRandom12DigitNumber}>
        Generate Unique 12-Digit Number
      </button>
      {generatedNumber && (
        <p>Generated 12-Digit Number: {generatedNumber} Give this number to a user who is registering on the site.</p>
      )}
    </div>
  );
};

export default CitizenshipNo;

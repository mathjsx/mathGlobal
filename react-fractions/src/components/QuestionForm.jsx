import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

function QuestionForm({ question, selectedAnswer, onChange, disabled }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <FormControl component="fieldset">
        <FormLabel component="legend">{question.question}</FormLabel>
        <RadioGroup
          aria-label={`question-${question.index}`}
          name={`question-${question.index}`}
          value={selectedAnswer}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        >
          {question.options.map((option, i) => (
            <FormControlLabel key={i} value={option} control={<Radio />} label={option} />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default QuestionForm;

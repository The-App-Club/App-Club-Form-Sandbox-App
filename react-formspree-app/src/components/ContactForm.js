import {useForm, ValidationError} from '@formspree/react';
import styled from '@emotion/styled';
import {FormControl, TextField, Button} from '@mui/material';

const StyledContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 2vh auto 0;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 10px;
  }
`;

const StyledFormItem = styled.div`
  width: 100%;
  padding-bottom: 2vh;
`;

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xvolbegn');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  const handleClick = (e) => {
    handleSubmit(e);
  };
  return (
    <StyledContainer>
      <form onSubmit={handleSubmit}>
        <StyledFormItem>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </StyledFormItem>
        <StyledFormItem>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </StyledFormItem>
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </StyledContainer>
  );
};

export {ContactForm};

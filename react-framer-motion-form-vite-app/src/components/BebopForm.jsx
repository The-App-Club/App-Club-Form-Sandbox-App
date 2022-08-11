import {css, cx} from '@emotion/css';
import {useMemo, useRef, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {BebopMessage} from './BebopMessage';
import {Spacer} from './Spacer';

import {BsEye} from 'react-icons/bs';
import {BsEyeSlash} from 'react-icons/bs';

import * as yup from 'yup';
import YupPassword from 'yup-password';
import {useEffect} from 'react';
YupPassword(yup);

const BebopForm = ({setOpen}) => {
  const [disabled, setDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(null);
  const [showEmailSuccessMessage, setShowEmailSuccessMessage] = useState(null);
  const [showEmailErrorMessage, setShowEmailErrorMessage] = useState(null);
  const [showPasswordErrorMessage, setShowPasswordErrorMessage] =
    useState(null);
  const [showPasswordSuccessMessage, setShowPasswordSuccessMessage] =
    useState(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const emailChecker = useMemo(() => {
    return yup.string().email().required();
  }, []);

  const passwordChecker = useMemo(() => {
    // https://github.com/knicola/yup-password/blob/master/index.js#L91-L99
    return yup.string().password().required();
  }, []);

  const handleSubmit = async (e) => {
    // validation... like yup
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    let correctEmail,
      correctPassword = null;
    try {
      const resultEmailCheck = await emailChecker.validate(email);
      correctEmail = resultEmailCheck;
    } catch (error) {
      setShowEmailErrorMessage(error.message);
      return;
    }
    try {
      const resultPasswordCheck = await passwordChecker.validate(password);
      correctPassword = resultPasswordCheck;
    } catch (error) {
      setShowPasswordErrorMessage(error.message);
      return;
    }
    if (!correctEmail) {
      return;
    }
    if (!correctPassword) {
      return;
    }
    console.log(`correctEmail, correctPassword`, correctEmail, correctPassword);
    setTimeout(() => {
      setShowSuccessMessage('Nice work, have a bebop!');
      setDisabled(true);
    }, 300);
  };

  const yesYouCan = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      await emailChecker.validate(email);
      await passwordChecker.validate(password);
      if (showSuccessMessage) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    } catch (error) {
      setDisabled(true);
    }
  };

  const handleChangeEmail = async (e) => {
    const email = emailRef.current.value;
    try {
      await emailChecker.validate(email);
      setShowEmailErrorMessage('');
      setShowEmailSuccessMessage('Great Email!');
      await yesYouCan();
    } catch (error) {
      setShowEmailErrorMessage(error.message);
      setShowEmailSuccessMessage('');
      setDisabled(true);
      return;
    }
  };

  const handleChangePassword = async (e) => {
    const password = passwordRef.current.value;
    try {
      await passwordChecker.validate(password);
      setShowPasswordErrorMessage('');
      setShowPasswordSuccessMessage('Great Password!');
      await yesYouCan();
    } catch (error) {
      setShowPasswordErrorMessage(error.message);
      setShowPasswordSuccessMessage('');
      setDisabled(true);
      return;
    }
  };

  useEffect(() => {
    setDisabled(true);
  }, [showSuccessMessage]);

  const renderMessage = ({successMessage, errorMessage, initialMessage}) => {
    if (successMessage) {
      return <BebopMessage message={successMessage} type={'success'} />;
    } else if (errorMessage) {
      return <BebopMessage message={errorMessage} type={'danger'} />;
    } else {
      return <Spacer height="2.5rem" />;
    }
  };

  const handleShowPassword = (e) => {
    setShowPassword((prevState) => {
      return !prevState;
    });
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        return false;
      }}
      className={css`
        position: relative;
        max-width: 20rem;
        min-height: 26rem;
        width: 100%;
        margin: 0 auto;
        font-family: 'Inter', sans-serif !important;
      `}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          ref={emailRef}
          onChange={handleChangeEmail}
          onBlur={handleChangeEmail}
          onKeyUp={handleChangeEmail}
        />
        <Form.Text
          className={cx(
            css`
              padding: 0.5rem 0;
            `,
            'text-muted'
          )}
        >
          We'll never share your email with anyone else.
        </Form.Text>
        <Spacer height="0.5rem" />
        {renderMessage({
          successMessage: showEmailSuccessMessage,
          errorMessage: showEmailErrorMessage,
          initialMessage: '',
        })}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <div
          className={css`
            display: flex;
            align-items: center;
            gap: 0.5rem;
            svg {
              cursor: pointer;
            }
          `}
        >
          <Form.Control
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            ref={passwordRef}
            onChange={handleChangePassword}
            onBlur={handleChangePassword}
            onKeyUp={handleChangePassword}
          />
          {showPassword ? (
            <BsEye size={24} onClick={handleShowPassword} />
          ) : (
            <BsEyeSlash size={24} onClick={handleShowPassword} />
          )}
        </div>
        <Form.Text
          className={cx(
            css`
              padding: 0.5rem 0;
            `,
            'text-muted'
          )}
        >
          at least 8 characters, at most 250 characters, at least 1 lowercase
          letter, at least 1 uppercase letter, at least 1 number and at least 1
          symbol.
        </Form.Text>
        <Spacer height="0.5rem" />
        {renderMessage({
          successMessage: showPasswordSuccessMessage,
          errorMessage: showPasswordErrorMessage,
          initialMessage: '',
        })}
      </Form.Group>
      <div
        className={css`
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          right: 0;
          bottom: 0;
        `}
      >
        {showSuccessMessage ? (
          <BebopMessage message={showSuccessMessage} type={'success'} />
        ) : (
          <Spacer height="2.5rem" />
        )}
        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}
          disabled={disabled}
        >
          Submit
        </Button>
      </div>
    </Form>
  );
};

export {BebopForm};

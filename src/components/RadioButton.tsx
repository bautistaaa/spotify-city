import { FC } from 'react';
import styled from 'styled-components/macro';

const RadioButton: FC<{
  id: string;
  name: string;
  value: string;
  isChecked: boolean;
}> = ({ id, name, isChecked, value }) => {
  return (
    <Wrapper>
      <input
        id={id}
        name={name}
        value={value}
        type="radio"
        defaultChecked={isChecked}
      />
      <label htmlFor={id} className="radio-label">
        {id}
      </label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0.5rem;
  input {
    position: absolute;
    opacity: 0;
    + .radio-label {
      cursor: pointer;
      text-transform: capitalize;
      &:before {
        content: '';
        background: #f4f4f4;
        border-radius: 100%;
        border: 1px solid black;
        display: inline-block;
        width: 1.4em;
        height: 1.4em;
        position: relative;
        margin-right: 1em;
        vertical-align: top;
        cursor: pointer;
        text-align: center;
      }
    }
    &:checked {
      + .radio-label {
        &:before {
          background-color: #3197ee;
          box-shadow: inset 0 0 0 4px #f4f4f4;
        }
      }
    }
    &:focus {
      + .radio-label {
        &:before {
          outline: none;
          border-color: black;
        }
      }
    }
    + .radio-label {
      &:empty {
        &:before {
          margin-right: 0;
        }
      }
    }
  }
`;

export default RadioButton;

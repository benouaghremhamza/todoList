import styled from 'styled-components';

export default (component) => styled(component)`
  width: 90%;

  .form-inputs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > label {
      margin: 3rem 0;
      width: 48%;
      display: flex;
      flex-direction: column;

      > input {
        margin: 2rem 0;
      }
    }
  }
`;

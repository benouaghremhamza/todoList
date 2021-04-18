import styled from 'styled-components';

export default (component) => styled(component)`
  width: 25vw;
  position: fixed;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  @media screen and (max-width: 800px) {
    width: 50vw;
  }

  .form-inputs {
    display: flex;
    flex-direction: Column;
    justify-content: space-around;

    > label {
      font-size: 1.5rem;
      display: flex;
      flex-direction: column;

      > input {
        margin: 2rem 0;
      }
    }
  }
`;

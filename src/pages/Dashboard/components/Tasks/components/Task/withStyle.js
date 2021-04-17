import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';

export default (component) => styled(component)`
  .task {
    width: 90%;
    border: solid 0.1rem ${themeGet('colors.lightGray')};
    border-radius: 0.5rem;
    padding: 0.5rem 2rem;
    height: 4rem;
    display: flex;
    align-items: center;
    animation: appear 0.5s ease-in-out;
    margin-bottom: 0.5rem;

    &--item {
      margin-right: 2rem;
      font-size: ${themeGet('sizes.sm')};
      text-transform: capitalize;

      &--title {
        font-weight: 700;
      }

      &--delete-btn {
        margin-right: auto;
        background-color: transparent;
        border: none;
        color: ${themeGet('colors.blue')};
      }
    }

    &--deleted {
      animation: disappear 0.29s ease-in-out;
    }
  }

  @keyframes appear {
    0% {
      opacity: 0;
      transform: translateY(5rem);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  @keyframes disappear {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateX(-10rem);
    }
  }
`;

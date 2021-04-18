import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';

export default (component) => styled(component)`
  .task {
    border: solid 0.1rem ${themeGet('colors.lightGray')};
    border-radius: 0.5rem;
    padding: 0.5rem 2rem;
    height: 4rem;
    display: flex;
    align-items: center;
    animation: appear 0.5s ease-in-out;
    margin-bottom: 0.5rem;
    width: 100%;
    outline: none;

    &--item {
      margin-right: 2rem;
      font-size: ${themeGet('sizes.sm')};
      text-transform: capitalize;
      transition: all 0.4s;

      &--title {
        font-weight: 700;
      }

      &--title,
      &--content {
        text-decoration: ${({ task: { state } }) =>
          state === 'pending' ? 'none' : 'line-through'};
      }

      &--status {
        margin-left: auto;
        border-radius: 0.5rem;
        padding: 0.5rem;
        color: ${themeGet('colors.white')};
        background-color: ${({ task: { state } }) =>
          state === 'pending'
            ? themeGet('colors.red')
            : themeGet('colors.green')};
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

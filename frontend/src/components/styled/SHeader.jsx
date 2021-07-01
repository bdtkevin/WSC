import styled from 'styled-components';

const SHeader = styled.header`
  display: grid;
  grid-template-columns: 220px 1fr;
  align-items: center;
  width: 100%;
  height: 120px;
  padding: 0 20px;

  .searchbar-login {
    display: flex;
    justify-content: space-between;

    .searchbar {
      padding-left: 20px;

      .input-searchbar {
        width: 280px;
        height: 60px;
        background-color: #252d41;
        border: none;
        border-radius: 12px;
        outline: none;
        padding: 0 10px;

        &::placeholder {
          color: #d2d2d2;
        }
      }
    }

    .login {
      .btn-account {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background-color: transparent;
        border: none;
        cursor: pointer;

        &:hover {
          .btn-text {
            color: #afafaf;
            transform: translateX(5px);
          }

          .btn-icon {
            fill: #afafaf;
            transform: translateX(-5px);
          }
        }

        &:active {
          transform: translate(1px, 1px);
        }

        .btn-text {
          color: #d2d2d2;
          padding-right: 20px;
          font-size: 20px;
          transition: 0.2s ease-in-out;
        }

        .btn-icon {
          width: 50px;
          height: 50px;
          fill: #d2d2d2;
          transition: 0.2s ease-in-out;
        }
      }
    }
  }
`;

export default SHeader;

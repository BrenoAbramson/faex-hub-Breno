import styled, { keyframes } from 'styled-components';

interface FloatingAvatarProps {
    $delay?: string;
    $top?: string;
    $bottom?: string;
    $left?: string;
    $right?: string;
    $hideOnMobile?: boolean;
}

const float = keyframes`
    0% {
        transform: translateY(0) rotate(0deg);
        }
    33% {
        transform: translateY(-15px) rotate(2deg);
        }
    66% {
        transform: translateY(10px) rotate(-2deg);
        }
`;

export const FloatingAvatars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

export const FloatingAvatar = styled.div<FloatingAvatarProps>`
  position: absolute;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay || "0s"};

  ${(props) => props.$top && `top: ${props.$top};`}
  ${(props) => props.$bottom && `bottom: ${props.$bottom};`}
  ${(props) => props.$left && `left: ${props.$left};`}
  ${(props) => props.$right && `right: ${props.$right};`}

  @media (max-width: 768px) {
    display: ${(props) => (props.$hideOnMobile ? "none" : "block")};
  }
`;

export const LoginContainer = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e8ecff;
    overflw: hidden;
    padding: 20px;
`;

export const LoginCard = styled.div`
    background: rgba(255, 255, 255, 0.97);
    backdrop-filter: blur(10px);
    border-radius: 24px;
    padding: 48px 40px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    width: 100%;
    max-width: 460px;
    z-index: 1;
    position: relative;

    @media (min-width: 1024px) {
        max-width: 480px;
        padding: 52px 44px;
    }
`;

export const Logo = styled.img`
    display: block;
    max-width: 180px;
    height:auto;
    margin: 0 auto 16px;

    @media (min-width: 1024px) {
        max-width: 200px;
    }

`;

export const Divider =styled.hr`
    border: none;
    border-top: 1.5px solid #e2e8f0;
    margin: 0 auto 24px;
    width: 60%;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 32px;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.6rem;
    margin-bottom: 36px;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  display: block;
  padding: 14px;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  color: #fff;
  background: #1e2533;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 12px;
  height: 52px;
  transition: background 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease;

  &:hover {
    background: #151b27;
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(30, 37, 51, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const CadastrarButton = styled.button`
  width: 100%;
  display: block;
  padding: 14px;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  color: #2d3748;
  background: #fff;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 12px;
  height: 52px;
  transition: background 0.2s ease, transform 0.1s ease, border-color 0.2s ease;

  &:hover {
    background: #f7f8fc;
    border-color: #b0b8c9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ForgotPasswordLink = styled.button`
  display: block;
  margin: 16px auto 0;
  background: none;
  border: none;
  color: #4a5568;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #2d3748;
    text-decoration: underline;
  }
`;
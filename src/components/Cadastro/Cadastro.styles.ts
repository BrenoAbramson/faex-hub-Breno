import styled from "styled-components";

// ============================================================
// CONTAINER E CARD
// ============================================================

export const CadastroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8ecff;
  padding: 20px;
`;

export const CadastroCard = styled.div`
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 48px 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 520px;

  @media (min-width: 1024px) {
    max-width: 560px;
    padding: 52px 44px;
  }
`;

export const Logo = styled.img`
  display: block;
  max-width: 180px;
  height: auto;
  margin: 0 auto 16px;

  @media (min-width: 1024px) {
    max-width: 200px;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1.5px solid #e2e8f0;
  margin: 0 auto 24px;
  width: 60%;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e2533;
  margin-bottom: 24px;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.6rem;
  }
`;

// ============================================================
// STEPPER
// ============================================================

export const StepperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

interface StepCircleProps {
  $active: boolean;
  $completed: boolean;
}

export const StepCircle = styled.div<StepCircleProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.3s ease;

  background: ${(props) =>
    props.$active || props.$completed ? "#1e2533" : "#e2e8f0"};
  color: ${(props) =>
    props.$active || props.$completed ? "#fff" : "#a0aec0"};
  border: 2px solid
    ${(props) =>
      props.$active || props.$completed ? "#1e2533" : "#e2e8f0"};

  & svg {
    font-size: 20px;
  }
`;

interface StepLabelProps {
  $active: boolean;
}

export const StepLabel = styled.span<StepLabelProps>`
  font-size: 0.85rem;
  font-weight: ${(props) => (props.$active ? "600" : "400")};
  color: ${(props) => (props.$active ? "#1e2533" : "#a0aec0")};
`;

export const StepLine = styled.div`
  width: 100px;
  height: 2px;
  background: #c8cdd5;
  margin: 0 12px;
  margin-bottom: 28px;

  @media (min-width: 1024px) {
    width: 140px;
  }
`;

// ============================================================
// FORM LAYOUT
// ============================================================

export const FormRow = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0;
  }
`;

interface FieldGroupProps {
  $flex?: number;
}

export const FieldGroup = styled.div<FieldGroupProps>`
  flex: ${(props) => props.$flex || 1};
  margin-bottom: 18px;
`;

export const FieldLabel = styled.label`
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 6px;
`;

// ============================================================
// INPUTS
// ============================================================

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 14px;
  font-size: 0.9rem;
  font-family: inherit;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  background: #fff;
  outline: none;
  color: #2d3748;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: #a0aec0;
  }

  &:hover {
    border-color: #b0b8c9;
  }

  &:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

export const InputWithAdornment = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  & ${StyledInput} {
    padding-right: 44px;
  }
`;

export const AdornmentButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  color: #a0aec0;
  padding: 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  & svg {
    font-size: 18px;
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 12px 14px;
  font-size: 0.9rem;
  font-family: inherit;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  background: #fff;
  outline: none;
  color: #2d3748;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23a0aec0' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 36px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: #b0b8c9;
  }

  &:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 12px 14px;
  font-size: 0.9rem;
  font-family: inherit;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  background: #fff;
  outline: none;
  color: #2d3748;
  resize: vertical;
  min-height: 80px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: #a0aec0;
  }

  &:hover {
    border-color: #b0b8c9;
  }

  &:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

// ============================================================
// RADIO BUTTONS
// ============================================================

export const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 4px;
`;

export const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  color: #2d3748;

  input[type="radio"] {
    width: 18px;
    height: 18px;
    accent-color: #1e2533;
    cursor: pointer;
  }
`;

// ============================================================
// BOTOES E LINKS
// ============================================================

export const SubmitButton = styled.button`
  width: 100%;
  max-width: 200px;
  display: block;
  margin: 24px auto 0;
  padding: 14px;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  color: #fff;
  background: #1e2533;
  border: none;
  border-radius: 10px;
  cursor: pointer;
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

export const BackLink = styled.button`
  display: block;
  margin: 16px auto 0;
  background: none;
  border: none;
  color: #4a5568;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #2d3748;
    text-decoration: underline;
  }
`;
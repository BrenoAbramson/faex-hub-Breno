import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  CadastroContainer,
  CadastroCard,
  Logo,
  Divider,
  Title,
  StepperContainer,
  StepWrapper,
  StepCircle,
  StepLine,
  StepLabel,
  FormRow,
  FieldGroup,
  FieldLabel,
  StyledInput,
  InputWithAdornment,
  AdornmentButton,
  StyledSelect,
  StyledTextarea,
  RadioGroup,
  RadioOption,
  SubmitButton,
  BackLink
} from "./Cadastro.styles";

// Funções de formatação
const formatPhone = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .slice(0, 15);
};

const formatCPF = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2')
    .slice(0, 14);
};

const formatCEP = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .slice(0, 9);
};

// Lista de estados brasileiros
const ESTADOS_BR = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG",
  "PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO",
];

const Cadastro = () => {
  const navigate = useNavigate();
  const [passo, setPasso] = useState(1);

  // === Passo 1 — Perfil ===
  const [nome, setNome] = useState("");
  const [sexo, setSexo] = useState("masculino");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  // === Passo 2 — Endereço ===
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [complemento, setComplemento] = useState("");
  
  const handleAvancar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    setPasso(2);
  };

  const handleFinalizar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Cadastro:", {
      nome, sexo, dataNascimento, telefone, cpf, email, senha,
      cep, bairro, numero, cidade, uf, endereco, complemento,
    });
  };

  return (
    <CadastroContainer>
      <CadastroCard>
        <Logo src="/logo-faex-hub.png" alt="Logo FAEX Hub" />
        <Divider />
        <Title>Novo cadastro</Title>

        {/* Stepper */}
        <StepperContainer>
          <StepWrapper>
            <StepCircle $active={passo === 1} $completed={passo > 1}>
              {passo > 1 ? <Check /> : "1"}
            </StepCircle>
            <StepLabel $active={passo === 1}>Perfil</StepLabel>
          </StepWrapper>

          <StepLine />

          <StepWrapper>
            <StepCircle $active={passo === 2} $completed={false}>
              2
            </StepCircle>
            <StepLabel $active={passo === 2}>Meu endereço</StepLabel>
          </StepWrapper>
        </StepperContainer>

        {/* === PASSO 1 — Perfil === */}
        {passo === 1 && (
          <form onSubmit={handleAvancar}>
            <FieldGroup>
              <FieldLabel>Nome do aluno</FieldLabel>
              <StyledInput
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite o nome do aluno"
                required
              />
            </FieldGroup>

            <FormRow>
              <FieldGroup>
                <FieldLabel>Sexo</FieldLabel>
                <RadioGroup>
                  <RadioOption>
                    <input
                      type="radio"
                      name="sexo"
                      value="masculino"
                      checked={sexo === "masculino"}
                      onChange={(e) => setSexo(e.target.value)}
                    />
                    Masculino
                  </RadioOption>
                  <RadioOption>
                    <input
                      type="radio"
                      name="sexo"
                      value="feminino"
                      checked={sexo === "feminino"}
                      onChange={(e) => setSexo(e.target.value)}
                    />
                    Feminino
                  </RadioOption>
                </RadioGroup>
              </FieldGroup>

              <FieldGroup>
                <FieldLabel>Data de nascimento</FieldLabel>
                <StyledInput
                  type="date"
                  value={dataNascimento}
                  onChange={(e) => setDataNascimento(e.target.value)}
                  required
                />
              </FieldGroup>
            </FormRow>

            <FieldGroup>
              <FieldLabel>Telefone</FieldLabel>
              <StyledInput
                type="tel"
                value={telefone}
                onChange={(e: any) => setTelefone(formatPhone(e.target.value))}
                placeholder="(00) 00000-0000"
                required
              />
            </FieldGroup>

            <FieldGroup>
              <FieldLabel>CPF</FieldLabel>
              <StyledInput
                type="text"
                value={cpf}
                onChange={(e: any) => setCpf(formatCPF(e.target.value))}
                placeholder="000.000.000-00"
                required
              />
            </FieldGroup>

            <FieldGroup>
              <FieldLabel>Email</FieldLabel>
              <StyledInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite o email"
                required
              />
            </FieldGroup>

            <FieldGroup>
              <FieldLabel>Senha</FieldLabel>
              <InputWithAdornment>
                <StyledInput
                  type={mostrarSenha ? "text" : "password"}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Digite sua senha"
                  required
                />
                <AdornmentButton
                  type="button"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
                >
                  {mostrarSenha ? <VisibilityOff /> : <Visibility />}
                </AdornmentButton>
              </InputWithAdornment>
            </FieldGroup>

            <FieldGroup>
              <FieldLabel>Confirmar Senha</FieldLabel>
              <InputWithAdornment>
                <StyledInput
                  type={mostrarConfirmarSenha ? "text" : "password"}
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                  placeholder="Confirme sua senha"
                  required
                />
                <AdornmentButton
                  type="button"
                  onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}
                  aria-label={mostrarConfirmarSenha ? "Ocultar senha" : "Mostrar senha"}
                >
                  {mostrarConfirmarSenha ? <VisibilityOff /> : <Visibility />}
                </AdornmentButton>
              </InputWithAdornment>
            </FieldGroup>

            <SubmitButton type="submit">Avançar</SubmitButton>
            <BackLink type="button" onClick={() => navigate("/login")}>
              Já tem uma conta? Entrar
            </BackLink>
          </form>
        )}

        {/* === PASSO 2 — Endereço === */}
        {passo === 2 && (
          <form onSubmit={handleFinalizar}>
            <FieldGroup>
              <FieldLabel>CEP</FieldLabel>
              <StyledInput
                type="text"
                value={cep}
                onChange={(e) => setCep(formatCEP(e.target.value))}
                inputMode="numeric"
                maxLength={9}
                placeholder="Digite seu CEP"
                required
              />
            </FieldGroup>

            <FormRow>
              <FieldGroup $flex={2}>
                <FieldLabel>Bairro</FieldLabel>
                <StyledInput
                  type="text"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                  placeholder="Digite seu Bairro"
                  required
                />
              </FieldGroup>

              <FieldGroup $flex={1}>
                <FieldLabel>Número</FieldLabel>
                <StyledInput
                  type="text"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  placeholder="Número"
                  required
                />
              </FieldGroup>
            </FormRow>

            <FormRow>
              <FieldGroup $flex={2}>
                <FieldLabel>Cidade</FieldLabel>
                <StyledSelect
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  required
                >
                  <option value="">Selecionar...</option>
                  <option value="Lavras">Lavras</option>
                  <option value="Belo Horizonte">Belo Horizonte</option>
                  <option value="São Paulo">São Paulo</option>
                  <option value="Rio de Janeiro">Rio de Janeiro</option>
                  <option value="Extrema">Rio de Janeiro</option>
                </StyledSelect>
              </FieldGroup>

              <FieldGroup $flex={1}>
                <FieldLabel>UF</FieldLabel>
                <StyledSelect
                  value={uf}
                  onChange={(e) => setUf(e.target.value)}
                  required
                >
                  <option value="">Selecionar...</option>
                  {ESTADOS_BR.map((estado) => (
                    <option key={estado} value={estado}>
                      {estado}
                    </option>
                  ))}
                </StyledSelect>
              </FieldGroup>
            </FormRow>

            <FieldGroup>
              <FieldLabel>Endereço</FieldLabel>
              <StyledInput
                type="text"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                placeholder="Digite seu Endereço"
                required
              />
            </FieldGroup>

            <FieldGroup>
              <FieldLabel>Complemento</FieldLabel>
              <StyledTextarea
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
                placeholder="Ex: Ao lado da Escola rivadavia"
              />
            </FieldGroup>

            <SubmitButton type="submit">Finalizar</SubmitButton>
            <BackLink type="button" onClick={() => navigate("/login")}>
              Já tem uma conta? Entrar
            </BackLink>
          </form>
        )}
      </CadastroCard>
    </CadastroContainer>
  );
};

export default Cadastro;

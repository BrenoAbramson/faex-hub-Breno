import { type FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdornmentButton, FieldGroup, FieldLabel, InputWithAdornment, StyledInput } from '../Cadastro/Cadastro.styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Avatar from "../Avatar/Avatar";


import{
    CadastrarButton,
    Divider,
    FloatingAvatar,
    FloatingAvatars,
    ForgotPasswordLink,
    LoginButton,
    LoginCard,
    LoginContainer,
    Logo,
    Title,
} from './Login.styles';


interface AvatarData {
  src: string;
  alt: string;
  color: string;
  size: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  delay: string;
  hideOnMobile?: boolean;
}

const avatars: AvatarData[] = [
  {
    src: "/rosto_01.png", // Caminho da imagem (pasta public)
    alt: "Usuário 1", // Texto alternativo (acessibilidade)
    color: "#f8c8d4", // Cor de fundo do avatar
    size: 120, // Tamanho em pixels
    top: "18%", // Posição: 18% do topo da tela
    left: "6%", // Posição: 6% da esquerda
    delay: "0s", // Atraso na animação (começa imediatamente)
  },
  {
    src: "/rosto_02.png",
    alt: "Usuário 2",
    color: "#f4a6a0",
    size: 85,
    top: "6%",
    right: "28%",
    delay: "1s", // Começa a animação 1 segundo depois
  },
  {
    src: "/rosto_03.png",
    alt: "Usuário 3",
    color: "#f5b0a8",
    size: 115,
    top: "8%",
    right: "4%",
    delay: "2s",
  },
  {
    src: "/rosto_04.png",
    alt: "Usuário 4",
    color: "#a8dbc5",
    size: 55,
    top: "42%",
    right: "16%",
    delay: "3s",
  },
  {
    src: "/rosto_05.png",
    alt: "Usuário 5",
    color: "#c8b8e8",
    size: 80,
    top: "45%",
    left: "16%",
    delay: "1.5s",
    hideOnMobile: true, // Este avatar será ESCONDIDO em telas pequenas (celular)
  },
  {
    src: "/rosto_06.png",
    alt: "Usuário 6",
    color: "#b8dfc8",
    size: 105,
    bottom: "10%", // Posição: 10% do fundo da tela
    left: "5%",
    delay: "2.5s",
  },
  {
    src: "/rosto_07.png",
    alt: "Usuário 7",
    color: "#f0cfa0",
    size: 130,
    bottom: "8%",
    right: "3%",
    delay: "0.5s",
    hideOnMobile: true,
  },
];



export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //Validação de email e senha.
        const emailValido = email.trim().toLowerCase() === "admin@admin.com";
        const senhaValida = senha === "123";
        if (emailValido && senhaValida) {
            navigate("/dashboard");
            return;
        } else {
        alert("Email ou senha inválidos(Correto: admin@admin.com / 123)");
        };
    };

    const handleEsqueceuSenha = () => {
        console.log("Esqueci minha senha");
    };

    return (
        <LoginContainer>
            <FloatingAvatars>
                {avatars.map((avatar, index) => (
                    <FloatingAvatar
                        key={index}
                        // Props com "$" na frente: convenção do styled-components para props
                        // que são usadas APENAS para estilização (não são passadas ao DOM HTML).
                        // Isso evita warnings no console do navegador.
                        $delay={avatar.delay}
                        $top={avatar.top}
                        $bottom={avatar.bottom}
                        $left={avatar.left}
                        $right={avatar.right}
                        $hideOnMobile={avatar.hideOnMobile}
                    >
                        {/* Componente Avatar reutilizável que criamos */}
                        <Avatar
                        src={avatar.src}
                        alt={avatar.alt}
                        color={avatar.color}
                        size={avatar.size}
                        />
                    </FloatingAvatar>
                    ))}
            </FloatingAvatars>
            <LoginCard>
                <Logo src="/logo-faex-hub.png" alt="Logo da FAEX Hub" />
               <Divider />

               <Title>Entre na sua Conta</Title>

                <form onSubmit={handleSubmit}>
                    {/* Campo Email */}
                    <FieldGroup>
                        <FieldLabel>Email</FieldLabel>
                        <StyledInput
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu email"
                            required
                        />
                    </FieldGroup>

                    {/* Campo Senha */}
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

                    {/* Botao de login*/}
                    <LoginButton 
                        type="submit"
                    >
                        Entrar
                    </LoginButton>

                    {/* Botao de Cadastro*/}
                    <CadastrarButton
                        type="button"
                        onClick={() => navigate("/cadastro")}
                    >
                        Cadastrar-se
                    </CadastrarButton>
                    <ForgotPasswordLink
                        onClick={handleEsqueceuSenha}
                    >
                        Esqueceu seu senha?
                    </ForgotPasswordLink>
                
                </form>
                
            </LoginCard>
        </LoginContainer>
    );
}
import { Box } from "@mui/material";
import styled from "styled-components";

interface AvatarProps {
  src?: string;
  alt?: string;
  className?: string;
  color?: string;
  size?: number;
}

// Interface para as props dinâmicas do AvatarContainer (styled-component).
interface AvatarContainerProps {
  color: string;
  size: number;
}

const AvatarContainer = styled(Box)<AvatarContainerProps>`
  border-radius: 50%; /* Torna o elemento perfeitamente circular */
  display: flex;
  align-items: center; /* Centraliza o conteúdo verticalmente */
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  overflow: hidden; /* Esconde qualquer parte da imagem que ultrapasse o círculo */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Sombra suave ao redor */
  border: 3px solid rgba(255, 255, 255, 0.6); /* Borda branca semitransparente */
  transition: transform 0.3s ease; /* Animação suave ao passar o mouse */

  /* Props dinâmicas: o styled-components permite acessar as props do componente
     para gerar CSS dinâmico. Aqui, "color" e "size" são passados como props. */
  background: ${(props) => props.color};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  /* Efeito hover: ao passar o mouse, o avatar aumenta 10% de tamanho. */
  &:hover {
    transform: scale(1.1);
  }

  /* Estiliza a tag <img> que está DENTRO do AvatarContainer. */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* A imagem preenche o espaço sem distorcer */
  }
`;

const AvatarPlaceholder = styled.div`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
`;

export default function Avatar({ src, alt, className = "", color = "#667eea", size = 60 }: AvatarProps) {
  return (
    <AvatarContainer className={className} color={color} size={size}>
      {/* Renderização condicional com operador ternário (condição ? verdadeiro : falso).
          Se "src" existir (tiver valor), exibe a imagem.
          Se "src" for vazio/undefined, exibe o placeholder com o texto "alt". */}
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <AvatarPlaceholder>{alt}</AvatarPlaceholder>
      )}
    </AvatarContainer>
  );
};

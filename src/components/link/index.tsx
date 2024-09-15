import { StyledButton } from "./style"

interface IButtonLinkProps {
    title: string,
    color: string,
    link: string,
}

export const ButtonLink = ({ title, color, link }: IButtonLinkProps) => {
    return (
        <>
            <StyledButton
                bgColor={color}
                rel="noopener noreferrer"
                onClick={() => window.open(link, '_blank')}
            >
                {title}
            </StyledButton>
        </>
    )
}
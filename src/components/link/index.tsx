import { StyledLink } from "./style"

interface IButtonLinkProps {
    title: string,
    color: string,
    link: string,
}

export const ButtonLink = ({ title, color, link }: IButtonLinkProps) => {
    return (
        <>
            <StyledLink
                to={link}
                bgColor={color}
                target="_blank"
                rel="noopener noreferrer"
            >
                {title}
            </StyledLink>
        </>
    )
}
import { StyledGithub } from "./style"
import GithubImg from "/github.png"

export const Github = () => {
    return (
        <>
            <StyledGithub src={GithubImg} onClick={() => window.open("https://github.com/loregbrw", '_blank')} />
        </>
    )
}
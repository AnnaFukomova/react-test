import GitHubIconBlack from "./img/gitHub-black.svg"
import "./style.css"

const BtnGitHub = ({link}) => {
    return (
        <>
            <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
                <img src={GitHubIconBlack} alt=""/>
                GitHub repo
            </a>
        </>
    );
}
 
export default BtnGitHub;
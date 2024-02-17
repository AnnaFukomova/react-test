import { useParams } from "react-router-dom";
import {projects} from "./../helpers/projectsList";

import BtnGitHub from "../components/btnGit/BtnGitHub";

const ProjectPage = () => {
    const {id} = useParams();
    const progectInfo = projects[id];
    // console.log(progectInfo)

    return (  
        <main className="section">
            <div className="container">
                <div className="project-details">
                    
                    <h1 className="title-1">{progectInfo.title}</h1>
                    <img src={progectInfo.imgBig} alt={progectInfo.title} className="project-details__cover"/>

                    <div className="project-details__desc">
                        <p>{progectInfo.skills}</p>
                    </div>
                    {progectInfo.gitHub && (
                        <BtnGitHub link="https://github.com"/>
                    )}
                    
                </div>
            </div>
        </main>
    );
}

export default ProjectPage;
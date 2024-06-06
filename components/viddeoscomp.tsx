import {videoprop} from "./videoscomp.tsx"
import Buttonfav from "../islands/favbutton.tsx"
import Logout from "../islands/Butonlogout.tsx"
type videosprop = {
    video: videoprop,
    iduser:string,
    name:string
  };


export default function VideosComp(videoprops:videosprop){
    return(
        <html>

    <body>
        <div class="page-container">
            <header class="header-container">
                <div class="header-content">
                    <span class="user-name">{videoprops.name}</span>
                    <Logout/>
                </div>
            </header>
            <div class="video-detail-container">
                <a href="/videos" class="back-button">← Go Back to List</a>
                <div class="video-frame">
                    <iframe width="100%" height="400px" src={`https://www.youtube.com/embed/${videoprops.video.youtubeid} `}title={videoprops.video.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <h2 class="video-detail-title">{videoprops.video.title}</h2>
                <p class="video-detail-description">{videoprops.video.description}</p>
               <Buttonfav
               iduser={videoprops.iduser}
               idvid={videoprops.video.id}
               favorito={videoprops.video.fav}/>
            </div>
        </div>

    </body>
</html>

    );
}
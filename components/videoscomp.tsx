import Buttonfav from "../islands/favbutton.tsx"
import Logout from "../islands/Butonlogout.tsx"


export type videoprop = {
  title: string;
  thumbnail: string;
  description: string;
  duration: number;
  youtubeid: string;
  date: string;
  id: string;
  fav: false;
  
};
type videosprop = {
  videos: videoprop[],
  iduser:string,
  name:string
};

export default function Videoscom(videosprop: videosprop) {
  return (
    <html>
      <body>
        <div class="page-container">
          <header class="header-container">
            <div class="header-content">
              <span class="user-name">{videosprop.name}</span>
              <Logout/>
            </div>
          </header>
          <div class="video-page-container">
            <h1 class="video-list-title">Curso Deno Fresh</h1>
            <div class="video-list-container">
              { videosprop.videos.map((char)=>(
                                <div
                                class="video-item"
                                data-fresh-key={char.id}>
                                <a href={`/video/${char.id}`} class="video-link">
                                  <img
                                    src={char.thumbnail}
                                    alt={char.title}
                                    class="video-thumbnail"
                                  />
                                  <div class="video-info">
                                    <h3 class="video-title">{char.title}</h3>
                                    <p class="video-description">
                                     {char.description}
                                    </p>
                                    <p class="video-release-date">Release date: {char.date}</p>
                                  </div>
                                </a>
                                {<Buttonfav
                                iduser={videosprop.iduser}
                                idvid={char.id}
                                favorito={char.fav}/>}
                              </div>
              ))

              }
              
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

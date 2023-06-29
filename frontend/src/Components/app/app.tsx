import photosService from "../../Services/PhotoService";
import "./app.css"
import  { useState } from 'react';
import { photoStore } from "../../Redux/PhotoState";


function App(): JSX.Element {
    //show all the photos
    const [photo, setUsePhoto] = useState<any[]>([]);
    //show the current Page
    const [currentPage, setCurrentPage] = useState(1);
    //show categories
    const [cat, setUseCat] = useState<any[]>([]);

      const changeCategory = () => {
        photosService.getCategories()
        .then(cat => setUseCat(cat))
        .catch(err => alert(err.message));
      };

      const handlePrevClick = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
          const type = photoStore.getState().image.category;
          photosService.getPhotosByCategory(type, currentPage-1)
          .then(p =>setUsePhoto(p.hits))
          .catch(err => alert(err.message));
        }
      };
    
      const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
        const type = photoStore.getState().image.category;
        photosService.getPhotosByCategory(type, currentPage+1)
        .then(p =>setUsePhoto(p.hits))
        .catch(err => alert(err.message));
      };

      function choose(c:string) {
        setCurrentPage(1);
        photosService.getPhotosByCategory(c,currentPage)
        .then(p =>setUsePhoto(p.hits) )
        .catch(err => alert(err.message));
    }
    return (
        <div className="app">
          <h1>PHOTO-GALLERY/ sivan saban</h1>
        <button type="button" className="btn btn-secondary btn-lg" onClick={()=>{changeCategory()}}>
          Category
        </button>
        <br/><br/>
        {cat.map((c) =>
          <button type="button" className="btn btn-info" key={c} onClick={()=>choose(c)}> 
            {c} 
          </button> 
        )}
        <br/><br/>
        <button type="button" className="btn btn-secondary" disabled={currentPage === 1} onClick={handlePrevClick}>prev</button>
        <button type="button" className="btn btn-secondary" onClick={handleNextClick}>next</button>
        <p>Current Page: {currentPage}</p>

        {photo.map((photo) => 
          <img
            key={photo.id}
            src={photo.previewURL}
          />
        )}
        </div>
    );
}

export default App;

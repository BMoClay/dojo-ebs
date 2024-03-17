import { useState, useEffect } from "react";
import logo1 from "./assets/logos/Fiery_Color_008 copy.png";
import logo2 from "./assets/logos/Fiery_Color_010_ok copy.png";
import logo3 from "./assets/logos/Fiery_Color_011 copy.png";
import coverImage1 from "./assets/coverImages/IMG_9389 copy.jpg";
import coverImage2 from "./assets/coverImages/IMG_9393 copy.jpg";
import coverImage3 from "./assets/coverImages/IMG_9409 copy.jpg";
import BookList from "./BookList";
import Navbar from './Navbar';



const Home = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      bookTitle: "LAWS, MATTER",
      artist: "Isabelle Cornaro",
      urlText: "isabelle-cornaro",
      year: 2024,
      pages: 44,
      size: "24 x 30 cm",
      binding: "staplebound",
      price: "EU 30.-",
      edition: "First",
      editionAmount: 220,
      attribution:
        "Published on occasion of the exhibition MOTHER, LAWS, MATTER, from March 21 to June 29, 2024, at Fondazione Giuliani, Roma by e.bs editionsbierisusanne CH-3012 Bern (main office) and IT-06031 Bevagna (PG) (additional office/non-profi t project space Via Santa Maria 7) 2024. Realized by La Tipografica Bevagna.",
      notes:
        "No text or explanation, so-called BAT - reproduced and overworked reproductions - combine to form a cinematic outline through spray paintings and their multiple enlargements into infinity.",
      bio: "Isabelle CORNARO - born 1974, France. Lives and works in Paris and Geneva - her practice includes video, installation, sculpture, painting, scenography as well as edition and artist's books...; she explores the relationship between the object and its image, the original and its copy and the interface between art and art history.",
      artistsWebsite: "https://isabellecornaro.com/",
      logo: logo1,
      coverImage: coverImage1,
    },
    {
      id: 2,
      bookTitle: "SECOND BOOK",
      artist: "second artist",
      urlText: "second-artist",
      year: 2025,
      pages: 45,
      size: "24 x 30 cm",
      binding: "staplebound",
      price: "EU 30.-",
      edition: "First",
      editionAmount: 220,
      attribution:
        "Published on occasion of the exhibition SECOND BOOK, from March 21 to June 29, 2024, at Fondazione Giuliani, Roma by e.bs editionsbierisusanne CH-3012 Bern (main office) and IT-06031 Bevagna (PG) (additional office/non-profi t project space Via Santa Maria 7) 2024. Realized by La Tipografica Bevagna.",
      notes:
        "No text or explanation, so-called BAT - reproduced and overworked reproductions - combine to form a cinematic outline through spray paintings and their multiple enlargements into infinity.",
      bio: "Second Artist bio - born 1974, France. Lives and works in Paris and Geneva - her practice includes video, installation, sculpture, painting, scenography as well as edition and artist's books...; she explores the relationship between the object and its image, the original and its copy and the interface between art and art history.",
      artistsWebsite: "https://secondartist.com/",
      logo: logo2,
      coverImage: coverImage2,
    },
    {
      id: 3,
      bookTitle: "Third BOOK",
      artist: "third artist",
      urlText: "third-artist",
      year: 2026,
      pages: 45,
      size: "24 x 30 cm",
      binding: "staplebound",
      price: "EU 30.-",
      edition: "First",
      editionAmount: 220,
      attribution:
        "Published on occasion of the exhibition third BOOK, from March 21 to June 29, 2024, at Fondazione Giuliani, Roma by e.bs editionsbierisusanne CH-3012 Bern (main office) and IT-06031 Bevagna (PG) (additional office/non-profi t project space Via Santa Maria 7) 2024. Realized by La Tipografica Bevagna.",
      notes:
        "No text or explanation, so-called BAT - reproduced and overworked reproductions - combine to form a cinematic outline through spray paintings and their multiple enlargements into infinity.",
      bio: "third Artist bio - born 1974, France. Lives and works in Paris and Geneva - her practice includes video, installation, sculpture, painting, scenography as well as edition and artist's books...; she explores the relationship between the object and its image, the original and its copy and the interface between art and art history.",
      artistsWebsite: "https://thirdartist.com/",
      logo: logo3,
      coverImage: coverImage3,
    },
    {
      id: 4,
      bookTitle: "fourth BOOK",
      artist: "fourth artist",
      urlText: "fourth-artist",
      year: 2026,
      pages: 45,
      size: "24 x 30 cm",
      binding: "staplebound",
      price: "EU 30.-",
      edition: "First",
      editionAmount: 220,
      attribution:
        "Published on occasion of the exhibition fourth BOOK, from March 21 to June 29, 2024, at Fondazione Giuliani, Roma by e.bs editionsbierisusanne CH-3012 Bern (main office) and IT-06031 Bevagna (PG) (additional office/non-profi t project space Via Santa Maria 7) 2024. Realized by La Tipografica Bevagna.",
      notes:
        "No text or explanation, so-called BAT - reproduced and overworked reproductions - combine to form a cinematic outline through spray paintings and their multiple enlargements into infinity.",
      bio: "fourth Artist bio - born 1974, France. Lives and works in Paris and Geneva - her practice includes video, installation, sculpture, painting, scenography as well as edition and artist's books...; she explores the relationship between the object and its image, the original and its copy and the interface between art and art history.",
      artistsWebsite: "https://fourthartist.com/",
      logo: logo3,
      coverImage: coverImage3,
    },
  ]);


  const handleDelete = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };
  

  return (
    <div className="home">
      {/* <BookList books={books} title="all books" handleDelete={handleDelete}
        // handleFilterYear={handleFilterYear}
      /> */}
       <BookList books={books} title="all books" handleDelete={handleDelete} />
       <Navbar books={books}/>
      {/* <button onClick={() => setYearFilter(2024)}>change year</button> */}
      {/* <BookList books={books.filter((book) => book.year === 2025)} title="2025 books"/> */}
      {/* <p>{ yearFilter }</p> */}
    </div>
  );
};

export default Home;
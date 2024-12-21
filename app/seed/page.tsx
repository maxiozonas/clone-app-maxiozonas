import { Button } from "@/components/ui/button";
import prisma from "@/app/utils/db";

export default function SeedDatabase() {
  async function postData() {
    "use server";
    await prisma.movie.createMany({
      data: [
        {
          id: 0,
          title: "Gran Turismo",
          age: 12,
          duration: 2.15,
          overview:
            "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
          videoSource:
            "https://utfs.io/f/916e1354-a1b6-4832-97ab-9fa95876b91a-bnyedt.mp4",
          imageString:
            "https://image.tmdb.org/t/p/original/r7DuyYJ0N3cD8bRKsR5Ygq2P7oa.jpg",
          release: 2023,
          category: "recent",
          youtubeString: "https://www.youtube.com/embed/GVPzGBvPrzw",
        },
        {
          id: 1,
          title: "Oppenheimer",
          imageString: "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
          age: 16,
          duration: 3.0,
          overview: "La historia del científico estadounidense J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica.",
          release: 2023,
          videoSource: "https://www.youtube.com/embed/uYPbbksJxIg",
          category: "movie",
          youtubeString: "https://www.youtube.com/watch?v=uYPbbksJxIg",
        },
        {
          id: 2,
          title: "Stranger Things",
          imageString: "https://image.tmdb.org/t/p/original/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
          age: 16,
          duration: 4.0,
          overview: "Cuando un niño desaparece, un pequeño pueblo descubre un misterio que involucra experimentos secretos, fuerzas sobrenaturales aterradoras y una niña muy extraña.",
          release: 2016,
          videoSource: "https://www.youtube.com/embed/b9EkMc79ZSU",
          category: "show",
          youtubeString: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
        },
        {
          id: 3,
          title: "The Batman",
          imageString: "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
          age: 13,
          duration: 2.95,
          overview: "Batman se adentra en el submundo de Ciudad Gótica cuando un sádico asesino deja un rastro de pistas crípticas.",
          release: 2022,
          videoSource: "https://www.youtube.com/embed/mqqft2x_Aa4",
          category: "movie",
          youtubeString: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
        },
        {
          id: 4,
          title: "Breaking Bad",
          imageString: "https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
          age: 18,
          duration: 5.0,
          overview: "Un profesor de química de secundaria con cáncer terminal se asocia con un ex estudiante para asegurar el futuro de su familia.",
          release: 2008,
          videoSource: "https://www.youtube.com/embed/HhesaQXLuRY",
          category: "show",
          youtubeString: "https://www.youtube.com/watch?v=HhesaQXLuRY",
        },
        {
          id: 5,
          title: "Inception",
          imageString: "https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
          age: 13,
          duration: 2.48,
          overview: "Un ladrón que roba secretos corporativos a través del uso de la tecnología para compartir sueños.",
          release: 2010,
          videoSource: "https://www.youtube.com/embed/YoHD9XEInc0",
          category: "movie",
          youtubeString: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        },
        {
          id: 6,
          title: "The Mandalorian",
          imageString: "https://image.tmdb.org/t/p/original/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg",
          age: 13,
          duration: 3.0,
          overview: "Las aventuras de un pistolero solitario en los confines de la galaxia, lejos de la autoridad de la Nueva República.",
          release: 2019,
          videoSource: "https://www.youtube.com/embed/aOC8E8z_ifw",
          category: "show",
          youtubeString: "https://www.youtube.com/watch?v=aOC8E8z_ifw",
        },
        {
          id: 7,
          title: "Dune",
          imageString: "https://image.tmdb.org/t/p/original/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
          age: 13,
          duration: 2.55,
          overview: "Paul Atreides, un joven brillante y talentoso, debe viajar al planeta más peligroso del universo para asegurar el futuro de su familia y su pueblo.",
          release: 2021,
          videoSource: "https://www.youtube.com/embed/n9xhJrPXop4",
          category: "movie",
          youtubeString: "https://www.youtube.com/watch?v=n9xhJrPXop4",
        },
        {
          id: 8,
          title: "The Crown",
          imageString: "https://image.tmdb.org/t/p/original/uXkqPX7WaVrp8LSnke4FSGXoF6P.jpg",
          age: 16,
          duration: 4.0,
          overview: "Sigue la vida de la Reina Isabel II desde su boda en 1947 hasta el presente.",
          release: 2016,
          videoSource: "https://www.youtube.com/embed/JWtnJjn6ng0",
          category: "show",
          youtubeString: "https://www.youtube.com/watch?v=JWtnJjn6ng0",
        },
        {
          id: 9,
          title: "The Dark Knight",
          imageString: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
          age: 13,
          duration: 2.52,
          overview: "Batman se enfrenta a su enemigo más formidable: el Joker, un criminal que busca sumir Gotham City en la anarquía.",
          release: 2008,
          videoSource: "https://www.youtube.com/embed/EXeTwQWrcwY",
          category: "movie",
          youtubeString: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
        },
        {
          id: 10,
          title: "Wednesday",
          imageString: "https://image.tmdb.org/t/p/original/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
          age: 13,
          duration: 3.5,
          overview: "Wednesday Addams es enviada a la Academia Nevermore, donde intenta dominar sus poderes psíquicos, resolver un misterio y hacer nuevos amigos.",
          release: 2022,
          videoSource: "https://www.youtube.com/embed/Q73UhUTs6y0",
          category: "show",
          youtubeString: "https://www.youtube.com/watch?v=Q73UhUTs6y0",
        },
      ],
    });
  }

  return (
    <div className="m-5">
      <form action={postData}>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
import Image from "next/image";
import prisma from "../utils/db"

async function getData() {
    const data = await prisma.movie.findMany({
        select: {
            id: true,
            title: true,
            overview: true,
            imageString: true,
            videoSource: true,
            WatchLists: true,
        },
        orderBy: {
            createdAt: 'desc'
        },
        take: 4,
    });

    return data;
}


export default async function RecentlyAdded () {

    const data = await getData();

    return (
        <div className="grid grid-cols-1 sm-grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
            {data.map((movie) => (
                <div key={movie.id} className="relative h-">
                    <Image 
                        src={movie.imageString} 
                        alt="movie" 
                        height={500}
                        width={400}
                        className="rounded-sm absolute w-full h-full object-cover" 
                    />

                    <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
                        <Image 
                            src={movie.imageString} 
                            alt="movie" 
                            height={800}
                            width={800}
                            className="rounded-sm absolute w-full h-full object-cover"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
import brownDwarf from "../assets/brown_dwarf-1.webp"
import mainSequence from "../assets/Main_Sequence-1.webp"
import neutronStars from "../assets/Neutron_Stars-1.webp"
import redDwarf from "../assets/red_dwarf-1.webp"
import whiteDwarf from "../assets/White_Dwarf-1.webp"

type Post = {
    title: string
    img: string
    content: string
}

const posts: Post[] = [
    {
        title: "Main Sequence Stars",
        img: brownDwarf,
        content: "A normal star forms from a clump of dust and gas in a stellar nursery. Over hundreds of thousands of years, the clump gains mass, starts to spin, and heats up. When the clump's core heats up to millions of degrees, nuclear fusion starts."
    },
    {
        title: "Red Giants",
        img: mainSequence,
        content: "When a main sequence star less than eight times the Sun’s mass runs out of hydrogen in its core, it starts to collapse because the energy produced by fusion is the only force fighting gravity’s tendency to pull matter together."
    },
    {
        title: "White Dwarfs",
        img: neutronStars,
        content: "After a red giant has shed all its atmosphere, only the core remains. Scientists call this kind of stellar remnant a white dwarf. A white dwarf is usually Earth-size but hundreds of thousands of times more massive."
    },
    {
        title: "Neutron Stars",
        img: redDwarf,
        content: "Neutron stars are stellar remnants that pack more mass than the Sun into a sphere about as wide as New York City’s Manhattan Island is long."
    },
    {
        title: "Red Dwarfs",
        img: whiteDwarf,
        content: "Red dwarfs are the smallest main sequence stars – just a fraction of the Sun’s size and mass. They’re also the coolest, and appear more orange in color than red."
    }
]

const CardComponent = () => {
    return (
        <>
            <div className="grid gap-y-10 2xl:grid-cols-3 xl:grid-cols-2 justify-items-center mx-20">
                {posts.map((item, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm bg-stone-300/20" key={key}>
                        <img
                            className="object-cover w-full h-48 rounded-t-lg"
                            src={item.img}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-center text-yellow-600">
                                {item.title}
                            </h4>
                            <p className="mb-2 leading-normal text-justify p-5">
                                {item.content}
                            </p>
                            <div className="flex justify-center">
                                <button className="px-4 py-2 text-sm text-blue-100 bg-teal-700 rounded-lg">
                                    Read more
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CardComponent
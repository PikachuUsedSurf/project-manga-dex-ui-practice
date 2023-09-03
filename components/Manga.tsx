import Author from "./Author"
import Description from "./Description"
import Tags from "./Tags"

function Manga() {
    return (
        <div className="grid-rows-4">
            <h1 className="text-4xl font-bold text-white mt-4">
                Saikin Haitta Shiro Madoushi ga Party Crusher de,
                Ore no Isekai Boukensha Seikatsu ga Houkai ni Kiki
                na Ken ni Tsuite</h1>
            <Tags />
            <Description />
            <Author />
        </div>        
    )
}

export default Manga
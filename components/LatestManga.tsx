import LatestMangaItem from "./LatestMangaItem";

export default function LatestManga() {
    return(
        <div className="grid gap-x-6 3xl:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1">
            <div className="grid gap-4 mt-6">
                <LatestMangaItem />
            </div>
        </div>
    )

}
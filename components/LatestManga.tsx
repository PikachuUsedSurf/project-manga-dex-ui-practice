import LatestMangaItem from "./LatestMangaItem";

export default function LatestManga() {
    return(
        <div className="grid gap-x-6 grid-col-3">
            <div className="grid gap-4 mt-6 bg-slate-500 p-4 rounded-md">
                <LatestMangaItem />
                <LatestMangaItem />
                <LatestMangaItem />
                <LatestMangaItem />
                <LatestMangaItem />
                <LatestMangaItem />
                <LatestMangaItem />
                <LatestMangaItem />
                <LatestMangaItem />
                <LatestMangaItem />
            </div>
        </div>
    )

}
export const tags = [
    {
        label: "suggestive",
    },
    {
        label: "action",
    },
    {
        label: "adventure",
    },
    {
        label: "comedy",
    }
]


const Tags = () => {
    return (
        <div className="inline-flex gap-2 mt-2">
            {tags.map((item) => (
                <div key={item.label} className=" bg-slate-600 p-2 rounded text-white">
                    {item.label}
                </div>
            ))}
       </div> 
    )
}

export default Tags
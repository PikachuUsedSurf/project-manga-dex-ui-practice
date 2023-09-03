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
        <div>
            {tags.map((item) => (
                <div key={item.label} className="flex uppercase">
                    {item.label}
                </div>
            ))}
       </div> 
    )
}

export default Tags
export default function ListItem() {
    return(
        <div className="border flex items-center mb-4 bg-[#F8F8F8] p-2">
        <div>
            <img className="w-20 h-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0yDoXLxOxrw0L7xFC7DTI8tNiMGr6WNFtIg&usqp=CAU" alt="" />
        </div>
        <div className="ml-5">
            <h1 className="font-semibold break-all text-[#303030]">Sherlock Holmes: The Complete Novels and Stories</h1>
            <p className="text-xs text-[#B7B7B7]">Conan Doyle</p>
            <p className="text-sm">Gramedia Station</p>
            <p className="text-xs text-[#545454]">Tahun 1892, 1088 Halaman</p>
        </div>
    </div>
    )
}
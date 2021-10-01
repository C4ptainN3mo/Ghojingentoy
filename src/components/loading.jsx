export default function Loading() {
   return(
    <div className="border shadow rounded-md p-2 w-full mx-auto mb-4">
    <div className="animate-pulse flex space-x-4">
      <div className=" bg-[#F8F8F8] h-24 w-20" />
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-[#F8F8F8] rounded" />
        <div className="space-y-2">
        <div className="h-4 bg-[#F8F8F8] rounded w-1/2" />
          <div className="h-4 bg-[#F8F8F8] rounded w-3/4" />
          <div className="h-4 bg-[#F8F8F8] rounded w-5/6" />
        </div>
      </div>
    </div>
  </div>
   )
}
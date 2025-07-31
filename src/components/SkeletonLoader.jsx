export default function SkeletonLoader({ count = 3 }) {
  return (
    <div className="space-y-4 animate-pulse">
      {[...Array(count)].map((_, i) => (
        <div key={i} className="flex space-x-4 rounded-md bg-gray-200 dark:bg-gray-700 p-4">
          <div className="h-24 w-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

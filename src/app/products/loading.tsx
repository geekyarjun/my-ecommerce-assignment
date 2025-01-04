export function ProductSkeleton() {
  return (
    <div className="space-y-4 rounded-lg border bg-white p-4">
      <div className="aspect-square rounded-lg bg-gray-200 animate-pulse" />
      <div className="space-y-2">
        <div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse" />
        <div className="h-4 w-1/4 rounded bg-gray-200 animate-pulse" />
        <div className="h-10 rounded bg-gray-200 animate-pulse" />
      </div>
    </div>
  );
}

export default function ProductGridSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

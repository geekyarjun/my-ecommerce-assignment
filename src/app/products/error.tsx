'use client';

export default function Error() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Failed to load products</h2>
        <p className="text-muted-foreground">
          Please try again later or contact support if the problem persists.
        </p>
      </div>
    </div>
  );
}
"use client";

import { Suspense } from "react";
import ImageUploadInner from "./ImageUploadInner";

function ImageUploadFallback() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0))] px-6 py-12 text-foreground">
      <div className="w-full max-w-2xl rounded-[2rem] border border-border/60 bg-white/90 p-10 shadow-2xl backdrop-blur-xl dark:bg-slate-950/90">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary border-t-transparent bg-primary/10 text-primary animate-spin">
            <span className="sr-only">Loading</span>
            <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent"></div>
          </div>
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-muted-foreground">
              Preparing upload panel
            </p>
            <h1 className="text-3xl font-serif text-foreground">
              Loading image editor
            </h1>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Hang tight while we get your photo upload tools ready.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ImageUpload() {
  return (
    <Suspense fallback={<ImageUploadFallback />}>
      <ImageUploadInner />
    </Suspense>
  );
}

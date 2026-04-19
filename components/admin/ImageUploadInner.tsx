"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import supabase from "../../app/config/supabaseClient";

export default function ImageUploadInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get("id");

  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [existingImage, setExistingImage] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (editId) fetchPost(editId);
  }, [editId]);

  useEffect(() => {
    if (image) {
      const url = URL.createObjectURL(image);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setPreviewUrl(null);
    }
  }, [image]);

  const fetchPost = async (id: string) => {
    const { data, error } = await supabase
      .from("image_upload")
      .select("*")
      .eq("id", id)
      .single();

    if (error) return console.error(error);

    setTitle(data.title);
    setExistingImage(data.image);
  };

  const handleFileUpload = async (file: File) => {
    if (!file) return null;

    if (!file.type.startsWith("image/")) {
      throw new Error("Only image files are allowed");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
    );

    try {
      setLoading(true);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error?.message || "Upload failed");
      }

      return {
        url: data.secure_url,
        public_id: data.public_id,
      };
    } catch (err) {
      console.error("Upload error:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    try {
      let imageData: any = null;

      if (image) {
        imageData = await handleFileUpload(image);
      }

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) throw new Error("User not authenticated");

      const payload = {
        title,
        image: imageData?.url || existingImage,
        public_id: imageData?.public_id || null,
        user_id: user.id,
      };

      if (editId) {
        const { error } = await supabase
          .from("image_upload")
          .update(payload)
          .eq("id", editId);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("image_upload")
          .insert([payload]);

        if (error) throw error;
      }

      router.push("/admin/manage-images");
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "Something went wrong");
    }
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0))] text-foreground flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-4xl overflow-hidden rounded-[2rem] border border-border/60 bg-white/80 shadow-2xl backdrop-blur-xl dark:bg-slate-950/80">
        <div className="px-8 py-12 md:p-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-muted-foreground">
              {editId ? "Edit image" : "Add new image"}
            </p>
            <h1 className="mb-4 text-4xl font-serif text-foreground sm:text-5xl">
              {editId ? "Update wedding photo" : "Upload wedding photo"}
            </h1>
            <p className="text-base leading-7 text-muted-foreground sm:text-lg">
              {editId
                ? "Update the details of this wedding memory"
                : "Add a new photo to the wedding gallery."}
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Photo title"
                required
                className="w-full rounded-xl border p-3"
              />

              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                required={!editId}
              />

              {(previewUrl || existingImage) && (
                <img
                  src={previewUrl || existingImage}
                  className="max-h-48"
                />
              )}

              {errorMessage && <p>{errorMessage}</p>}

              <div className="flex gap-4">
                <Button type="button" onClick={() => router.back()}>
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? "Uploading..." : "Submit"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
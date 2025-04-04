"use client";
import "./style.css";
import { useRouter } from "next/navigation";
import RepoSearch from "@/components/RepoSearch";
import AppLayout from "@/components/AppLayout";

export default function Home() {
  const router = useRouter();

  return (
    <AppLayout>
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-10 px-2 sm:px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-github-gray dark:text-white mb-4">
            Discover GitHub Tools
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Explore GitHub repositories and find the best tools to enhance your
            GitHub experience
          </p>
        </div>
        <RepoSearch
          onRepoSubmit={(owner: string, repo: string) => {
            if (owner.trim() && repo.trim()) {
              router.push(`/${owner}/${repo}`);
            }
          }}
          value={""}
        />
      </main>
    </AppLayout>
  );
}

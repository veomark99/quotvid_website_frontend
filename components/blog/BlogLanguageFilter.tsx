"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { BlogLanguageOption } from "@/lib/blog-lang";
import { langLabel } from "@/lib/blog-lang";

type BlogLanguageFilterProps = {
  languages: BlogLanguageOption[];
  value: string;
  onChange: (lang: string) => void;
  totalPosts: number;
};

export default function BlogLanguageFilter({
  languages,
  value,
  onChange,
  totalPosts,
}: BlogLanguageFilterProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  const selectedLabel =
    value === "all" ? `All articles (${totalPosts})` : `${langLabel(value)} (${languages.find((l) => l.lang === value)?.count ?? 0})`;

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function select(lang: string) {
    onChange(lang);
    setOpen(false);
  }

  return (
    <div ref={rootRef} className="relative sm:w-64">
      <label
        id={`${listId}-label`}
        className="mb-2 block text-xs font-semibold uppercase tracking-widest text-light-muted"
      >
        Language
      </label>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${listId}-label`}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-3 rounded-[10px] border border-[#1F2937] bg-[#111827] px-3 py-2.5 text-left text-sm text-light-heading transition-colors hover:border-[#374151] focus:border-[#e2a128] focus:outline-none focus:ring-1 focus:ring-[#e2a128]"
      >
        <span className="truncate">{selectedLabel}</span>
        <svg
          className={`h-4 w-4 shrink-0 text-light-muted transition-transform ${open ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-labelledby={`${listId}-label`}
          className="absolute left-0 right-0 z-20 mt-2 max-h-64 overflow-y-auto rounded-[10px] border border-[#374151] bg-[#111827] py-1 shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
        >
          <li role="option" aria-selected={value === "all"}>
            <button
              type="button"
              onClick={() => select("all")}
              className={`flex w-full items-center justify-between px-3 py-2.5 text-left text-sm transition-colors hover:bg-[#1F2937] ${
                value === "all" ? "bg-[rgba(226,161,40,0.12)] text-[#e2a128]" : "text-light-heading"
              }`}
            >
              <span>All articles</span>
              <span className="text-xs text-light-muted">{totalPosts}</span>
            </button>
          </li>
          {languages.map((option) => (
            <li key={option.lang} role="option" aria-selected={value === option.lang}>
              <button
                type="button"
                onClick={() => select(option.lang)}
                className={`flex w-full items-center justify-between px-3 py-2.5 text-left text-sm transition-colors hover:bg-[#1F2937] ${
                  value === option.lang ? "bg-[rgba(226,161,40,0.12)] text-[#e2a128]" : "text-light-heading"
                }`}
              >
                <span>{option.label}</span>
                <span className="text-xs text-light-muted">{option.count}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

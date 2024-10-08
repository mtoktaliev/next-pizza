"use client";
import { cn } from "@/lib/utils";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";
import { Search } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  useClickAway(ref, () => setFocused(false));
  useEffect(() => {
    Api.products.search(searchQuery).then((items) => {
      setProducts(items);
    });
  }, [searchQuery]);
  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30 backdrop-blur-sm" />
      )}
      <div
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11 z-30",
          className
        )}
        ref={ref}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-50 pl-11"
          type="text"
          placeholder="Найти пиццу..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div
          className={cn(
            "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
            focused && "visible opacity-100 top-12"
          )}
        >
          {products.map((product) => (
            <Link
              key={product.id}
              className="flex items-center gap-2 w-full px-3 py-2 hover:bg-primary/10"
              href={`/products/${product.id}`}
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-8 h-8"
              />
              <div>{product.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

"use client";

import type { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { ChangeEventHandler, FC } from "react";
import { useState } from "react";

import { Input } from "@components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";

type SortType = "date" | "name";

interface FilterType {
  sort: SortType;
  search: string;
}

const Filter: FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const getQueryFromUrl = (q: keyof FilterType): string | undefined => searchParams.get(q)?.toString();

  const sortQ = getQueryFromUrl("sort");
  const searchQ = searchParams.get("search");

  const [filters, setFilters] = useState<FilterType>({
    search: searchQ ?? "",
    sort: sortQ === "name" || sortQ === "date" ? sortQ : "name",
  });

  const updateQuery = (q: keyof FilterType, value: unknown, deleteQuery?: boolean): void => {
    const params = new URLSearchParams(searchParams);

    if (deleteQuery) {
      params.delete(q);
    } else {
      params.set(q, String(value).toString());
    }

    router.replace(`${pathname}?${params.toString()}` as Route);
  };

  const onSortChangeHandler = (value: SortType): void => {
    setFilters((c) => ({ ...c, sort: value }));
    updateQuery("sort", value);
  };

  const onInputChangeHandler: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setFilters((c) => ({ ...c, search: value }));
    updateQuery("search", value, !value);
  };

  return (
    <div className="flex w-full flex-col space-y-5 py-4">
      <div className="flex items-center space-x-4">
        <Input onChange={onInputChangeHandler} placeholder="Filter all voices" value={filters.search} />

        <Select onValueChange={onSortChangeHandler} value={filters.sort}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="name">Sort by name</SelectItem>
              <SelectItem value="date">Sort by date</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Filter;

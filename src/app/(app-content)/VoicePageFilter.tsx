"use client";

import type { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { ChangeEventHandler, FC } from "react";
import { useState } from "react";

import { Input } from "@components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@components/ui/tabs";
import { Toggle } from "@components/ui/toggle";

import { Component1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

type ToggleType = "all" | "saved" | "uploaded";

type SortType = "date" | "name";

type ViewType = "card" | "list";

type FilterType = Record<ToggleType, boolean> & { sort: SortType; search: string; view: ViewType };

const Filter: FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const getQueryFromUrl = (q: keyof FilterType): string | undefined => searchParams.get(q)?.toString();

  const sortQ = getQueryFromUrl("sort");
  const AllQ = searchParams.get("all");
  const savedQ = searchParams.get("saved");
  const uploadedQ = searchParams.get("uploaded");
  const searchQ = searchParams.get("search");
  const viewQ = searchParams.get("view");

  const [filters, setFilters] = useState<FilterType>({
    all: !!Number(AllQ) || true,
    saved: !!Number(savedQ),
    search: searchQ ?? "",
    sort: sortQ === "name" || sortQ === "date" ? sortQ : "name",
    uploaded: !!Number(uploadedQ),
    view: (viewQ ?? "card") as ViewType,
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

  const onFilterToggle = (type: ToggleType) => (pressed: boolean) => {
    setFilters((c) => ({ ...c, [type]: pressed }));

    updateQuery(type, 1, !pressed);
  };

  const onSortChangeHandler = (value: SortType): void => {
    setFilters((c) => ({ ...c, sort: value }));
    updateQuery("sort", value);
  };

  const onInputChangeHandler: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setFilters((c) => ({ ...c, search: value }));
    updateQuery("search", value, !value);
  };
  const onViewChangeHandler = (value: string): void => {
    setFilters((c) => ({ ...c, view: value as ViewType }));
    updateQuery("view", value, !value);
  };

  return (
    <div className="flex w-full flex-col space-y-5 py-4">
      <div className="flex space-x-2">
        <Toggle onPressedChange={onFilterToggle("all")} pressed={filters.all}>
          All
        </Toggle>
        <Toggle onPressedChange={onFilterToggle("uploaded")} pressed={filters.uploaded}>
          Uploaded
        </Toggle>
        <Toggle onPressedChange={onFilterToggle("saved")} pressed={filters.saved}>
          Saved
        </Toggle>
      </div>

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

        <Tabs className="w-32 p-0" defaultValue="card" onValueChange={onViewChangeHandler} value={filters.view}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger className="flex p-0" value="card">
              <Component1Icon className="rotate-45" height={20} width={20} />
            </TabsTrigger>
            <TabsTrigger value="list">
              <HamburgerMenuIcon height={20} width={20} />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default Filter;

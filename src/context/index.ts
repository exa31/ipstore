import { createContext } from "react";

interface SearchQuery {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
}

interface SelectedCategory {
    selectedCategory: string;
    setCategorySelected: (category: string) => void;
}

export const SelectedCategoryContext = createContext({} as SelectedCategory);

export const SearchQueryContext = createContext({} as SearchQuery);
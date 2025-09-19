"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Search } from "lucide-react";

export function SearchBar() {
  const [searchType, setSearchType] = useState("title");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality here
    console.log(`Searching ${searchType}: ${searchQuery}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-medium">Find Your Next Book</h2>
          <p className="text-muted-foreground">
            Search our extensive library collection by title, author, or ISBN
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 p-4 bg-card border rounded-lg shadow-sm">
          <div className="flex-1 flex flex-col sm:flex-row gap-2">
            <Select value={searchType} onValueChange={setSearchType}>
              <SelectTrigger
                className="w-full sm:w-40"
                aria-label="Search type"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="title">Book Title</SelectItem>
                <SelectItem value="author">Author</SelectItem>
                <SelectItem value="isbn">ISBN</SelectItem>
              </SelectContent>
            </Select>

            <Input
              type="text"
              placeholder={`Enter ${
                searchType === "isbn"
                  ? "ISBN number"
                  : searchType === "author"
                  ? "author name"
                  : "book title"
              }...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
              aria-label={`Search by ${searchType}`}
            />
          </div>

          <Button type="submit" className="gap-2 min-w-fit">
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search</span>
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 justify-center text-sm">
          <span className="text-muted-foreground">Popular searches:</span>
          <button
            type="button"
            className="text-primary hover:underline"
            onClick={() => setSearchQuery("Harry Potter")}
          >
            Harry Potter
          </button>
          <span className="text-muted-foreground">•</span>
          <button
            type="button"
            className="text-primary hover:underline"
            onClick={() => setSearchQuery("Margaret Atwood")}
          >
            Margaret Atwood
          </button>
          <span className="text-muted-foreground">•</span>
          <button
            type="button"
            className="text-primary hover:underline"
            onClick={() => setSearchQuery("Science Fiction")}
          >
            Science Fiction
          </button>
        </div>
      </form>
    </div>
  );
}

import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { BookCard } from "@/components/BookCard";

interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  reviewCount: number;
  stockAvailable: number;
  timesBorrowed: number;
}

// Mock data for recommended books
const recommendedBooks: Book[] = [
  {
    id: "1",
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    coverImage: "/seven-husbands-of-evelyn-hugo.png",
    rating: 4.8,
    reviewCount: 2456,
    stockAvailable: 3,
    timesBorrowed: 8924,
  },
  {
    id: "2",
    title: "Project Hail Mary",
    author: "Andy Weir",
    coverImage: "/project-hail-mary.png",
    rating: 4.7,
    reviewCount: 1834,
    stockAvailable: 2,
    timesBorrowed: 6542,
  },
  {
    id: "3",
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    coverImage: "/thursday-murder-club.png",
    rating: 4.5,
    reviewCount: 3127,
    stockAvailable: 5,
    timesBorrowed: 12876,
  },
  {
    id: "4",
    title: "The C Programming Language",
    author: "Brian W. Kernighan",
    coverImage: "/c-programming-language.png",
    rating: 4.6,
    reviewCount: 4521,
    stockAvailable: 0,
    timesBorrowed: 15234,
  },
  {
    id: "5",
    title: "Thus Spoke Zarathustra",
    author: "Friedrich Nietzsche",
    coverImage: "/zarathustra.png",
    rating: 4.9,
    reviewCount: 987,
    stockAvailable: 4,
    timesBorrowed: 5643,
  },
  {
    id: "6",
    title: "Myth of Sisyphus",
    author: "Albert Camus",
    coverImage: "/sisyphus.png",
    rating: 4.4,
    reviewCount: 6789,
    stockAvailable: 1,
    timesBorrowed: 18965,
  },
];

export default async function App() {
  return (
    <div className="min-h-screen bg-background flex">
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section with Search */}
          <section className="bg-gradient-to-b from-secondary/20 to-background py-12 px-4">
            <div className="container mx-auto">
              <SearchBar />
            </div>
          </section>

          {/* Recommended Books Section */}
          <section className="py-12 px-4">
            <div className="container mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-medium mb-2">
                  Recommended for You
                </h2>
                <p className="text-muted-foreground">
                  Popular books based on member reviews and borrowing history
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {recommendedBooks.map((book) => (
                  <BookCard key={book.id} {...book} />
                ))}
              </div>
            </div>
          </section>

          {/* Additional Sections */}
          <section className="bg-secondary/10 py-12 px-4">
            <div className="container mx-auto text-center">
              <h2 className="text-2xl font-medium mb-4">New Arrivals</h2>
              <p className="text-muted-foreground mb-6">
                Check out the latest additions to our collection
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-card px-3 py-1 rounded-full border">
                  Fiction
                </span>
                <span className="bg-card px-3 py-1 rounded-full border">
                  Non-fiction
                </span>
                <span className="bg-card px-3 py-1 rounded-full border">
                  Mystery
                </span>
                <span className="bg-card px-3 py-1 rounded-full border">
                  Science
                </span>
                <span className="bg-card px-3 py-1 rounded-full border">
                  Biography
                </span>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-card border-t border-border py-8 px-4">
          <div className="container mx-auto text-center text-muted-foreground">
            <p>&copy; 2025 Library Reserve. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

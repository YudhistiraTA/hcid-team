import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Star, BookOpen } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  reviewCount: number;
  stockAvailable: number;
  timesBorrowed: number;
}

export function BookCard({
  title,
  author,
  coverImage,
  rating,
  reviewCount,
  stockAvailable,
  timesBorrowed,
}: BookCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className="h-4 w-4 fill-yellow-400/50 text-yellow-400"
        />
      );
    }

    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardContent className="p-4 flex flex-col h-full">
        <div>

        <div className="relative mb-4 flex-shrink-0">
          <ImageWithFallback
            src={coverImage}
            alt={`Cover of ${title} by ${author}`}
            className="w-full h-48 object-cover rounded-md"
            width={200}
            height={300}
            style={{ objectFit: "contain" }}
          />
          {stockAvailable === 0 && (
            <div className="absolute top-2 right-2">
              <Badge variant="destructive">Out of Stock</Badge>
            </div>
          )}
        </div>

        <div className="flex-1 space-y-3">
          <div>
            <h3
              className="font-medium leading-tight line-clamp-2"
              title={title}
            >
              {title}
            </h3>
            <p className="text-muted-foreground text-sm mt-1" title={author}>
              by {author}
            </p>
          </div>
        </div>

          <div className="flex items-center gap-2">
            <div
              className="flex items-center"
              aria-label={`Rating: ${rating} out of 5 stars`}
            >
              {renderStars(rating)}
            </div>
            <span className="text-sm text-muted-foreground">
              ({reviewCount} reviews)
            </span>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Available:</span>
              <Badge variant={stockAvailable > 0 ? "secondary" : "destructive"}>
                {stockAvailable} copies
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Borrowed:</span>
              <div className="flex items-center gap-1">
                <BookOpen className="h-3 w-3" />
                <span>{timesBorrowed.toLocaleString()} times</span>
              </div>
            </div>
          </div>
        </div>

        <Button
          className="w-full mt-4"
          disabled={stockAvailable === 0}
          aria-label={`Reserve ${title} by ${author}`}
        >
          {stockAvailable > 0 ? "Reserve Book" : "Out of Stock"}
        </Button>
      </CardContent>
    </Card>
  );
}

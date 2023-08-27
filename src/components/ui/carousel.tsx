// Carousel.tsx
import { Button } from "@/components/ui/button";
import React, { CSSProperties } from "react";
import { useSnapCarousel } from "react-snap-carousel";

const styles = {
  root: {},
  scroll: {
    position: "relative",
    display: "flex",
    overflow: "auto",
    scrollSnapType: "x mandatory",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  },
  item: {
    width: "250px",

    flexShrink: 0,
  },
  itemSnapPoint: {
    scrollSnapAlign: "start",
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  nextPrevButton: {},
  nextPrevButtonDisabled: { opacity: 0.3 },
  pagination: {
    display: "flex",
  },
  paginationButton: {
    margin: "10px",
  },
  paginationButtonActive: { opacity: 0.3 },
  pageIndicator: {
    display: "flex",
    justifyContent: "center",
  },
} satisfies Record<string, CSSProperties>;

interface CarouselProps<T> {
  readonly items: T[];
  readonly renderItem: (
    props: CarouselRenderItemProps<T>
  ) => React.ReactElement<CarouselItemProps>;
}

interface CarouselRenderItemProps<T> {
  readonly item: T;
  readonly isSnapPoint: boolean;
}

export const Carousel = <T extends any>({
  items,
  renderItem,
}: CarouselProps<T>) => {
  const {
    scrollRef,
    pages,
    activePageIndex,
    prev,
    next,
    goTo,
    snapPointIndexes,
  } = useSnapCarousel();
  return (
    <div style={styles.root}>
      <ul
        style={styles.scroll}
        ref={scrollRef}
        className="no-scrollbar overflow-y-auto"
      >
        {items.map((item, i) =>
          renderItem({
            item,
            isSnapPoint: snapPointIndexes.has(i),
          })
        )}
      </ul>
      <div
        style={styles.controls}
        aria-hidden
        className="space-x-1 sm:space-x-0 p-1"
      >
        <Button
          style={{
            ...styles.nextPrevButton,
            ...(activePageIndex <= 0 ? styles.nextPrevButtonDisabled : {}),
          }}
          size="sm"
          onClick={prev}
          variant="outline"
        >
          Prev
        </Button>
        {pages.map((_, i) => (
          <Button
            key={i}
            style={{
              ...styles.paginationButton,
              ...(activePageIndex === i ? styles.paginationButtonActive : {}),
            }}
            onClick={() => goTo(i)}
            variant="ghost"
            size="sm"
            className="hidden sm:block"
          >
            {i + 1}
          </Button>
        ))}
        <Button
          style={{
            ...styles.nextPrevButton,
            ...(activePageIndex === pages.length - 1
              ? styles.nextPrevButtonDisabled
              : {}),
          }}
          onClick={next}
          size="sm"
          variant="outline"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

interface CarouselItemProps {
  readonly isSnapPoint: boolean;
  readonly children?: React.ReactNode;
}

export const CarouselItem = ({ isSnapPoint, children }: CarouselItemProps) => (
  <li
    style={{
      ...styles.item,
      ...(isSnapPoint ? styles.itemSnapPoint : {}),
    }}
  >
    {children}
  </li>
);

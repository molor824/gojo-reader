import { useState, useMemo } from "react";

interface Flashcard {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const Flashcard = () => {
  const [cards] = useState<Flashcard[]>([
    {
      id: 1,
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces",
      category: "React",
    },
    {
      id: 2,
      question: "What is TypeScript?",
      answer: "A strongly typed programming language that builds on JavaScript",
      category: "TypeScript",
    },
    {
      id: 3,
      question: "What is Tailwind CSS?",
      answer: "A utility-first CSS framework",
      category: "CSS",
    },
    {
      id: 4,
      question: "What are React Hooks?",
      answer:
        "Functions that allow you to use state and other React features in functional components",
      category: "React",
    },
  ]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Get unique categories from cards
  const categories = useMemo(() => {
    const uniqueCategories = new Set(cards.map((card) => card.category));
    return ["All", ...Array.from(uniqueCategories)];
  }, [cards]);

  // Filter cards based on selected category
  const filteredCards = useMemo(() => {
    return selectedCategory === "All"
      ? cards
      : cards.filter((card) => card.category === selectedCategory);
  }, [cards, selectedCategory]);

  const handleNextCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex(
      (prev) => (prev - 1 + filteredCards.length) % filteredCards.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Flashcards
        </h1>

        {/* Category Filter */}
        <div className="flex justify-center mb-8 gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentCardIndex(0);
                setIsFlipped(false);
              }}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-white text-indigo-600"
                  : "bg-indigo-400 text-white hover:bg-indigo-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="text-white text-center mb-8">
          Card {currentCardIndex + 1} of {filteredCards.length}
        </div>

        <div
          className="relative h-96 w-full cursor-pointer perspective-1000"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div
            className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            <div className="absolute w-full h-full bg-white rounded-xl p-8 backface-hidden">
              <div className="flex flex-col h-full justify-center items-center">
                <span className="text-sm text-indigo-600 mb-4">
                  {filteredCards[currentCardIndex].category}
                </span>
                <h2 className="text-2xl font-semibold text-center text-black">
                  {filteredCards[currentCardIndex].question}
                </h2>
                <p className="mt-4 text-gray-500 text-center">
                  Click to reveal answer
                </p>
              </div>
            </div>

            <div className="absolute w-full h-full bg-white rounded-xl p-8 rotate-y-180 backface-hidden">
              <div className="flex flex-col h-full justify-center items-center">
                <p className="text-xl text-center text-black">
                  {filteredCards[currentCardIndex].answer}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={handlePrevCard}
            className="px-6 py-2 bg-white text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors"
          >
            Previous
          </button>
          <button
            onClick={handleNextCard}
            className="px-6 py-2 bg-white text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

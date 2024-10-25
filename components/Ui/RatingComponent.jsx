const RatingComponent = ({ value, max = 5 }) => {
  const stars = Array.from({ length: max }, (v, i) => i + 1);

  return (
    <div className="flex items-center gap-1">
      {stars.map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          fill={star <= value ? "gold" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className="w-5 h-5 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.11 6.518a1 1 0 00.95.69h6.84c.97 0 1.371 1.24.588 1.81l-5.53 4.02a1 1 0 00-.364 1.118l2.11 6.517c.3.92-.755 1.688-1.54 1.118l-5.53-4.02a1 1 0 00-1.176 0l-5.53 4.02c-.785.57-1.838-.197-1.539-1.118l2.11-6.517a1 1 0 00-.364-1.118l-5.53-4.02c-.783-.57-.383-1.81.588-1.81h6.84a1 1 0 00.95-.69l2.11-6.518z"
          />
        </svg>
      ))}
    </div>
  );
};
export default RatingComponent;

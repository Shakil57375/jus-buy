// components/ReviewsSection.js

import Image from "next/image";

const ReviewsSection = ({ product }) => {
  const totalRatings = product.ratingCount;
  const averageRating = product.rating;
  const reviews = product.reviews;

  return (
    <section className="mt-10">
      <p className="bg-orange-500 text-lg py-4 rounded-lg text-white w-[291px] h-[58px] text-center">
        Rating & Reviews
      </p>
      <hr className="mt-4 border-1 border-orange-500" />

      {/* Individual Reviews */}
      <div className="space-y-6 mt-10">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 border-b ">
            <div className="flex items-center space-x-3">
              <Image
                src={review.image}
                alt={review.userName}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <p className="font-semibold text-gray-900">
                    {review.userName}
                  </p>
                  <p className="text-sm text-gray-500">Just now</p>
                </div>
                {/* Star Rating */}
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-orange-500">
                      {i < review.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-2">
              <p className="mt-1 text-gray-700">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;

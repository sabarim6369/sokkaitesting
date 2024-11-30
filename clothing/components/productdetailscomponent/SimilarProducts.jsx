import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SimilarProducts = ({ products }) => {
  return (
    <section className="mt-16 px-4 sm:px-8 md:px-12 lg:px-16">
      <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
        You May Also Like
      </h3>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-12"
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <Link href={`/frontend/productdetails/${product._id}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={product.images[0].url}
                    alt={product.name}
                    width={300}
                    height={400}
                    className="h-full w-full object-cover object-center group-hover:opacity-90 transition-opacity duration-300"
                  />
                </div>
                <div className="mt-4 px-2 pb-2 text-center">
                  <h3 className="text-lg font-medium text-gray-900 truncate">{product.name}</h3>
                  <p className="mt-1 text-xl font-semibold text-gray-900">₹{product.price}</p>
                  {/* Display discounted price if available */}
                  {product.discountedPrice && (
                    <p className="text-sm text-red-600 line-through mt-1">₹{product.discountedPrice}</p>
                  )}
                </div>
              </motion.div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SimilarProducts;

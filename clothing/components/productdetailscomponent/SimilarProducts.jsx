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
    <section className="mt-16">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Similar Products</h3>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
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
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src={product.images[0].url}
                    alt={product.name}
                    width={300}
                    height={400}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">₹{product.price}</p>
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
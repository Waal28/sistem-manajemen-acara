import Image from "next/image";
import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";

function StarRating() {
  return (
    <div className="flex items-center">
      <svg
        className="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </div>
  );
}
function Card({ name, text, img }) {
  return (
    <div className="w-full mx-auto rounded-lg bg-white dark:bg-teal-700 p-5 text-gray-800 font-light shadow-xl">
      <h5 className="text-center mb-2 font-medium text-teal-700 dark:text-gray-300 hover:underline dark:hover:text-white line-clamp-2 ">
        <Link href="#">
          Webinar bla bla bla bla bla Teknik Informatika lorem ipsum dolor
        </Link>
      </h5>
      <div className="w-full flex mb-4 items-center">
        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
          <Image src={img} alt="..." width={40} height={40} />
        </div>
        <div className="flex-grow pl-3">
          <h6 className="font-bold text-sm text-gray-600 dark:text-gray-200">
            {name}
          </h6>
          <span className="text-xs text-gray-400 font-medium">
            Teknik Informatika
          </span>
        </div>
      </div>
      <div className="w-full mb-2">
        <p className="text-sm leading-tight text-gray-400 dark:text-white">
          <span></span>
          <span className="text-lg leading-none italic font-bold mr-1">
            {'"'}
          </span>
          {text}
          <span className="text-lg leading-none italic font-bold ml-1">
            {'"'}
          </span>
        </p>
      </div>
      <StarRating />
    </div>
  );
}
Card.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
};

const data = [
  {
    id: 1,
    name: "Iwal Faizul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore. ",
    img: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Iwal Faizul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore. ",
    img: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Iwal Faizul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore. ",
    img: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    name: "Iwal Faizul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore. ",
    img: "https://i.pravatar.cc/100?img=4",
  },
];
export default function FeedBack() {
  return (
    <div className="bg-white dark:bg-custom-tertiary w-full px-5 py-16 md:py-24 mb-10">
      <div className="w-full max-w-screen-xl px-4 mx-auto">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="mb-6 text-6xl tracking-tight font-extrabold text-center text-teal-900 dark:text-white">
            Review
          </h2>
          <p className="mb-12 text-teal-900 dark:text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
            qui. Beatae reiciendis corporis labore ad. A iste id culpa eaque,
            non esse itaque architecto molestiae nobis totam delectus modi
            nesciunt.
          </p>
          <div className="text-center mb-10">
            <span className="inline-block w-1 h-1 rounded-full bg-teal-500 ml-1" />
            <span className="inline-block w-3 h-1 rounded-full bg-teal-500 mx-1" />
            <span className="inline-block w-40 h-1 rounded-full bg-teal-500" />
            <span className="inline-block w-3 h-1 rounded-full bg-teal-500 ml-1" />
            <span className="inline-block w-1 h-1 rounded-full bg-teal-500 ml-1" />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

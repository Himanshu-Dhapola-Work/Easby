export default function InfiniteCarousel() {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] my-8 bg-smoke">
      <ul className="flex items-center justify-center md:justify-start sm:gap-6 gap-4 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
        <li>
          <img src="./samsung.png" alt="Samsung" loading="lazy"  className="w-12 md:w-24" />
        </li>
        <li>
          <img src="./intel.png" alt="Intel" loading="lazy"  className="w-12 md:w-24" />
        </li>
        <li>
          <img src="./apple.png" alt="Apple" loading="lazy"  className="w-12 md:w-24" />
        </li>
        <li>
          <img src="./adidas.png" alt="Adidas" loading="lazy"  className="w-12 md:w-24" />
        </li>
        <li>
          <img src="./sony.png" alt="Sony" loading="lazy"  className="w-12 md:w-24" />
        </li>
        <li>
          <img src="./asus.png" alt="Asus" loading="lazy"  className="w-12 md:w-24" />
        </li>
        <li>
          <img src="./redmi.png" alt="Redmi" loading="lazy"  className="w-12 md:w-24" />
        </li>
        <li>
          <img src="./bose.png" alt="Bose" loading="lazy"  className="w-12 md:w-24" />
        </li>
        <li>
          <img src="./hp.png" alt="Hp" loading="lazy"  className="w-12 md:w-24" />
        </li>
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start sm:gap-6 gap-4 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        <li>
          <img src="./samsung.png" alt="Samsung" loading="lazy"  className="w-12 md:w-24" />
        </li>
        <li>
          <img src="./intel.png" alt="Intel" loading="lazy"  className="w-12 md:w-24" />
        </li>
        <li>
          <img src="./apple.png" alt="Apple" loading="lazy"  className="w-12 md:w-24" />
        </li>
        <li>
          <img src="./adidas.png" alt="Adidas" loading="lazy"  className="w-12 md:w-24" />
        </li>
        <li>
          <img src="./sony.png" alt="Sony" loading="lazy"  className="w-12 md:w-24" />
        </li>
        <li>
          <img src="./asus.png" alt="Asus" loading="lazy"  className="w-12 md:w-24" />
        </li>
        <li>
          <img src="./redmi.png" alt="Redmi" loading="lazy"  className="w-12 md:w-24" />
        </li>
        <li>
          <img src="./bose.png" alt="Bose" loading="lazy"  className="w-12 md:w-24" />
        </li>
        <li>
          <img src="./hp.png" alt="Hp" loading="lazy"  className="w-12 md:w-24" />
        </li>
      </ul>
    </div>
  );
}

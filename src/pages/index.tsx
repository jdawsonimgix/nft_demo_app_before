import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const ExampleFiles = [
  {
    title: 'Ghost 1',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-1.jpeg',
  },
  {
    title: 'Ghost 2',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-2.jpeg',
  },
  {
    title: 'Ghost 3',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-3.jpeg',
  },
  {
    title: 'Ghost 4',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-4.jpeg',
  },
  {
    title: 'Ghost 5',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-5.jpeg',
  },
  {
    title: 'Ghost 6',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-6.jpeg',
  },
  {
    title: 'Ghost 7',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-7.jpeg',
  },
  {
    title: 'Ghost 8',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-8.jpeg',
  },
  {
    title: 'Ghost 9',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-9.jpeg',
  },
  {
    title: 'Ghost 10',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-10.jpeg',
  },
  {
    title: 'Ghost 11',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-11.jpeg',
  },
  {
    title: 'Ghost 12',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-12.jpeg',
  },
  {
    title: 'Ghost 13',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-13.jpeg',
  },
  {
    title: 'Ghost 14',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-14.jpeg',
  },
  {
    title: 'Ghost 15',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-15.jpeg',
  },
  {
    title: 'Ghost 16',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-16.jpeg',
  },
  {
    title: 'Ghost 17',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-17.jpeg',
  },
  {
    title: 'Ghost 18',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-18.jpeg',
  },
  {
    title: 'Ghost 19',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-19.jpeg',
  },
  {
    title: 'Ghost 20',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-20.jpeg',
  },
  {
    title: 'Ghost 21',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-21.jpeg',
  },
  {
    title: 'Ghost 22',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-22.jpeg',
  },
  {
    title: 'Ghost 23',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-23.jpeg',
  },
  {
    title: 'Ghost 24',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-24.jpeg',
  },
  {
    title: 'Ghost 25',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-25.jpeg',
  },
  {
    title: 'Ghost 26',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-26.jpeg',
  },
  {
    title: 'Ghost 27',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-27.jpeg',
  },
  {
    title: 'Ghost 28',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-28.jpeg',
  },
  {
    title: 'Ghost 29',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-29.jpeg',
  },
  {
    title: 'Ghost 30',
    size: '3.9 MB',
    source: 'https://jdawson.imgix.net/ghost-30.jpeg',
  },
];

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Imgix NFT demo app - Before optimization"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h1 className="text-2xl font-bold">
        JPEG images from OpenSea user Gh0stly Gh0sts.
      </h1>

      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {ExampleFiles.map((file) => (
          <li key={file.source} className="relative">
            <div className="group  block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <img
                src={file.source}
                alt=""
                className="pointer-events-none object-cover group-hover:opacity-75"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for {file.title}</span>
              </button>
              {/* <Imgix src={ExampleFiles.source} 
                imgixParams={{ auto: "format,compress"  }}   
                sizes="50vw"
             /> */}
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
              {file.title}
            </p>
            <p className="pointer-events-none block text-sm font-medium text-gray-500">
              {file.size}
            </p>
          </li>
        ))}
      </ul>
    </Main>
  );
};

export default Index;

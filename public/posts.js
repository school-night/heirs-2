const posts = [
  {
    slug: "caddy",
    subtitle: "Benny The Butcher & J. Cole",
    title: "Johnny P’s Caddy",
    description:
      "Directed by Rodney Passé\nCreative Executive Producer by Mez for HEIRS Entertainment\nProduced by HEIRS Entertainment",
    embed: (
      <iframe
        src="https://www.youtube.com/embed/klZNvJArVSE?rel=0&modestbranding=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
    images: [],
  },
  {
    slug: "me-or-sum",
    subtitle: "Nardo Wick (feat. Future & Lil Baby)",
    title: "Me or Sum",
    description:
      "Directed by City James\nCreative Executive Producer by Mez for HEIRS Entertainment\nProduced by HEIRS Entertainment",
    embed: (
      <iframe
        src="https://www.youtube.com/embed/g9Zro7KQzgA?rel=0&modestbranding=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
    images: [],
  },
  {
    slug: "headshots",
    subtitle: "Isaiah Rashad",
    title: "Headshots (4r Da Locals)",
    description:
      "Creative Direction & Directed by Mez for HEIRS Entertainment and Jack Begert\nProduced by Psycho Films",
    embed: (
      <iframe
        src="https://www.youtube.com/embed/1NMZ0MpaEuY?rel=0&modestbranding=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
    images: [],
  },
  {
    slug: "amari",
    subtitle: "J. Cole",
    title: "a m a r i",
    description:
      "Directed by Mez for HEIRS Entertainment\nProduced by HEIRS Entertainment & AJR Films",
    embed: (
      <iframe
        src="https://www.youtube.com/embed/w3333Fo6ufY?rel=0&modestbranding=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
    images: [],
  },
  {
    slug: "air-max",
    subtitle: "Nike",
    title: "Nike Air Max Day 2021",
    description:
      "Codirected by Mez and Dayday for HEIRS Entertainment\nProduced by Byt.nyc",
    embed: (
      <iframe
        src="https://player.vimeo.com/video/531986896?title=0&byline=0&portrait=0"
        title="Vimeo video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
    images: [
      "/assets/work/air-max_1.jpg",
      "/assets/work/air-max_2.jpg",
      "/assets/work/air-max_3.jpg",
      "/assets/work/air-max_4.jpg",
    ],
  },
  {
    slug: "rs-dreamer-2",
    subtitle: "PUMA & J. Cole",
    title: "PUMA RS Dreamer 2",
    description:
      "Photography, Videography, and Creation Direction by Mez for HEIRS Entertainment\nProduced by HEIRS Entertainment and AJR Films",
    embed: (
      <iframe
        src="https://www.youtube.com/embed/mMZIPXw4Khc?rel=0&modestbranding=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
    images: [
      "/assets/work/rs-dreamer-2_6.jpg",
      "/assets/work/rs-dreamer-2_7.jpg",
      "/assets/work/rs-dreamer-2_8.jpg",
      "/assets/work/rs-dreamer-2_1.jpg",
      "/assets/work/rs-dreamer-2_2.jpg",
      "/assets/work/rs-dreamer-2_3.jpg",
      "/assets/work/rs-dreamer-2_4.jpg",
      "/assets/work/rs-dreamer-2_5.jpg",
    ],
  },
  {
    slug: "middle-child",
    subtitle: "J. Cole",
    title: "Middle Child",
    description:
      "Directed by Mez for HEIRS Entertainment\nProduced by PRETTYBIRD",
    embed: (
      <iframe
        src="https://www.youtube.com/embed/WILNIXZr2oc?rel=0&modestbranding=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
    images: [],
  },
  {
    slug: "mood",
    subtitle: "SiR",
    title: "Mood",
    description:
      "Directed by Mez for HEIRS Entertainment\nProduced by AJR Films",
    embed: (
      <iframe
        src="https://www.youtube.com/embed/zfb3jHAnATQ?rel=0&modestbranding=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
    images: [],
  },
  {
    slug: "loading",
    subtitle: "Mez",
    title: "Loading",
    description:
      "Directed by Mez for HEIRS Entertainment\nProduced by HEIRS Entertainment",
    embed: (
      <iframe
        src="https://www.youtube.com/embed/LevWg1vBvZ4?rel=0&modestbranding=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
    images: [],
  },
  {
    slug: "rs-dreamer",
    subtitle: "PUMA & J. Cole",
    title: "PUMA RS Dreamer",
    description:
      "Photography and Videography, Creation Direction by Mez for HEIRS Entertainment\nProduced by HEIRS Entertainment",
    embed: (
      <iframe
        src="https://www.youtube.com/embed/CxfVhtlOVtk?rel=0&modestbranding=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
    images: ["/assets/work/rs-dreamer_1.jpg", "/assets/work/rs-dreamer_2.jpg"],
  },
  {
    slug: "southside-mez",
    subtitle: "Mez",
    title: "Southside Mez",
    description:
      "Directed by Mez for HEIRS Entertainment\nProduced by HEIRS Entertainment",
    embed: (
      <iframe
        src="https://www.youtube.com/embed/-2x3CPUaZbA?rel=0&modestbranding=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
    images: [],
  },
];

export default posts;

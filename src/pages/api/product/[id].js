export default async function handler(req, res) {
  const { query } = req;

  const perfumes = [
    {
      id: "0",
      productName: "Chanel No",
      src: "/images/one.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna commodo nec. Duis tempor tincidunt ex, et auctor quam eleifend non. Phasellus rhoncus vitae nunc at consequat. Proin nec nunc eget nulla semper sollicitudin. Aliquam sodales efficitur lorem, vel pellentesque elit congue semper. Etiam laoreet feugiat ipsum, id feugiat mauris eleifend et. Mauris cursus, magna sed condimentum auctor, ante arcu cursus mauris, sed finibus lacus diam a lectus.",
      price: "$200",
    },
    {
      id: "1",
      productName: "Le Labo Santal ",
      src: "/images/two.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna commodo nec. Duis tempor tincidunt ex, et auctor quam eleifend non. Phasellus rhoncus vitae nunc at consequat. Proin nec nunc eget nulla semper sollicitudin. Aliquam sodales efficitur lorem, vel pellentesque elit congue semper. Etiam laoreet feugiat ipsum, id feugiat mauris eleifend et. Mauris cursus, magna sed condimentum auctor, ante arcu cursus mauris, sed finibus lacus diam a lectus.",
      price: "$500",
    },
    {
      id: "2",
      productName: "Thierry Mugler Angel.",
      src: "/images/three.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna commodo nec. Duis tempor tincidunt ex, et auctor quam eleifend non. Phasellus rhoncus vitae nunc at consequat. Proin nec nunc eget nulla semper sollicitudin. Aliquam sodales efficitur lorem, vel pellentesque elit congue semper. Etiam laoreet feugiat ipsum, id feugiat mauris eleifend et. Mauris cursus, magna sed condimentum auctor, ante arcu cursus mauris, sed finibus lacus diam a lectus.",
      price: "$50000",
    },
    {
      id: "3",
      productName: "Engage L'amante Aqua",
      src: "/images/four.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna commodo nec. Duis tempor tincidunt ex, et auctor quam eleifend non. Phasellus rhoncus vitae nunc at consequat. Proin nec nunc eget nulla semper sollicitudin. Aliquam sodales efficitur lorem, vel pellentesque elit congue semper. Etiam laoreet feugiat ipsum, id feugiat mauris eleifend et. Mauris cursus, magna sed condimentum auctor, ante arcu cursus mauris, sed finibus lacus diam a lectus.",
      price: "$10000",
    },
    {
      id: "4",
      productName: "Zed",
      src: "/images/four.jpg",
      productDiscription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus risus, porta vitae est vitae, finibus vulputate turpis. Nam lectus urna, dictum id nisi quis, convallis feugiat urna. Nam bibendum felis dui, vitae imperdiet magna commodo nec. Duis tempor tincidunt ex, et auctor quam eleifend non. Phasellus rhoncus vitae nunc at consequat. Proin nec nunc eget nulla semper sollicitudin. Aliquam sodales efficitur lorem, vel pellentesque elit congue semper. Etiam laoreet feugiat ipsum, id feugiat mauris eleifend et. Mauris cursus, magna sed condimentum auctor, ante arcu cursus mauris, sed finibus lacus diam a lectus.",
      price: "$3000000",
    },
  ];

  console.log(query.id);

  const object = perfumes[query.id];

  res.status(200).json({
    data: object,
  });
}

import {
  TopBar,
  Container,
  Title,
  Filters,
  ProductsGroupList,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pt-9 pb-14">
        <div className="flex gap-20">
          {/* Filter */}
          <div className="w-64">
            <Filters />
          </div>

          {/* Cards */}
          <div className="flex-1">
            <div className="flex flex-col gap-5">
              <ProductsGroupList
                title={"Пиццы"}
                items={[
                  {
                    id: 1,
                    name: "Мясная с аджикой",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF6612D8805B8FA33D45115AFF17C7.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Мясная с аджикой",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF6612D8805B8FA33D45115AFF17C7.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Мясная с аджикой",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF6612D8805B8FA33D45115AFF17C7.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Мясная с аджикой",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF6612D8805B8FA33D45115AFF17C7.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Мясная с аджикой",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF6612D8805B8FA33D45115AFF17C7.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "Мясная с аджикой",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF6612D8805B8FA33D45115AFF17C7.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: "Мясная с аджикой",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF6612D8805B8FA33D45115AFF17C7.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title={"Комбо"}
                items={[
                  {
                    id: 8,
                    name: "Мясная с аджикой",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEC6E01124EEB28164454CBCF635BB.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 9,
                    name: "Мясная с аджикой",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEC6E01124EEB28164454CBCF635BB.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 10,
                    name: "Мясная с аджикой",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEC6E01124EEB28164454CBCF635BB.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 11,
                    name: "Мясная с аджикой",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEC6E01124EEB28164454CBCF635BB.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 12,
                    name: "Мясная с аджикой",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEC6E01124EEB28164454CBCF635BB.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 13,
                    name: "Мясная с аджикой",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEC6E01124EEB28164454CBCF635BB.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 14,
                    name: "Мясная с аджикой",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEC6E01124EEB28164454CBCF635BB.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

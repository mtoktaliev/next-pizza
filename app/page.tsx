import { TopBar, Container, Title, Filters } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pt-9 pb-14">
        <div className="flex gap-14">
          {/* Filter */}
          <div className="w-64">
            <Filters />
          </div>

          {/* Cards */}
          <div className="flex-1">
            <div className="flex flex-col gap-5">Produc List</div>
          </div>
        </div>
      </Container>
    </>
  );
}

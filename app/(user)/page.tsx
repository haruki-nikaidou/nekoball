import {getSeriesList} from "@/server/controllers/series";
import {HomeCard} from "@/components/HomeCard/HomeCard";
import {getImageUrl} from "@/server/config";

export default async function Home() {
  const series = await getSeriesList();
  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-4'>
        {series.map((s) => (
            <HomeCard
                key={s.id + s.name}
                imageUrl={getImageUrl(s.cover_image_uuid)}
                seriesTitle={s.name}
                seriesId={s.id.toString()}
            />
        ))}
      </section>

    </>
  );
}

import {getSeriesById} from "@/server/controllers/series";
import {notFound} from "next/navigation";
import EpisodeSelect from "@/components/EpisodeSelect";
import {Card, CardBody, CardFooter} from "@nextui-org/react";
import {Player} from "@/components/Player";
import {getImageUrl} from "@/server/config";

interface PlayerPageProps {
  series: string;
  episode: string;
}

export async function generateMetadata ({params}: { params: PlayerPageProps }) {
  const seriesInt = parseInt(params.series);
  if (isNaN(seriesInt)) {
    notFound();
  }
  const series = await getSeriesById(seriesInt);
  if (!series.success) {
    notFound();
  }
  const seriesData = series.data!;
  return {
    title: `${seriesData.name} - Neko Ball`,
  }
}

export default async function PlayerPage({params}: { params: PlayerPageProps }) {
  const seriesInt = parseInt(params.series);
  if (isNaN(seriesInt)) {
    notFound();
  }
  const series = await getSeriesById(seriesInt);
  if (!series.success) {
    notFound();
  }
  const seriesData = series.data!;
  const currentEpisodeSort = parseInt(params.episode);
  if (isNaN(currentEpisodeSort)) {
    notFound();
  }
  if (!seriesData.episodes.some(episode => episode.sort_in_series === currentEpisodeSort)) {
    notFound();
  }
  const currentEpisode = seriesData.episodes.find(episode => episode.sort_in_series === currentEpisodeSort)!;
  return (
      <>
        <Card className='bg-opacity-50 backdrop-blur-lg'>
          <CardBody className='min-h-[30rem]'>
            <Player
                coverImageUrl={getImageUrl(seriesData.cover_image_uuid)}
                videoUrl={currentEpisode.video_link}
            />
          </CardBody>
          <CardFooter>
            <EpisodeSelect
                max={series.data!.episodes.length}
                current={currentEpisodeSort}
                seriesId={seriesInt}
            />
          </CardFooter>
        </Card>
      </>
  )
}
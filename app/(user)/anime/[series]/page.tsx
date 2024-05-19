import {redirect} from "next/navigation";

export default function RedirectToEpisode({params}: {params: {series: string}}) {
  redirect(`/anime/${params.series}/1`);
}
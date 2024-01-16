import Image from "next/image";
import Link from "next/link";
import Head from "next/head.js";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data.js";

export default function VolumeDetail() {
  const router = useRouter();

  const { slug } = router.query;

  // const slug = router.query.slug;

  console.log(slug);

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  console.log(volumeIndex);

  const volume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  return <></>;
}

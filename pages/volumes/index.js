import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data.js";

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              {" "}
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

/*
return (
  <>
    <Link href="/volumes">← All Volumes</Link>
    <h1>{title}</h1>
    <p>{description}</p>
    <ul>
      {books.map(({ ordinal, title }) => (
        <li key={title}>
          {ordinal}: <strong>{title}</strong>
        </li>
      ))}
    </ul>
    <Image
      src={cover}
      alt={`Cover image of ${title}`}
      width={140}
      height={230}
    />
    <div>
      {previousVolume ? (
        <Link href={`/volumes/${previousVolume.slug}`}>
          ← Previous Volume: {previousVolume.title}
        </Link>
      ) : null}
    </div>
    <div>
      {nextVolume ? (
        <Link href={`/volumes/${nextVolume.slug}`}>
          Next Volume: {nextVolume.title} →
        </Link>
      ) : null}
    </div>
  </>
);*/

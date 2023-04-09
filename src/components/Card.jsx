export default function Card() {
  return (
    <article className="w-[300px] bg-white flex flex-col justify-center items-center overflow-hidden rounded-xl shadow-2xl">
      <img src="bg-pattern-card.svg" alt="card" />
      <img
        src="image-victor.jpg"
        alt="victorImg"
        className="relative rounded-full bottom-12 border-white border-4"
      />
      <div className="relative flex flex-col items-center bottom-7 gap-1">
        <div className="flex gap-3">
          <p className="font-bold">Victor Crest</p>
          <p className="text-Darkgray">26</p>
        </div>
        <p className="text-Darkgray text-xs">London</p>
      </div>
      <hr className="border-Darkgray/52 border-1 w-full" />
      <div className="flex flex-row gap-10 p-5">
        <div className="flex flex-col items-center">
          <p className="font-bold">80K</p>
          <p className="text-xs text-Darkgray">Followers</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold">803K</p>
          <p className="text-xs text-Darkgray">1.4K</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold">80K</p>
          <p className="text-xs text-Darkgray">Followers</p>
        </div>
      </div>
    </article>
  );
}

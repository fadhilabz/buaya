"use client"; // Menandakan ini adalah komponen client-side

import { useEffect, useRef } from "react";

export default function FarahPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Auto play diblokir browser, klik tombol untuk memulai");
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center text-center p-6">
      <div className="max-w-md bg-white rounded-2xl shadow-lg p-6">
        <img
          src="/img/crocodile-1043097_960_720.jpg"
          alt="Foto Farah"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="text-3xl font-bold text-pink-600 mt-4">
          Hai, aku Farah!
        </h1>
        <p className="mt-2 text-gray-700">
          Aku orang yang ceria, suka kopi, dan suka tantangan baru. Senang
          kenalan denganmu!
        </p>

        <div className="mt-4">
          <a
            href="https://instagram.com/fdhiil1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 underline hover:text-pink-700"
          >
            Instagram-ku
          </a>
        </div>

        <div className="mt-6">
          <audio ref={audioRef} controls loop>
            <source
              src="/music/ssstik.io_1746852782689 (1).mp4"
              type="audio/mp4"
            />
            Browser kamu tidak mendukung pemutar audio.
          </audio>
        </div>
      </div>
    </div>
  );
}

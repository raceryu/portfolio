"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";

const STEP_SECONDS = 0.24;
const NOTES = [
  261.63, 329.63, 392.0, 523.25,
  392.0, 329.63, 293.66, 349.23,
  440.0, 523.25, 440.0, 349.23,
  293.66, 392.0, 329.63, 261.63,
];
const SYNTH_LENGTH = NOTES.length * STEP_SECONDS;

// REPLACE: Add your audio file to public/music, then set its relative path here.
// Example: const CUSTOM_TRACK_SRC = "music/my-song.mp3";
const CUSTOM_TRACK_SRC: string | null = null;
// REPLACE: This is the title shown inside the NOW PLAYING box.
const CUSTOM_TRACK_TITLE = "10_hrs_of_silence.mp3";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "00:00";
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, "0")}:${remainder
    .toString()
    .padStart(2, "0")}`;
}

export default function MiniPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(
    CUSTOM_TRACK_SRC ? 0 : SYNTH_LENGTH,
  );
  const [hasAudioError, setHasAudioError] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUrlRef = useRef<string | null>(CUSTOM_TRACK_SRC);
  const contextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const clockRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const noteClockRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const offsetRef = useRef(0);
  const startedAtRef = useRef(0);
  const playingRef = useRef(false);

  const setPlaying = (nextValue: boolean) => {
    playingRef.current = nextValue;
    setIsPlaying(nextValue);
  };

  const readSynthPosition = () =>
    (offsetRef.current + (performance.now() - startedAtRef.current) / 1000) %
    SYNTH_LENGTH;

  const clearSynthTimers = () => {
    if (clockRef.current !== null) clearInterval(clockRef.current);
    if (noteClockRef.current !== null) clearInterval(noteClockRef.current);
    clockRef.current = null;
    noteClockRef.current = null;
  };

  const silenceSynth = () => {
    const context = contextRef.current;
    const oscillator = oscillatorRef.current;
    const gain = gainRef.current;

    if (context && oscillator && gain) {
      gain.gain.cancelScheduledValues(context.currentTime);
      gain.gain.setValueAtTime(gain.gain.value, context.currentTime);
      gain.gain.linearRampToValueAtTime(0.0001, context.currentTime + 0.03);
      oscillator.stop(context.currentTime + 0.04);
    }

    oscillatorRef.current = null;
    gainRef.current = null;
  };

  const startSynth = async (fromSeconds: number) => {
    const context = contextRef.current ?? new AudioContext();
    contextRef.current = context;
    await context.resume();

    clearSynthTimers();
    silenceSynth();
    offsetRef.current = fromSeconds % SYNTH_LENGTH;
    startedAtRef.current = performance.now();

    const oscillator = context.createOscillator();
    const filter = context.createBiquadFilter();
    const gain = context.createGain();
    const setCurrentNote = () => {
      const noteIndex =
        Math.floor(readSynthPosition() / STEP_SECONDS) % NOTES.length;
      oscillator.frequency.setValueAtTime(NOTES[noteIndex], context.currentTime);
    };

    oscillator.type = "square";
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1700, context.currentTime);
    gain.gain.setValueAtTime(0.025, context.currentTime);
    oscillator.connect(filter);
    filter.connect(gain);
    gain.connect(context.destination);
    setCurrentNote();
    oscillator.start();

    oscillatorRef.current = oscillator;
    gainRef.current = gain;
    setPlaying(true);
    clockRef.current = setInterval(() => {
      setElapsed(readSynthPosition());
    }, 80);
    noteClockRef.current = setInterval(setCurrentNote, STEP_SECONDS * 500);
  };

  const startPlayback = async (fromSeconds = offsetRef.current) => {
    try {
      if (audioUrlRef.current) {
        const audio = audioRef.current;
        if (!audio) throw new Error("The selected audio is not ready.");
        if (Number.isFinite(fromSeconds)) audio.currentTime = fromSeconds;
        await audio.play();
      } else {
        await startSynth(fromSeconds);
      }
      setHasAudioError(false);
    } catch {
      setPlaying(false);
      setHasAudioError(true);
    }
  };

  const pausePlayback = () => {
    if (audioUrlRef.current) {
      const audio = audioRef.current;
      audio?.pause();
      if (audio) {
        offsetRef.current = audio.currentTime;
        setElapsed(audio.currentTime);
      }
      setPlaying(false);
      return;
    }

    if (!playingRef.current) return;
    const position = readSynthPosition();
    offsetRef.current = position;
    setElapsed(position);
    setPlaying(false);
    clearSynthTimers();
    silenceSynth();
  };

  const restartPlayback = () => {
    offsetRef.current = 0;
    setElapsed(0);

    if (audioUrlRef.current) {
      if (audioRef.current) audioRef.current.currentTime = 0;
      return;
    }

    if (playingRef.current) {
      clearSynthTimers();
      silenceSynth();
      void startSynth(0);
    }
  };

  const stopPlayback = () => {
    if (audioUrlRef.current) {
      const audio = audioRef.current;
      audio?.pause();
      if (audio) audio.currentTime = 0;
      setPlaying(false);
    } else {
      pausePlayback();
    }
    offsetRef.current = 0;
    setElapsed(0);
  };

  const seekPlayback = (event: ChangeEvent<HTMLInputElement>) => {
    const nextPosition = Number(event.target.value);
    offsetRef.current = nextPosition;
    setElapsed(nextPosition);

    if (audioUrlRef.current) {
      if (audioRef.current) audioRef.current.currentTime = nextPosition;
      return;
    }

    if (playingRef.current) {
      clearSynthTimers();
      silenceSynth();
      void startSynth(nextPosition);
    }
  };

  useEffect(
    () => () => {
      clearSynthTimers();
      silenceSynth();
      audioRef.current?.pause();
      void contextRef.current?.close();
    },
    [],
  );

  return (
    <>
      <div className="mini-note">
        <span>NOW PLAYING ♪</span>
        <strong title={CUSTOM_TRACK_TITLE}>{CUSTOM_TRACK_TITLE}</strong>
      </div>

      <div
        className={`mini-player${isPlaying ? " is-playing" : ""}`}
        aria-label="Music player"
      >
        <span className="mini-player-time">{formatTime(elapsed)}</span>
        <input
          className="mini-player-progress"
          type="range"
          min="0"
          max={Math.max(duration, 0.01)}
          step="0.01"
          value={Math.min(elapsed, Math.max(duration, 0.01))}
          onChange={seekPlayback}
          aria-label="Track position"
        />
        <button type="button" onClick={restartPlayback} aria-label="Restart track">
          |&lt;
        </button>
        <button
          type="button"
          onClick={() => void startPlayback()}
          disabled={isPlaying}
          aria-label="Play track"
        >
          &gt;
        </button>
        <button
          type="button"
          onClick={pausePlayback}
          disabled={!isPlaying}
          aria-label="Pause track"
        >
          ||
        </button>
        <button type="button" onClick={stopPlayback} aria-label="Stop track">
          []
        </button>
        <span className="sr-only" aria-live="polite">
          {hasAudioError
            ? "The portfolio audio could not be played."
            : isPlaying
              ? `${CUSTOM_TRACK_TITLE} is playing.`
              : `${CUSTOM_TRACK_TITLE} is paused.`}
        </span>
      </div>

      <audio
        ref={audioRef}
        src={CUSTOM_TRACK_SRC ?? undefined}
        loop
        preload="metadata"
        onLoadedMetadata={(event) => {
          const nextDuration = event.currentTarget.duration;
          setDuration(Number.isFinite(nextDuration) ? nextDuration : 0);
        }}
        onTimeUpdate={(event) => {
          const nextTime = event.currentTarget.currentTime;
          offsetRef.current = nextTime;
          setElapsed(nextTime);
        }}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setHasAudioError(true)}
      />
    </>
  );
}

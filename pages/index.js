import Head from "next/head";
import Image from "next/image";
import Hero from '../src/container/Hero'
import Community from '../src/container/Community'
import POS from '../src/container/POS'


export default function Home() {
  return (
    <>
      <Hero />
      <Community/>
      <POS/>

    </>
  );
}

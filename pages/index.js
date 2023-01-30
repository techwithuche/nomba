import Head from "next/head";
import Image from "next/image";
import Hero from '../src/container/Hero'
import Terminal from '../src/container/Terminal'
import Payment from '../src/container/Payment'
import Pos from '../src/container/POS'
import Community from '../src/container/Community'


export default function Home() {
  return (
    <>
      <Hero />
      <Terminal />
      <Payment />
      <Pos />
      <Community/>
    </>
  );
}

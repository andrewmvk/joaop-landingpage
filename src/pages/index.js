import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import LawyerReference from "@/components/LawyerReference";
import Button from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   return (
      <>
         <Head>
            <title>João Paulo</title>
            <meta name="description" content="Landing Page" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className={inter.className}>
            <div className={styles.headerCon}>
               <Image
                  src="/logo.png"
                  alt="Logo: O Direito de Viver Bem"
                  className={styles.logo}
                  width={100}
                  height={100}
                  quality={100}
               />
               <Header />
               <div className={styles.mainImgCon}>
                  <Image
                     className={styles.mainImage}
                     src="/main-image.png"
                     alt="Advogado Joao Paulo"
                     quality={100}
                     priority
                     fill
                  />
               </div>
               <div className={styles.mainDetails}>
                  <h1>João Paulo Borges</h1>
                  <h2>
                     Especialista em <p>DIREITO MÉDICO</p> e da <p>SAÚDE</p>
                  </h2>
                  <Button text="Entre em contato" />
               </div>
               <LawyerReference />
            </div>
         </main>
      </>
   );
}

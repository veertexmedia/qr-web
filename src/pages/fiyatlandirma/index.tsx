/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import UrunlerimizHeader from "@/components/urunlerimiz/UrunlerimizHeader";
import React from "react";
import { Flex, Image, Text } from "rebass/styled-components";
import UrunlerimizBanner from "@/components/urunlerimiz/UrunlerimizBanner";
import UrunlerimizFooter from "@/components/urunlerimiz/UrunlerimizFooter";
import UrunlerimizPricing from "@/components/urunlerimiz/UrunlerimizPricing";
import useIsMobile from "@/hooks/useIsMobile";
import Head from "next/head";

function page() {
  const isMobile = useIsMobile();
  return (
    <>
      <Head>
        <title>V'QR | Fiyatlandırma</title>
      </Head>
      <UrunlerimizHeader
        imageSrc={"/images/qrwebsiyah.png"}
        textColor={"#000"}
        backgroundColor={"#ECF0F1"}
      />
      <Flex width={1} mt="150px">
        <Flex
          width={1}
          flexDirection={isMobile ? "column" : "row"}
          height={isMobile ? "" : "200px"}
          backgroundColor="#fff"
          mx={isMobile ? "40px" : "100px"}
          justifyContent="space-between"
          sx={{ borderRadius: "15px", p: 3 }}
          alignItems={isMobile ? "center" : ""}
        >
          <Flex
            flexDirection="column"
            width={isMobile ? "" : "60%"}
            sx={{ gap: 2 }}
          >
            <Text color="#e67e22" fontSize="42px" fontWeight="900">
              Satın almadan önce bir demo görmek ister misiniz?
            </Text>
            <Text color="#212A34" fontSize="20px">
              Yanda gösterilen QR kodu okutarak demo dijital menümüzü
              görebilirsiniz
            </Text>
          </Flex>
          <Image
            width={isMobile ? "200px" : ""}
            height={isMobile ? "200px" : ""}
            mt={isMobile ? "30px" : ""}
            src="/images/demo.png"
          />
        </Flex>
      </Flex>
      <UrunlerimizPricing />
      <UrunlerimizBanner />
      <UrunlerimizFooter />
    </>
  );
}

export default page;

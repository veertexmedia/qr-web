/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Image, Link, Text } from "rebass/styled-components";
import { Icon } from "@iconify/react/dist/iconify.js";
import UrunlerimizCard from "@/components/urunlerimiz/UrunlerimizCard";
import UrunlerimizBanner from "@/components/urunlerimiz/UrunlerimizBanner";
import UrunlerimizFooter from "@/components/urunlerimiz/UrunlerimizFooter";
import UrunlerimizPricing from "@/components/urunlerimiz/UrunlerimizPricing";
import UrunlerimizHeader from "@/components/urunlerimiz/UrunlerimizHeader";
import useIsMobile from "@/hooks/useIsMobile";
import Head from "next/head";

const VqrPage = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <Head>
        <title>V'QR | Ana Sayfa</title>
      </Head>
      <UrunlerimizHeader
        imageSrc={"/images/qrwebbeyaz.png"}
        textColor={"#fff"}
        backgroundColor={"#212A34"}
      />
      <Flex
        width="100%"
        height="680px"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        sx={{
          backgroundImage: `url('/images/qr_background.jpg')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          top: "0px",
        }}
      >
        <Flex
          width="100%"
          height="100%"
          backgroundColor="#000"
          sx={{ position: "absolute", opacity: ".3", zIndex: "1" }}
        ></Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          sx={{ gap: 3, zIndex: "2" }}
        >
          <Text
            width={`${isMobile ? "90%" : "45%"}`}
            fontSize="48px"
            fontWeight="900"
            textAlign="center"
            color="#fff"
          >
            Müşterilerinize en iyi deneyimi sumanız için oluşturulmuş dijital
            çözümler
          </Text>
          <Button
            backgroundColor="#E67E22"
            fontSize={isMobile ? "24px" : "16px"}
            height={isMobile ? "50px" : "42px"}
            sx={{ borderRadius: "10px" }}
          >
            <Link href="http://localhost:3000/urunlerimiz/vqr/basvuru">
              Hemen Başla
            </Link>
          </Button>
        </Flex>
      </Flex>
      <UrunlerimizCard />
      <Flex flexDirection="column" sx={{ gap: "60px", marginTop: "-75px" }}>
        <Flex
          mx={isMobile ? "40px" : "100px"}
          flexDirection={isMobile ? "column" : "row"}
          backgroundColor="#fff"
          sx={{ borderRadius: "15px", gap: "10px" }}
        >
          <Flex flex={1} p={isMobile ? "20px" : "36px"}>
            <Image
              sx={{ borderRadius: "10px", objectFit: "cover" }}
              width="100%"
              height="300px"
              src="/images/cafe_1.jpg"
            />
          </Flex>
          <Flex
            py={isMobile ? "0px" : "36px"}
            px={isMobile ? "20px" : "0px"}
            flex={1}
            flexDirection="column"
            justifyContent="space-between"
            sx={{ gap: isMobile ? "40px" : "0px" }}
          >
            <Flex flexDirection="column" sx={{ gap: "10px" }}>
              <Text color="#E67E22" fontSize="28px" fontWeight="900">
                Vertex Qr Sistemi Nasıl Çalışır ?
              </Text>
              <Text color="#212A34" fontSize="18px" fontWeight="100">
                Vertex Qr sisteminin çözümleri sayesinde müşterileriniz
                beklemeden masaya oturur; anında menünüze bakar;
                kampanyalarınızdan haberdar olur ve ek ürün önermeleri sayesinde
                cironuzu büyütür. Anında sipariş verebilirler. Nasıl çalıştığı
                hakkında detaylı bilgi edinebilirsiniz.
              </Text>
            </Flex>
            <Flex
              pr={isMobile ? "0px" : "36px"}
              pb={isMobile ? "3" : "0"}
              justifyContent="flex-end"
              alignItems="center"
              sx={{ gap: "5px" }}
            >
              <Text color="#e67e22" fontSize="20px" fontWeight="900">
                <Link href="http://localhost:3000/urunlerimiz/vqr/nasilcalisir">
                  Detaylı İncele
                </Link>
              </Text>
              <Icon
                width="20px"
                height="20px"
                color="#e67e22"
                icon="akar-icons:arrow-right"
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          mx={isMobile ? "40px" : "100px"}
          flexDirection={isMobile ? "column" : "row"}
          backgroundColor="#fff"
          sx={{ borderRadius: "15px", gap: "10px" }}
        >
          <Flex flex={1} p={isMobile ? "20px" : "36px"}>
            <Image
              sx={{ borderRadius: "10px", objectFit: "cover" }}
              width="100%"
              height="300px"
              src="/images/cafe_2.jpg"
            />
          </Flex>
          <Flex
            py={isMobile ? "0px" : "36px"}
            px={isMobile ? "20px" : "0px"}
            flex={1}
            flexDirection="column"
            justifyContent="space-between"
            sx={{ gap: isMobile ? "40px" : "0px" }}
          >
            <Flex flexDirection="column" sx={{ gap: "10px" }}>
              <Text color="#E67E22" fontSize="28px" fontWeight="900">
                Vertex Qr Sistemini Deneyimlemek İster Misiniz?
              </Text>
              <Text color="#212A34" fontSize="18px" fontWeight="100">
                Vertex Qr sisteminin çözümleri sayesinde müşterileriniz
                beklemeden masaya oturur; anında menünüze bakar;
                kampanyalarınızdan haberdar olur ve ek ürün önermeleri sayesinde
                cironuzu büyütür. Anında sipariş verebilirler. Nasıl çalıştığı
                hakkında detaylı bilgi edinebilirsiniz.
              </Text>
            </Flex>
            <Flex
              pr={isMobile ? "0px" : "36px"}
              pb={isMobile ? "3" : "0"}
              justifyContent="flex-end"
              alignItems="center"
              sx={{ gap: "5px" }}
            >
              <Text color="#e67e22" fontSize="20px" fontWeight="900">
                <Link href="https://sayracafe.thevertexcreative.com/menu?company=sayracafe">
                  Demoyu İncele
                </Link>
              </Text>
              <Icon
                width="20px"
                height="20px"
                color="#e67e22"
                icon="akar-icons:arrow-right"
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <UrunlerimizPricing />
      <UrunlerimizBanner />
      <UrunlerimizFooter />
    </>
  );
};

export default VqrPage;

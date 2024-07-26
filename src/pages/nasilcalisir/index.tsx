/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
"use client";
import UrunlerimizHeader from "@/components/urunlerimiz/UrunlerimizHeader";
import React from "react";
import { Flex, Image, Link, Text } from "rebass/styled-components";
import UrunlerimizBanner from "@/components/urunlerimiz/UrunlerimizBanner";
import UrunlerimizFooter from "@/components/urunlerimiz/UrunlerimizFooter";
import { Icon } from "@iconify/react/dist/iconify.js";
import useIsMobile from "@/hooks/useIsMobile";
import Head from "next/head";

function page() {
  const isMobile = useIsMobile();
  return isMobile ? (
    <>
      <Head>
        <title>V'QR | Nasıl Çalışır?</title>
      </Head>
      <UrunlerimizHeader
        imageSrc={"/images/qrwebsiyah.png"}
        textColor={"#000"}
        backgroundColor={"#ECF0F1"}
      />
      <Flex width={1} mt="100px">
        <Flex flexDirection="column" alignItems="center" width={1} mx="40px">
          <Flex>
            <Image src="/images/mobil_qr.png" />
          </Flex>
          <Flex flexDirection="column" sx={{ gap: 4 }}>
            <Text color="#e67e22" fontSize="30px" fontWeight="900">
              Dijital Restoran ve Cafe Menüleriyle Misafirlerinizin
              Memnuniyetini Arttırın
            </Text>
            <Text color="#212a34" fontSize="18px">
              Vertex Creative'nin QR menü yazılımı yiyecek ve içecek seçiminize
              yeni bir görünüm kazandırır ve gelirinizi artırmanıza yardımcı
              olur. Kullanımı kolay arayüzümüzle misafirleriniz menü öğelerini
              görüntüleyebilir, inceleyebilir ve seçebilir, not ekleyebilir ve
              siparişlerini saniyeler içinde onaylayabilir!
            </Text>
            <Text color="#e67e22" fontSize="20px" fontWeight="900">
              V'QR Nasıl Çalışır ?
            </Text>
            <Text color="#212a34" fontSize="18px">
              Vertex Creative'nin QR menü yazılımı yiyecek ve içecek seçiminize
              yeni bir görünüm kazandırır ve gelirinizi artırmanıza yardımcı
              olur. Kullanımı kolay arayüzümüzle misafirleriniz menü öğelerini
              görüntüleyebilir, inceleyebilir ve seçebilir, not ekleyebilir ve
              siparişlerini saniyeler içinde onaylayabilir!
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        mx="40px"
        mt="20px"
        flexDirection="column"
        sx={{ borderRadius: "15px", gap: "10px" }}
      >
        <Flex>
          <Image
            sx={{ borderRadius: "10px", objectFit: "cover" }}
            width="100%"
            height="300px"
            src="/images/ecommerce.jpg"
          />
        </Flex>
        <Flex flexDirection="column" justifyContent="space-between">
          <Flex flexDirection="column" sx={{ gap: "10px" }}>
            <Text color="#212A34" fontSize="18px" fontWeight="100">
              Vertex Qr sisteminin çözümleri sayesinde müşterileriniz beklemeden
              masaya oturur; anında menünüze bakar; kampanyalarınızdan haberdar
              olur ve ek ürün önermeleri sayesinde cironuzu büyütür. Anında
              sipariş verebilirler. Nasıl çalıştığı hakkında detaylı bilgi
              edinebilirsiniz.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <UrunlerimizBanner />
      <UrunlerimizFooter />
    </>
  ) : (
    <>
      <Head>
        <title>V'QR | Nasıl Çalışır?</title>
      </Head>
      <UrunlerimizHeader
        imageSrc={"/images/qrwebsiyah.png"}
        textColor={"#000"}
        backgroundColor={"#ECF0F1"}
      />
      <Flex width={1} mt="150px">
        <Flex width={1} mx="100px">
          <Flex flex={1} flexDirection="column" sx={{ gap: 4 }}>
            <Text color="#e67e22" fontSize="48px" fontWeight="900">
              Dijital Restoran ve Cafe Menüleriyle Misafirlerinizin
              Memnuniyetini Arttırın
            </Text>
            <Text color="#212a34" fontSize="20px">
              Vertex Creative'nin QR menü yazılımı yiyecek ve içecek seçiminize
              yeni bir görünüm kazandırır ve gelirinizi artırmanıza yardımcı
              olur. Kullanımı kolay arayüzümüzle misafirleriniz menü öğelerini
              görüntüleyebilir, inceleyebilir ve seçebilir, not ekleyebilir ve
              siparişlerini saniyeler içinde onaylayabilir!
            </Text>
            <Text color="#e67e22" fontSize="48px" fontWeight="900">
              V'QR Nasıl Çalışır ?
            </Text>
            <Text color="#212a34" fontSize="20px">
              Vertex Creative'nin QR menü yazılımı yiyecek ve içecek seçiminize
              yeni bir görünüm kazandırır ve gelirinizi artırmanıza yardımcı
              olur. Kullanımı kolay arayüzümüzle misafirleriniz menü öğelerini
              görüntüleyebilir, inceleyebilir ve seçebilir, not ekleyebilir ve
              siparişlerini saniyeler içinde onaylayabilir!
            </Text>
          </Flex>
          <Flex flex={1}>
            <Image src="/images/mobil_qr.png" />
          </Flex>
        </Flex>
      </Flex>
      <Flex mx="100px" height="400px" sx={{ borderRadius: "15px", gap: "0px" }}>
        <Flex flex={1}>
          <Image
            sx={{ borderRadius: "10px" }}
            width="100%"
            src="/images/ecommerce.jpg"
          />
        </Flex>
        <Flex flex={1} flexDirection="column" justifyContent="space-between">
          <Flex flexDirection="column" sx={{ gap: "10px" }}>
            <Text color="#212A34" fontSize="18px" fontWeight="100">
              Vertex Qr sisteminin çözümleri sayesinde müşterileriniz beklemeden
              masaya oturur; anında menünüze bakar; kampanyalarınızdan haberdar
              olur ve ek ürün önermeleri sayesinde cironuzu büyütür. Anında
              sipariş verebilirler. Nasıl çalıştığı hakkında detaylı bilgi
              edinebilirsiniz.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <UrunlerimizBanner />
      <UrunlerimizFooter />
    </>
  );
}

export default page;

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import UrunlerimizHeader from "@/components/urunlerimiz/UrunlerimizHeader";
import React from "react";
import { Button, Flex, Image, Text } from "rebass/styled-components";
import UrunlerimizBanner from "@/components/urunlerimiz/UrunlerimizBanner";
import UrunlerimizFooter from "@/components/urunlerimiz/UrunlerimizFooter";
import UrunlerimizPricing from "@/components/urunlerimiz/UrunlerimizPricing";
import useIsMobile from "@/hooks/useIsMobile";
import { Input } from "@rebass/forms";
import { Icon } from "@iconify/react/dist/iconify.js";
import Head from "next/head";

function page() {
  const isMobile = useIsMobile();
  return (
    <>
      <Head>
        <title>V'QR | Başvuru</title>
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
          backgroundColor="#fff"
          mx={isMobile ? "40px" : "100px"}
          justifyContent="space-between"
          sx={{ borderRadius: "15px", p: 3 }}
          alignItems={isMobile ? "center" : ""}
        >
          <Flex
            width={1}
            flexDirection="column"
            alignItems="center"
            sx={{ gap: 4 }}
          >
            <Flex flexDirection="column" alignItems="center">
              <Text color="#212A34" fontSize="24px">
                Başvuru Formunu Doldurun
              </Text>
              <Text color="#212A34" fontSize="18px">
                Size Ulaşalım
              </Text>
            </Flex>
            <Flex flexDirection="column" width={1} sx={{ gap: 3 }}>
              <Input
                color="#212a34"
                backgroundColor="transparent"
                sx={{
                  border: "none",
                  borderBottom: "1px solid #212a34",
                  opacity: 0.6,
                  paddingBottom: "10px",
                  ":focus": {
                    outline: "none",
                    borderBottom: "1px solid #212a34",
                    opacity: 1,
                  },
                }}
                placeholder="Adınız Soyadınız"
              ></Input>
              <Input
                color="#212a34"
                backgroundColor="transparent"
                sx={{
                  border: "none",
                  borderBottom: "1px solid #212a34",
                  opacity: 0.6,
                  paddingBottom: "10px",
                  ":focus": {
                    outline: "none",
                    borderBottom: "1px solid #212a34",
                    opacity: 1,
                  },
                }}
                placeholder="İşletme Adı"
              ></Input>
              <Input
                color="#212a34"
                backgroundColor="transparent"
                sx={{
                  border: "none",
                  borderBottom: "1px solid #212a34",
                  opacity: 0.6,
                  paddingBottom: "10px",
                  ":focus": {
                    outline: "none",
                    borderBottom: "1px solid #212a34",
                    opacity: 1,
                  },
                }}
                placeholder="Telefon Numaranız"
              ></Input>
            </Flex>
            <Flex width={1} justifyContent="flex-end">
              <Button
                backgroundColor="#27527C"
                sx={{
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  borderRadius: "10px",
                  padding: "15px 30px",
                }}
              >
                <Icon icon="fa:send" />
                gönder
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <UrunlerimizBanner />
      <UrunlerimizFooter />
    </>
  );
}

export default page;

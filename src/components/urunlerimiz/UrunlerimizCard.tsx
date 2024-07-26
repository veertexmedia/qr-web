import useIsMobile from "@/hooks/useIsMobile";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Flex, Text } from "rebass/styled-components";

const infoCards = [
  {
    id: 1,
    title: "Menü Yönetimi",
    description:
      "Vertex Qr ile menünüzü anlık olarak güncellemek çok basit. İster yeni bir ürün eklemek, ister yeni kategori eklemek veya isterseniz fiyatlarını yenilemek olsun, misafirlerin memnuniyetini her zaman koruyabilirsiniz.",
    icon: "game-icons:knife-fork",
  },
  {
    id: 1,
    title: "Alerjen ve İçindekiler",
    description:
      "Vertex Qr ile ürünlerinizin içeriklerini veya alerjen durumlarını her ürüne özel olarak girin. Bu sayede misafirlerinizin memnuniyetini en üst seviyeye taşıyın.",
    icon: "hugeicons:medicine-bottle-02",
  },
  {
    id: 1,
    title: "Çoklu Dil",
    description:
      "Vertex Qr ile ürünlerinizin içeriklerini veya alerjen durumlarını her ürüne özel olarak girin. Bu sayede misafirlerinizin memnuniyetini en üst seviyeye taşıyın.",
    icon: "hugeicons:language-skill",
  },
  {
    id: 1,
    title: "Çoklu para birimi",
    description:
      "Vertex Qr ile ürünlerinizin fiyatlarını birden fazla para birimi ile sunabilirsiniz. Yabancı misafirlerinize kendi para birimleri ile ürünleri inceleme fırsatı sunarak memnuniyetinizi arttırabilirsiniz.",
    icon: "tdesign:money",
  },
];

function UrunlerimizCard() {
  const isMobile = useIsMobile();
  return (
    <Flex
      width={1}
      alignItems="center"
      justifyContent="center"
      flexDirection={isMobile ? "column" : "row"}
      sx={{
        position: "relative",
        top: `${isMobile ? "-100px" : "-150px"}`,
        zIndex: "10",
        gap: `${isMobile ? "20px" : "40px"}`,
      }}
    >
      {infoCards.map((infoCard) => (
        <Flex
          key={infoCard.id}
          width={isMobile ? "400px" : "220px"}
          height={isMobile ? "200px" : "300px"}
          flexDirection="column"
          alignItems="center"
          backgroundColor="#fff"
          sx={{
            borderRadius: "15px",
            gap: "10px",
            p: "10px",
            pt: "20px",
          }}
        >
          <Icon
            color="#212A34"
            width="40px"
            height="40px"
            icon={infoCard.icon}
          />
          <Text fontSize="18px" fontWeight="900" color="#212A34">
            {infoCard.title}
          </Text>
          <Text
            fontSize="15px"
            fontWeight="100"
            opacity=".9"
            color="#212A34"
            textAlign="center"
          >
            {infoCard.description}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}

export default UrunlerimizCard;

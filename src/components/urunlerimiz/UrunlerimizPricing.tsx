import useIsMobile from "@/hooks/useIsMobile";
import React from "react";
import { Button, Flex, Text } from "rebass/styled-components";

function UrunlerimizPricing() {
  const isMobile = useIsMobile();

  const handleWhatsAppClick = () => {
    const phoneNumber = "905318229097";
    const url = isMobile
      ? `whatsapp://send?phone=${phoneNumber}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <Flex mt={5} flexDirection="column" alignItems="center" mx="100px">
      <Text
        color="#e67e22"
        fontSize="28px"
        fontWeight="900"
        sx={{ textTransform: "uppercase" }}
      >
        fiyatlandırma
      </Text>
      <Flex
        flexDirection={isMobile ? "column" : "row"}
        mt={3}
        alignItems="center"
        sx={{ gap: "30px" }}
      >
        <Flex
          width="300px"
          height="500px"
          backgroundColor="#fff"
          flexDirection="column"
          sx={{ borderRadius: "15px" }}
        >
          <Flex
            width="100%"
            height="100px"
            alignItems="center"
            justifyContent="center"
            backgroundColor="#27527c"
            sx={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
          >
            <Text
              fontSize="28px"
              fontWeight="900"
              color="#fff"
              sx={{ textTransform: "uppercase" }}
            >
              basit
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            height="100%"
            py={4}
            justifyContent="space-between"
          >
            <Flex flexDirection="column" alignItems="center" sx={{ gap: 3 }}>
              <Text
                color="#212A34"
                sx={{ textTransform: "capitalize", opacity: 0.7 }}
              >
                ücretsiz qr kod
              </Text>
              <Text color="#212A34" sx={{ textTransform: "capitalize" }}>
                markaya özel görsel tasarım
              </Text>
              <Text
                color="#212A34"
                sx={{ textTransform: "capitalize", opacity: 0.7 }}
              >
                sınırsız kategori oluşturma
              </Text>
              <Text color="#212A34" sx={{ textTransform: "capitalize" }}>
                sınırsız menü oluşturma
              </Text>
            </Flex>
            <Flex>
              <Button
                sx={{
                  textTransform: "uppercase",
                  backgroundColor: "#27527C",
                  borderRadius: "10px",
                  padding: "10px 40px",
                }}
                onClick={handleWhatsAppClick}
              >
                fiyat al
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          width="340px"
          height="575px"
          backgroundColor="#fff"
          flexDirection="column"
          sx={{ borderRadius: "15px" }}
        >
          <Flex
            width="100%"
            height="100px"
            alignItems="center"
            justifyContent="center"
            backgroundColor="#e67e22"
            sx={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
          >
            <Text
              fontSize="28px"
              fontWeight="900"
              color="#fff"
              sx={{ textTransform: "uppercase" }}
            >
              standart
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            height="100%"
            py={4}
            justifyContent="space-between"
          >
            <Flex flexDirection="column" alignItems="center" sx={{ gap: 3 }}>
              <Text
                color="#212A34"
                sx={{ textTransform: "capitalize", opacity: 0.7 }}
              >
                ücretsiz qr kod
              </Text>
              <Text color="#212A34" sx={{ textTransform: "capitalize" }}>
                sınırsız kategori oluşturma
              </Text>
              <Text
                color="#212A34"
                sx={{ textTransform: "capitalize", opacity: 0.7 }}
              >
                sınırsız menü oluşturma
              </Text>
              <Text color="#212A34" sx={{ textTransform: "capitalize" }}>
                menü yönetim paneli
              </Text>
              <Text
                color="#212A34"
                sx={{ textTransform: "capitalize", opacity: 0.7 }}
              >
                çoklu dil desteği
              </Text>
              <Text color="#212A34" sx={{ textTransform: "capitalize" }}>
                çoklu para birimi
              </Text>
            </Flex>
            <Flex>
              <Button
                sx={{
                  textTransform: "uppercase",
                  backgroundColor: "#e67e22",
                  borderRadius: "10px",
                  padding: "10px 40px",
                }}
                onClick={handleWhatsAppClick}
              >
                fiyat al
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          width="300px"
          height="500px"
          backgroundColor="#fff"
          flexDirection="column"
          sx={{ borderRadius: "15px" }}
        >
          <Flex
            width="100%"
            height="100px"
            alignItems="center"
            justifyContent="center"
            backgroundColor="#27527c"
            sx={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
          >
            <Text
              fontSize="28px"
              fontWeight="900"
              color="#fff"
              sx={{ textTransform: "uppercase" }}
            >
              özel
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            height="100%"
            py={4}
            justifyContent="space-between"
          >
            <Flex flexDirection="column" alignItems="center" sx={{ gap: 3 }}>
              <Text
                color="#212A34"
                sx={{ textTransform: "capitalize", opacity: 0.7 }}
              >
                ücretsiz qr kod
              </Text>
              <Text color="#212A34" sx={{ textTransform: "capitalize" }}>
                markaya özel görsel tasarım
              </Text>
              <Text
                color="#212A34"
                sx={{ textTransform: "capitalize", opacity: 0.7 }}
              >
                sınırsız kategori oluşturma
              </Text>
              <Text color="#212A34" sx={{ textTransform: "capitalize" }}>
                sınırsız menü oluşturma
              </Text>
              <Text
                color="#212A34"
                sx={{ textTransform: "capitalize", opacity: 0.7 }}
              >
                menü yönetim paneli
              </Text>
              <Text color="#212A34" sx={{ textTransform: "capitalize" }}>
                çoklu dil desteği
              </Text>
              <Text
                color="#212A34"
                sx={{ textTransform: "capitalize", opacity: 0.7 }}
              >
                çoklu para birimi
              </Text>
            </Flex>
            <Flex>
              <Button
                sx={{
                  textTransform: "uppercase",
                  backgroundColor: "#27527C",
                  borderRadius: "10px",
                  padding: "10px 40px",
                }}
                onClick={handleWhatsAppClick}
              >
                fiyat al
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default UrunlerimizPricing;

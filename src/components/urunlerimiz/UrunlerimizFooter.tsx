import useIsMobile from "@/hooks/useIsMobile";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Button, Flex, Image, Link, Text } from "rebass/styled-components";

function UrunlerimizFooter() {
  const isMobile = useIsMobile();

  const handleWhatsAppClick = () => {
    const phoneNumber = "905318229097";
    const url = isMobile
      ? `whatsapp://send?phone=${phoneNumber}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, "_blank");
  };

  return isMobile ? (
    <Flex mt={5} width={1} backgroundColor="#fff">
      <Flex width={1} mx="20px" py={3} flexDirection="column">
        <Flex flexDirection="column" width={1} alignItems="start">
          <Flex flexDirection="column" sx={{ gap: 3, opacity: 0.7 }}>
            <Link color="#212A34">Nasıl Çalışır ?</Link>
            <Link color="#212A34">Fiyatlandırma</Link>
            <Link color="#212A34">İşletmeniz İçin Başvurun</Link>
          </Flex>
          <Flex
            alignItems="start"
            flexDirection="column"
            mt={4}
            sx={{ gap: 3 }}
          >
            <Flex>
              <Image width="75px" src="/images/qrwebsiyah.png" />
            </Flex>
            <Flex sx={{ gap: 3 }}>
              <Button
                backgroundColor="#E67E22"
                sx={{
                  borderRadius: "20px",
                  textTransform: "uppercase",
                  padding: "10px 20px",
                }}
              >
                <Link href="https://sayracafe.thevertexcreative.com/menu?company=sayracafe">
                  Demoyu İncele
                </Link>
              </Button>
              <Button
                sx={{
                  backgroundColor: "transparent",
                  color: "#e67e22",
                  border: "1px solid #e67e22",
                  borderRadius: "20px",
                  textTransform: "uppercase",
                  padding: "10px 20px",
                }}
                onClick={handleWhatsAppClick}
              >
                bize ulaş
              </Button>
            </Flex>
            <Flex alignItems="center" sx={{ gap: 2 }}>
              <Icon
                color="#212A34"
                width="30px"
                height="30px"
                icon="mdi:instagram"
              />
              <Link
                href="https://www.instagram.com/thevertexcreative/?next=%2F"
                color="#212A34"
                sx={{ textTransform: "uppercase" }}
              >
                Instagram
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          width={1}
          justifyContent="space-between"
          sx={{
            borderTop: "1px solid #0005",
            paddingTop: "10px",
            marginTop: "50px",
          }}
        >
          <Text color="#212A34" opacity=".5" fontSize="12px">
            2024 Tüm hakları saklıdır.
          </Text>
          <Text color="#212A34" opacity=".5" fontSize="12px">
            Bir
            <strong>
              <Link href="/" color="#212A34">
                {" "}
                Vertex Creative{" "}
              </Link>
            </strong>
            Markasıdır.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  ) : (
    <Flex mt={5} width={1} height="300px" backgroundColor="#fff">
      <Flex mt={4} width={1} mx="100px" flexDirection="column">
        <Flex width={1} justifyContent="space-between" alignItems="center">
          <Flex flexDirection="column" sx={{ gap: 4 }}>
            <Flex>
              <Image width="75px" src="/images/qrwebsiyah.png" />
            </Flex>
            <Flex sx={{ gap: 3 }}>
              <Button
                backgroundColor="#E67E22"
                sx={{
                  borderRadius: "20px",
                  textTransform: "uppercase",
                  padding: "10px 20px",
                }}
              >
                <Link
                  target="_blank"
                  href="https://sayracafe.thevertexcreative.com/menu?company=sayracafe"
                >
                  Demoyu İncele
                </Link>
              </Button>
              <Button
                sx={{
                  backgroundColor: "transparent",
                  color: "#e67e22",
                  border: "1px solid #e67e22",
                  borderRadius: "20px",
                  textTransform: "uppercase",
                  padding: "10px 20px",
                }}
                onClick={handleWhatsAppClick}
              >
                bize ulaş
              </Button>
            </Flex>
            <Flex alignItems="center" sx={{ gap: 2 }}>
              <Icon
                color="#212A34"
                width="30px"
                height="30px"
                icon="mdi:instagram"
              />
              <Link
                href="https://www.instagram.com/thevertexcreative/?next=%2F"
                color="#212A34"
                sx={{ textTransform: "uppercase" }}
              >
                Instagram
              </Link>
            </Flex>
          </Flex>
          <Flex flexDirection="column" sx={{ gap: 3, opacity: 0.7 }}>
            <Link color="#212A34">Nasıl Çalışır ?</Link>
            <Link color="#212A34">Fiyatlandırma</Link>
            <Link color="#212A34">İşletmeniz İçin Başvurun</Link>
          </Flex>
        </Flex>
        <Flex
          width={1}
          justifyContent="space-between"
          sx={{
            borderTop: "1px solid #0005",
            paddingTop: "10px",
            marginTop: "50px",
          }}
        >
          <Text color="#212A34" opacity=".5" fontSize="12px">
            2024 Tüm hakları saklıdır.
          </Text>
          <Text color="#212A34" opacity=".5" fontSize="12px">
            Bir
            <strong>
              <Link href="/" color="#212A34">
                {" "}
                Vertex Creative{" "}
              </Link>
            </strong>
            Markasıdır.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default UrunlerimizFooter;

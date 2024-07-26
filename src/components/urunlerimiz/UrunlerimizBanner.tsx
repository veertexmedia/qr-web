import useIsMobile from "@/hooks/useIsMobile";
import React from "react";
import { Button, Flex, Text } from "rebass/styled-components";

function UrunlerimizBanner() {
  const isMobile = useIsMobile();
  const handleWhatsAppClick = () => {
    const phoneNumber = "905318229097";
    const url = isMobile
      ? `whatsapp://send?phone=${phoneNumber}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <Flex
      mt={5}
      alignItems="center"
      width={1}
      height={isMobile ? "400px" : "340px"}
      sx={{
        backgroundImage: `url('/images/qr_background.jpg')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <Flex
        width="100%"
        height="100%"
        backgroundColor="#000"
        sx={{ position: "absolute", opacity: ".3", zIndex: "1" }}
      ></Flex>
      <Flex
        width={1}
        mx={isMobile ? "20px" : "100px"}
        sx={{ zIndex: "2" }}
        justifyContent="space-between"
        alignItems="center"
        flexDirection={isMobile ? "column" : "row"}
      >
        <Flex
          flexDirection="column"
          sx={{ gap: 3, textAlign: isMobile ? "center" : "left" }}
        >
          <Text
            color="#fff"
            fontSize={isMobile ? "32px" : "48px"}
            fontWeight="900"
            sx={{ textTransform: "capitalize" }}
          >
            bir işletmeniz mi var ?
          </Text>
          <Text color="#fff" fontSize={isMobile ? "24px" : "32px"}>
            Siz de Vertex Qr ailesine katılmak için bize ulaşın
          </Text>
        </Flex>
        <Flex mt={isMobile ? "20px" : "0"}>
          <Button
            backgroundColor="#E67E22"
            sx={{
              textTransform: "uppercase",
              padding: "15px 30px",
              borderRadius: "10px",
            }}
            onClick={handleWhatsAppClick}
          >
            bize ulaşın
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default UrunlerimizBanner;

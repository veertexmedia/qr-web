"use client";
import useIsMobile from "@/hooks/useIsMobile";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Flex, Image, Link, Text } from "rebass/styled-components";

const navLinks = [
  {
    id: 1,
    title: "Nasıl Çalışır?",
    href: "/nasilcalisir",
  },
  {
    id: 2,
    title: "Fiyatlandırma",
    href: "/fiyatlandirma",
  },
  {
    id: 3,
    title: "İşletmeniz İçin Başvurun",
    href: "/basvuru",
  },
  {
    id: 4,
    title: "Vertex Creative",
    href: "https://www.thevertexcreative.com",
  },
];

function UrunlerimizHeader({
  imageSrc,
  textColor,
  backgroundColor,
}: {
  imageSrc: any;
  textColor: any;
  backgroundColor: any;
}) {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [background, setBackground] = useState("transparent");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackground(backgroundColor);
      } else {
        setBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return isMobile ? (
    <Flex
      width="100%"
      height="75px"
      alignItems="center"
      justifyContent="space-between"
      px="20px"
      sx={{
        position: "fixed",
        top: "0px",
        zIndex: 1000 + " !important",
        backgroundColor: background,
        transition: "background-color 0.3s ease",
      }}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        width={1}
        sx={{ zIndex: 10 }}
      >
        <Image
          src={imageSrc}
          width="100px"
          onClick={() => router.push("/")}
          sx={{ cursor: "pointer" }}
        />
        <Button
          backgroundColor="#E67E22"
          sx={{ borderRadius: "10px", height: "42px" }}
        >
          <Link href="https://sayracafe.thevertexcreative.com/admin">
            Yönetim Paneli
          </Link>
        </Button>
        <Icon
          width="50px"
          height="50px"
          color={textColor}
          icon={isMenuOpen ? "carbon:close" : "solar:hamburger-menu-linear"}
          onClick={toggleMenu}
          style={{ transition: "transform 0.3s ease" }}
        />
      </Flex>
      <Flex
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: isMenuOpen ? "100%" : "0%",
          backgroundColor: backgroundColor,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 5,
          color: "#fff",
          overflow: "hidden",
          opacity: isMenuOpen ? 1 : 0,
          transition: "height 1s ease, opacity 0.5s ease",
          gap: 4,
        }}
      >
        {navLinks.map((navLink) => (
          <Link
            key={navLink.id}
            href={navLink.href}
            sx={{
              color: textColor,
              fontSize: "28px",
              marginBottom: "20px",
              opacity: isMenuOpen ? 1 : 0,
              transition: "opacity 3s ease",
              textTransform: "uppercase",
            }}
            onClick={closeMenu}
          >
            {navLink.title}
          </Link>
        ))}
      </Flex>
    </Flex>
  ) : (
    <Flex
      width="100%"
      height="75px"
      alignItems="center"
      justifyContent="space-between"
      px="100px"
      sx={{
        position: "fixed",
        top: "0px",
        zIndex: 1000 + " !important",
        backgroundColor: background,
        transition: "background-color 0.3s ease",
      }}
    >
      <Image
        src={imageSrc}
        width="100px"
        onClick={() => router.push("/")}
        sx={{ cursor: "pointer" }}
      />
      <Flex sx={{ gap: "30px" }}>
        {navLinks.map((navLink) => (
          <Link
            target={navLink.href.startsWith("https") ? "_blank" : ""}
            color={textColor}
            key={navLink.id}
            href={navLink.href}
          >
            {navLink.title}
          </Link>
        ))}
      </Flex>
      <Button
        backgroundColor="#E67E22"
        sx={{ borderRadius: "10px", height: "42px" }}
      >
        <Link href="https://sayracafe.thevertexcreative.com/admin">
          Yönetim Paneli
        </Link>
      </Button>
    </Flex>
  );
}

export default UrunlerimizHeader;

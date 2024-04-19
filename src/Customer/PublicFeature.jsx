// @ts-ignore
import tourismapp from "../assets/assuranceapp1.png";
// @ts-ignore
import assuranceapp from "../assets/assuranceapp1.png";
import secondhandapp from "../assets/secondhandapp1.png";
// @ts-ignore
import mobileicon from "../assets/mobile.svg";
import FeaturedPost from "../Customer/FeaturedPost";
import SmeSection from "../Customer/SmeSection";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

const PublicFeature = ({ language }) => {
  const featuredPosts = [
    {
      title: language === "en" ? "AI Powered Platform" : "منصة مدعومة بالذكاء الاصطناعي",
      description: language === "en"
        ? "Our AI-powered platform revolutionizes the property market by leveraging advanced algorithms to streamline buying and selling processes."
        : "تقوم منصتنا المدعومة بالذكاء الاصطناعي بثورة في سوق العقارات من خلال الاستفادة من خوارزميات متقدمة لتبسيط عمليات الشراء والبيع.",
      image: tourismapp,
      challenge: language === "en" ? "Major Points" : "نقاط رئيسية",
      challenge1: language === "en" ? "Advanced Algorithms" : "خوارزميات متقدمة",
      challenge2: language === "en" ? "Predictive Pricing" : "التسعير التنبؤي",
      imageLabel: "password",
      buttonText: language === "en" ? "Explore" : "استكشاف",
    },
    {
      title: language === "en" ? "Verified Listings" : "القوائم الموثقة",
      description: language === "en"
        ? "Explore our collection of verified listings, offering a curated selection of properties that meet our stringent quality standards."
        : "استكشف مجموعتنا من القوائم الموثقة، التي تقدم مجموعة مختارة من العقارات التي تلبي معايير الجودة الصارمة لدينا.",
      image: assuranceapp,
      challenge: language === "en" ? "Project Goals" : "أهداف المشروع",
      challenge1: language === "en" ? "Stringent Verification Process" : "عملية التحقق الصارمة",
      challenge2: language === "en" ? "Transparent and Reliable" : "شفاف وموثوق",
      imageLabel: "vulnerable",
      buttonText: language === "en" ? "Explore" : "استكشاف",
    },
    {
      title: language === "en" ? "Professional Real Estate Agents" : "وكلاء عقارات محترفون",
      description: language === "en"
        ? "Connect with professional real estate agents who bring expertise, integrity, and personalized service to every transaction."
        : "تواصل مع وكلاء عقارات محترفين يتمتعون بالخبرة والنزاهة والخدمة الشخصية في كل صفقة.",
      image: secondhandapp,
      challenge: language === "en" ? "Challenges" : "التحديات",
      challenge1: language === "en" ? "Expertise and Integrity" : "الخبرة والنزاهة",
      challenge2: language === "en" ? "Personalized Service" : "خدمة شخصية",
      imageLabel: "vulnerable",
      buttonText: language === "en" ? "Explore" : "استكشاف",
    },
    {
      title: language === "en" ? "Apartments, Villas, Homes" : "شقق، فيلات، منازل",
      description: language === "en"
        ? "Discover a diverse range of apartments, villas, and homes that cater to your lifestyle and budget requirements."
        : "اكتشف مجموعة متنوعة من الشقق والفيلات والمنازل التي تلبي احتياجاتك الاستثمارية والسكنية.",
      image: assuranceapp,
      challenge: language === "en" ? "Objectives" : "الأهداف",
      challenge1: language === "en" ? "Diverse Property Selection" : "تشكيلة متنوعة من العقارات",
      challenge2: language === "en" ? "Tailored to Your Needs" : "مصممة وفقاً لاحتياجاتك",
      imageLabel: "vulnerable",
      buttonText: language === "en" ? "Explore" : "استكشاف",
    },
  ];
  return (
    <Box
      position="relative"
      mt={16}
      w="full"
      display="flex"
      flexDir="column"
      alignItems="start"
      justifyContent="start"
      gap="56px"
      textAlign="left"
      fontSize="36px"
      color="darkslategray.200"
    >
      <Flex alignItems="center">
        <Text ml="5rem" fontWeight="medium" color="dark">
          {language === "en" ? "What's New" : "ما هو الجديد"}
        </Text>
        <Box ml="2">
          <Image h="auto" ml="1rem" maxW="40px" src={mobileicon} alt="" />
        </Box>
      </Flex>
      <Grid
        templateColumns={["1fr", "repeat(2, 1fr)"]}
        gap={8}
        padding={["20px", "20px 80px"]}
      >
        {featuredPosts.map((post) => (
          <FeaturedPost
            key={post.title}
            post={post}
          />
        ))}
      </Grid>
      {/* <SmeSection language={language} /> */}
    </Box>
  );
};

export default PublicFeature;

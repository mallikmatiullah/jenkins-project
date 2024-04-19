// ar: `تستغل دبي العقارية إرثها المذهل كمطور موثوق لترقية سمعة دبي كأيقونة عالمية. بفضل خبرتها التي تزيد عن عقدين من الزمان في تصميم وتطوير المجتمعات السكنية المرغوبة عبر مواقع مائية وحضرية وضواحي، تعالج دبي العقارية كل جانب من جوانب الساحة العقارية. تضم مجتمعاتها - التي تعتبر منازل لمجموعة متنوعة من السكان والعائلات السعيدة - مساحة جميرا البحرية، ومنطقة جداف الواجهة البحرية، ولافي، و1/جميرا بيتش ريزيدنس، وأبراج بيلفيو، ورمرام، ومدن وفيلانوفا، وهي فقط بعض الأمثلة. كما تقدم دبي العقارية للمستثمرين المؤسسين فرص الوصول إلى محفظة أراضي واسعة لفرص التطوير. تهدف جميع المبادرات إلى إثراء حياة السكان والزوار، وجلب مجموعة واسعة من تجارب العيش إلى الإمارات.`
import { Box, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function ProjectDescriptionRent({ language }) {
    const descriptions = {
        en: `Rent - Dubai Properties leverages its impressive legacy as a reliable developer to elevate Dubai’s status as a global icon. With almost two decades of expertise designing and developing sought-after residential master communities across waterfront, urban, and suburban locations, Dubai Properties addresses every aspect of the real estate landscape. Its communities - home to an array of residents and happy families - include JBR, Jaddaf Waterfront, La Vie, 1/JBR, Bellevue Towers, Remraam, Mudon and Villanova to name a few. Dubai Properties also offers institutional investors access to an extensive land portfolio for development opportunities. All the initiatives aim to enrich the lives of residents and visitors, bringing a vast collection of living experiences to the Emirates.`,
    };

    const text = descriptions.en;
    const truncatedText = text.slice(0, 200);

    const [showFullText, setShowFullText] = useState(false);

    const handleToggleText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <>
            <Text fontSize="x-large" ml={"5rem"} mt={"2rem"}>
                {"About Project"}
            </Text>
            <Box p={4} borderWidth="1px" borderRadius="md" mt={4} width={"60%"} ml={"5rem"}>
                <Text>
                    {showFullText ? text : truncatedText}
                </Text>
                <Button onClick={handleToggleText} mt={2}>
                    {showFullText ? "Show less" : "Show more"}
                </Button>
            </Box>
        </>
    );
}


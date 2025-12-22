import {type ActionFunctionArgs, data} from "react-router";
import {GoogleGenerativeAI} from "@google/generative-ai";
import {parseMarkdownToJson} from "~/lib/utils";
import {appwriteConfig, database} from "~/appwrite/client";
import {ID} from "appwrite";

export const action = async ({ request }: ActionFunctionArgs) => {
    const {
        country,
        numberOfDays,
        travelStyle,
        interests,
        budget,
        groupType,
        userId,
    } = await request.json();

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const unsplashApiKey = process.env.UNSPLASH_ACCESS_KEY!;

    try {
        const prompt = `
Create a ${numberOfDays}-day travel itinerary for ${country}.

User info:
- Budget: ${budget}
- Interests: ${interests}
- Travel style: ${travelStyle}
- Group type: ${groupType}

Return ONLY valid JSON (no markdown, no explanation) with this structure:
{
  "name": "",
  "description": "",
  "estimatedPrice": "",
  "duration": ${numberOfDays},
  "budget": "${budget}",
  "travelStyle": "${travelStyle}",
  "country": "${country}",
  "interests": ${interests},
  "groupType": "${groupType}",
  "bestTimeToVisit": [],
  "weatherInfo": [],
  "location": {
    "city": "",
    "coordinates": [],
    "openStreetMap": ""
  },
  "itinerary": []
}
`;

        const textResult = await genAI
            .getGenerativeModel({ model: 'gemini-2.0-flash' })
            .generateContent([prompt])

        const trip = parseMarkdownToJson(textResult.response.text());

        const imageResponse = await fetch(
            `https://api.unsplash.com/search/photos?query=${country} ${interests} ${travelStyle}&client_id=${unsplashApiKey}`
        );

        const imageUrls = (await imageResponse.json()).results.slice(0, 3)
            .map((result: any) => result.urls?.regular || null);

        const result = await database.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.tripCollectionId,
            ID.unique(),
            {
                tripDetail: JSON.stringify(trip),
                createdAt: new Date().toISOString(),
                imageUrls,
                userId,
            }
        )

        return data({ id: result.$id })
    } catch (e: any) {
  console.error('Error generating travel plan:', e);

  return data(
    {
      error: "Gemini API quota exceeded. Please try again later.",
    },
    { status: 429 }
  );
}
}
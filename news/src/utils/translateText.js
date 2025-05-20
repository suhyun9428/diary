import { isQuotaExceeded, incrementRequestCount } from "./limitStore";

export const translateText = async (text) => {
  if (isQuotaExceeded()) {
    console.warn("번역 제한 초과");
    return "번역 제한 초과";
  }

  const apiKey = import.meta.env.VITE_TRANSLATE_API_KEY;

  try {
    const res = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: text,
          target: "ko",
          format: "text",
        }),
      }
    );

    const result = await res.json();
    if (result.data?.translations?.[0]) {
      incrementRequestCount();
      return result.data.translations[0].translatedText;
    } else {
      return "번역 실패";
    }
  } catch (error) {
    console.error("번역 오류:", error);
    return "번역 오류";
  }
};
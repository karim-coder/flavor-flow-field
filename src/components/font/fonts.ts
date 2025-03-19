// fonts.js - Create this file to manage font loading
export const loadFont = async (fontPath, fontFamily) => {
  if (typeof window === "undefined") return false;

  try {
    // Check if font is already loaded
    if (document.fonts.check(`1em "${fontFamily}"`)) {
      return true;
    }

    const fontFace = new FontFace(fontFamily, `url(${fontPath})`);
    const loadedFont = await fontFace.load();
    document.fonts.add(loadedFont);
    return true;
  } catch (error) {
    console.error("Failed to load font:", error);
    return false;
  }
};

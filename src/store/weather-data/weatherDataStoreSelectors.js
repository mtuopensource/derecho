const getDetails = (store) => store.weatherDataStore.details;

const getCurrently = (store) => getDetails(store).currently;

export const getTime = (store) => getCurrently(store).time;
export const getCurrentSummary = (store) => getCurrently(store).summary;
export const getCurrentPrecipIntensity = (store) => getCurrently(store).precipIntensity;
export const getCurrentPrecipProbability = (store) => getCurrently(store).precipProbability;
export const getCurrentPrecipType = (store) => getCurrently(store).preicipType;
export const getCurrentTemp = (store) => getCurrently(store).temperature;
export const getCurrentFeel = (store) => getCurrently(store).apparentTempurature;
export const getCurrentWindSpeed = (store) => getCurrently(store).windSpeed;
export const getCurrentWindBearing = (store) => getCurrently(store).windBearing;
export const getCurrentCloudCover = (store) => getCurrently(store).cloudCover;


export default {
 transform: {
   "^.+\\.(js|ts|jsx|tsx)$": "@babel/jest"
 },
 testEnvironment: "jsdom",
 moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
};
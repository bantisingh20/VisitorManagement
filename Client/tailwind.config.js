// // tailwind.config.js
// module.exports = {
//   content: [
//     "./src/**/*.{html,js,jsx,ts,tsx}", // make sure your paths are correct
//   ],
//   theme: {
//     extend: {
//       colors: {
//         orange: '#FF8C00', // Custom Orange
//         green: '#10B981',  // Custom Green
//         skyblue: '#00BFFF', // Custom Sky Blue
//         lightred: '#FF6347', // Custom Light Red
//         yellow: '#FFD700', 
//         gray: {
//           100: '#f5f5f5',  // Light Gray
//           200: '#e0e0e0',  // Slightly darker Gray
//           500: '#9e9e9e',  // Medium Gray
//         },
//       },
//     },
//   },
//   plugins: [],
// }


module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // make sure your paths are correct
  ],
  theme: {
    extend: {
      colors: {
        // Custom Colors
        orange: {
          DEFAULT: '#FF8C00', // Default Orange
          50: '#FFE1A1', // Light Orange
          100: '#FFB64D', // Lighter Orange
          200: '#FF8C00', // Custom Orange
          300: '#E77B00', // Slightly Darker Orange
          400: '#BF6A00', // Darker Orange
          500: '#A45E00', // Even Darker Orange
        },
        green: {
          DEFAULT: '#10B981',  // Custom Green
          50: '#A7F3D0', // Light Green
          100: '#6EE7B7', // Lighter Green
          200: '#34D399', // Custom Green
          300: '#2D9A77', // Darker Green
          400: '#1F6A53', // Even Darker Green
        },
        skyblue: {
          DEFAULT: '#00BFFF', // Custom Sky Blue
          50: '#80E0FF', // Light Sky Blue
          100: '#66D2FF', // Lighter Sky Blue
          200: '#00BFFF', // Custom Sky Blue
          300: '#0099CC', // Darker Sky Blue
          400: '#007A99', // Even Darker Sky Blue
        },
        lightred: {
          DEFAULT: '#FF6347', // Custom Light Red
          50: '#FFB3A4', // Light Red
          100: '#FF9A8F', // Lighter Red
          200: '#FF6347', // Custom Light Red
          300: '#E54D3B', // Darker Red
          400: '#C9442E', // Even Darker Red
        },
        yellow: {
          DEFAULT: '#FFD700', // Custom Yellow
          50: '#FFF3B0', // Light Yellow
          100: '#FFE266', // Lighter Yellow
          200: '#FFD700', // Custom Yellow
          300: '#F7CC00', // Darker Yellow
          400: '#D89E00', // Even Darker Yellow
        },
        gray: {
          50: '#f5f5f5',  // Light Gray
          100: '#e0e0e0',  // Slightly darker Gray
          200: '#d0d0d0',  // Even Darker Gray
          300: '#b0b0b0',  // Medium Gray
          400: '#9e9e9e',  // Default Gray
          500: '#757575',  // Dark Gray
          600: '#616161',  // Darker Gray
        },
        // Define Primary, Secondary, and Tertiary Colors
        primary: '#FF8C00',   // Custom Orange
        secondary: '#10B981', // Custom Green
        tertiary: '#00BFFF',  // Custom Sky Blue
      },
    },
  },
  plugins: [],
}

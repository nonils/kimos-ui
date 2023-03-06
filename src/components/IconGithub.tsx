// import * as React from 'react';
// import Svg, { Image } from 'react-native-svg';
//
// export default function IconGithub(props: any) {
//   return (
//     <Svg
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       tabIndex="-1"
//       {...props}
//     >
//       <Image
//         tabIndex="-1"
//         width="24"
//         height="24"
//         //@ts-ignore
//         xlinkHref="data:image/png;base64,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"
//       />
//     </Svg>
//   );
// }

export {};

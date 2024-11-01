declare module "@sanity/image-url" {
  import { SanityImageSource } from "@sanity/image-url/lib/types/types";

  export default function createImageUrlBuilder(config: {
    projectId: string;
    dataset: string;
  }): {
    image: (source: SanityImageSource) => {
      url: () => string;
    };
  };
}

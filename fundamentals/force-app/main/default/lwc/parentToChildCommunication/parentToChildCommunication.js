import { LightningElement } from "lwc";

export default class ParentToChildCommunication extends LightningElement {
  carouselData = [
    {
      src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
      header: "First Card Header",
      description: "First card description."
    },
    {
      src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
      header: "Second Card Header",
      description: "Second card description."
    },
    {
      src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
      header: "Third Card Header",
      description: "Third card description."
    }
  ];
}

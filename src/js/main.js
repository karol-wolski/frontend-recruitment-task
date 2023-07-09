import { createCard } from "./card";

const init = () => {
  const obj = {
    title: "Lorem Ipsum",
    desc: "Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required.",
    img: "sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_16_9,c_fill,g_auto__c_scale,w_596.jpg",
    imgAltText: "This is a sunset landscape.",
  };
  createCard(1, obj);
  createCard(2, obj);
};

init();

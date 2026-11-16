import categoryData from "./category.json";

export const siteData = categoryData;
export const categories = siteData.collection.products;

export type {
  AboutFeature,
  Category,
  CategoryData,
  ContactMethod,
  FaqItem,
  GalleryImage,
  HeroSlide,
  NavigationItem,
  SocialLink,
  Testimonial,
  WhyBenefit,
} from "@/types/category";

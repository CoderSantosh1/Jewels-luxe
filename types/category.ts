export type CategoryData = typeof import("../data/category.json");

export type Category = CategoryData["collection"]["products"][number];
export type NavigationItem = CategoryData["navigation"][number];
export type HeroSlide = CategoryData["hero"]["slides"][number];
export type AboutFeature = CategoryData["about"]["features"][number];
export type WhyBenefit = CategoryData["whyChooseUs"]["benefits"][number];
export type GalleryImage = CategoryData["gallery"]["images"][number];
export type Testimonial = CategoryData["testimonials"]["items"][number];
export type FaqItem = CategoryData["faq"]["items"][number];
export type SocialLink = CategoryData["footer"]["socialLinks"][number];
export type ContactMethod = CategoryData["contact"]["methods"][number];

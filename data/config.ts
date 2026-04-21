export type Locale = "ar" | "en";

export const advisors = [
  { name: { ar: "رشاد صوفان", en: "Rashad Soufan" }, whatsapp: "https://wa.me/601114326187" },
  { name: { ar: "أبوبكر باوزير", en: "Abubakar Bawazir" }, whatsapp: "https://wa.me/601112599206" }
];

export type Product = {
  id: string;
  brand: string;
  model: string;
  majorFit: string[];
  cpu: string;
  ram: number;
  storage: string;
  gpu: string;
  battery: number;
  portability: number;
  display: number;
  price: number;
  image: string;
  buyLink: string;
};

export const products: Product[] = [
  { id: "macbook-air-m3", brand: "Apple", model: "MacBook Air 13 M3", majorFit: ["business", "cs"], cpu: "Apple M3", ram: 16, storage: "512GB SSD", gpu: "Integrated 10-core GPU", battery: 10, portability: 10, display: 9, price: 5499, image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8", buyLink: "https://www.apple.com/my/macbook-air/" },
  { id: "macbook-pro-m4", brand: "Apple", model: "MacBook Pro 14 M4", majorFit: ["design", "cs"], cpu: "Apple M4", ram: 18, storage: "512GB SSD", gpu: "Integrated 10-core GPU", battery: 9, portability: 8, display: 10, price: 7999, image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef", buyLink: "https://www.apple.com/my/macbook-pro/" },
  { id: "asus-zenbook-14", brand: "ASUS", model: "Zenbook 14 OLED", majorFit: ["business", "design"], cpu: "Intel Core Ultra 7", ram: 16, storage: "1TB SSD", gpu: "Intel Arc", battery: 8, portability: 9, display: 10, price: 5299, image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef", buyLink: "https://www.asus.com/my/laptops/for-home/zenbook/" },
  { id: "asus-rog-g14", brand: "ASUS", model: "ROG Zephyrus G14", majorFit: ["design", "cs"], cpu: "AMD Ryzen 9", ram: 32, storage: "1TB SSD", gpu: "NVIDIA RTX 4060", battery: 7, portability: 8, display: 9, price: 8999, image: "https://images.unsplash.com/photo-1593640408182-31c228cde1c2", buyLink: "https://rog.asus.com/my/laptops/rog-zephyrus/" },
  { id: "dell-xps-14", brand: "Dell", model: "XPS 14", majorFit: ["design", "business"], cpu: "Intel Core Ultra 7", ram: 16, storage: "1TB SSD", gpu: "RTX 4050", battery: 8, portability: 8, display: 10, price: 8999, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853", buyLink: "https://www.dell.com/en-my/shop/laptops-and-2-in-1-pcs/sf/xps-laptops" },
  { id: "dell-inspiron-14", brand: "Dell", model: "Inspiron 14", majorFit: ["business", "general"], cpu: "Intel Core i7", ram: 16, storage: "512GB SSD", gpu: "Intel Iris Xe", battery: 7, portability: 8, display: 8, price: 3899, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed", buyLink: "https://www.dell.com/en-my/shop/inspiron-laptops/sr/laptops/inspiron-laptops" },
  { id: "huawei-matebook-14", brand: "Huawei", model: "MateBook 14", majorFit: ["business", "cs"], cpu: "Intel Core Ultra 5", ram: 16, storage: "1TB SSD", gpu: "Intel Arc", battery: 8, portability: 9, display: 9, price: 4599, image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2", buyLink: "https://consumer.huawei.com/my/laptops/" },
  { id: "lenovo-yoga-7", brand: "Lenovo", model: "Yoga 7 14", majorFit: ["business", "design"], cpu: "AMD Ryzen 7", ram: 16, storage: "1TB SSD", gpu: "Radeon 780M", battery: 8, portability: 9, display: 9, price: 4699, image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9", buyLink: "https://www.lenovo.com/my/en/laptops/yoga/" },
  { id: "lenovo-legion-5", brand: "Lenovo", model: "Legion 5", majorFit: ["cs", "design"], cpu: "AMD Ryzen 7", ram: 16, storage: "1TB SSD", gpu: "RTX 4060", battery: 6, portability: 6, display: 9, price: 6599, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302", buyLink: "https://www.lenovo.com/my/en/laptops/legion/" },
  { id: "hp-spectre-x360", brand: "HP", model: "Spectre x360 14", majorFit: ["business", "design"], cpu: "Intel Core Ultra 7", ram: 16, storage: "1TB SSD", gpu: "Intel Arc", battery: 8, portability: 9, display: 10, price: 6999, image: "https://images.unsplash.com/photo-1504707748692-419802cf939d", buyLink: "https://www.hp.com/my-en/shop/laptops-tablets/personal-laptops/spectre.html" },
  { id: "hp-victus-15", brand: "HP", model: "Victus 15", majorFit: ["cs", "design"], cpu: "Intel Core i7", ram: 16, storage: "512GB SSD", gpu: "RTX 4050", battery: 6, portability: 7, display: 8, price: 4899, image: "https://images.unsplash.com/photo-1518770660439-4636190af475", buyLink: "https://www.hp.com/my-en/shop/laptops-tablets/personal-laptops/victus.html" },
  { id: "acer-swift-go", brand: "Acer", model: "Swift Go 14", majorFit: ["business", "general"], cpu: "Intel Core Ultra 7", ram: 16, storage: "1TB SSD", gpu: "Intel Arc", battery: 8, portability: 9, display: 9, price: 4299, image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28", buyLink: "https://www.acer.com/my-en/laptops/swift" },
  { id: "acer-predator-helios", brand: "Acer", model: "Predator Helios Neo", majorFit: ["cs", "design"], cpu: "Intel Core i9", ram: 16, storage: "1TB SSD", gpu: "RTX 4060", battery: 6, portability: 6, display: 9, price: 7299, image: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5", buyLink: "https://www.acer.com/my-en/predator/laptops/helios" }
];

export const soundConfig = {
  start: { frequency: 523.25, duration: 0.12 },
  select: { frequency: 659.25, duration: 0.08 },
  finish: { frequency: 783.99, duration: 0.18 }
} as const;

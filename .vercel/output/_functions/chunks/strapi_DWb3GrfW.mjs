const STRAPI_URL = "http://localhost:1337";
const STRAPI_TOKEN = "54f9c0fcc6057e3edd55aa1f595f6599f72968c857f2b87c91ec1305d5ac3e1f6c70b7fbdea759cb7ec2a5a6cdf35c4e9d1eda50b1fc1935341844fee2796811d031a881e6e86160279c68dd4ac2221117d23a96eb2c7cc62b5990f5bc01bb70fa7b80043d84a6045c0c2b117648a3040c5aa0929427e269e19e31778e328445";
{
  console.warn("⚠️ Strapi URL not configured. Please set STRAPI_URL environment variable.");
}
class StrapiService {
  baseURL;
  token;
  constructor(baseURL = STRAPI_URL, token = STRAPI_TOKEN) {
    this.baseURL = baseURL;
    this.token = token;
  }
  getHeaders() {
    const headers = {
      "Content-Type": "application/json"
    };
    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }
    return headers;
  }
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}/api${endpoint}`;
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...this.getHeaders(),
          ...options.headers
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Strapi API request failed:", error);
      throw error;
    }
  }
  // Puppy operations
  async getPuppies(options = {}) {
    const params = new URLSearchParams();
    if (options.page) params.append("pagination[page]", options.page.toString());
    if (options.pageSize) params.append("pagination[pageSize]", options.pageSize.toString());
    if (options.populate) params.append("populate", options.populate);
    if (options.sort) params.append("sort", options.sort);
    if (options.filters) {
      Object.entries(options.filters).forEach(([key, value]) => {
        if (value !== void 0 && value !== null) {
          params.append(`filters[${key}][$eq]`, value.toString());
        }
      });
    }
    const queryString = params.toString();
    const endpoint = `/puppies${queryString ? `?${queryString}` : ""}`;
    return this.request(endpoint);
  }
  async getPuppy(id, populate = "*") {
    return this.request(`/puppies/${id}?populate=${populate}`);
  }
  async getAvailablePuppies() {
    return this.getPuppies({
      filters: { status: "Available" },
      populate: "images",
      sort: "createdAt:desc"
    });
  }
  // Stud operations
  async getStuds(options = {}) {
    const params = new URLSearchParams();
    if (options.page) params.append("pagination[page]", options.page.toString());
    if (options.pageSize) params.append("pagination[pageSize]", options.pageSize.toString());
    if (options.populate) params.append("populate", options.populate);
    if (options.sort) params.append("sort", options.sort);
    if (options.filters) {
      Object.entries(options.filters).forEach(([key, value]) => {
        if (value !== void 0 && value !== null) {
          params.append(`filters[${key}][$eq]`, value.toString());
        }
      });
    }
    const queryString = params.toString();
    const endpoint = `/studs${queryString ? `?${queryString}` : ""}`;
    return this.request(endpoint);
  }
  async getStud(id, populate = "*") {
    return this.request(`/studs/${id}?populate=${populate}`);
  }
  async getAvailableStuds() {
    return this.getStuds({
      filters: { status: "Available" },
      populate: "images",
      sort: "createdAt:desc"
    });
  }
  // Homepage operations
  async getHomepageContent() {
    return this.request("/homepage?populate=*");
  }
  // Enhanced utility methods with better error handling
  getImageUrl(image, size = "medium") {
    if (!image) {
      return this.getPlaceholderImage();
    }
    try {
      if (image.formats && image.formats[size]) {
        return `${this.baseURL}${image.formats[size].url}`;
      }
      return `${this.baseURL}${image.url}`;
    } catch (error) {
      console.warn("Error getting image URL:", error);
      return this.getPlaceholderImage();
    }
  }
  // Generate placeholder image URLs
  getPlaceholderImage(width = 400, height = 300) {
    return `https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=${width}&h=${height}&fit=crop&auto=format&q=80`;
  }
  // Get optimized image with srcset for different screen sizes
  getImageSrcSet(image) {
    if (!image || !image.formats) {
      return "";
    }
    const srcSet = [];
    if (image.formats.thumbnail) {
      srcSet.push(`${this.baseURL}${image.formats.thumbnail.url} 156w`);
    }
    if (image.formats.small) {
      srcSet.push(`${this.baseURL}${image.formats.small.url} 500w`);
    }
    if (image.formats.medium) {
      srcSet.push(`${this.baseURL}${image.formats.medium.url} 750w`);
    }
    if (image.formats.large) {
      srcSet.push(`${this.baseURL}${image.formats.large.url} 1000w`);
    }
    return srcSet.join(", ");
  }
  // Get image alt text with fallback
  getImageAlt(image, fallback = "") {
    if (!image) return fallback;
    return image.alternativeText || image.caption || fallback;
  }
  formatPrice(price) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0
    }).format(price);
  }
  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  // Utility to check if data is available
  isDataAvailable() {
    return Boolean(this.baseURL && this.baseURL !== "http://localhost:1337") || false;
  }
}
const strapiService = new StrapiService();
const getPuppies = (options) => strapiService.getPuppies(options);
const getStuds = (options) => strapiService.getStuds(options);
const getHomepageContent = () => strapiService.getHomepageContent();
const getImageUrl = (image, size) => strapiService.getImageUrl(image, size);
const formatPrice = (price) => strapiService.formatPrice(price);
const formatDate = (dateString) => strapiService.formatDate(dateString);

export { formatDate as a, getImageUrl as b, getStuds as c, getHomepageContent as d, formatPrice as f, getPuppies as g };

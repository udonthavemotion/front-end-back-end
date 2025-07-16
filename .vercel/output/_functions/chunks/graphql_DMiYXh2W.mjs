const STRAPI_URL = "http://localhost:1337";
const STRAPI_TOKEN = "54f9c0fcc6057e3edd55aa1f595f6599f72968c857f2b87c91ec1305d5ac3e1f6c70b7fbdea759cb7ec2a5a6cdf35c4e9d1eda50b1fc1935341844fee2796811d031a881e6e86160279c68dd4ac2221117d23a96eb2c7cc62b5990f5bc01bb70fa7b80043d84a6045c0c2b117648a3040c5aa0929427e269e19e31778e328445";
class GraphQLClient {
  endpoint;
  token;
  constructor(endpoint = `${STRAPI_URL}/graphql`, token = STRAPI_TOKEN) {
    this.endpoint = endpoint;
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
  async query(query, variables = {}) {
    try {
      const response = await fetch(this.endpoint, {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify({
          query,
          variables
        })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      if (result.errors) {
        throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
      }
      return result.data;
    } catch (error) {
      console.error("GraphQL request failed:", error);
      throw error;
    }
  }
  async introspectSchema() {
    const introspectionQuery = `
      query IntrospectionQuery {
        __schema {
          queryType {
            name
            fields {
              name
              type {
                name
                kind
              }
              args {
                name
                type {
                  name
                  kind
                }
              }
            }
          }
        }
      }
    `;
    return this.query(introspectionQuery);
  }
}
const graphqlClient = new GraphQLClient();
const STUDS_QUERY = `
  query GetStuds {
    studs {
      documentId
      name
      age
      status
      fee
      description
      bloodlines
      specialties
      createdAt
      updatedAt
      publishedAt
    }
  }
`;
const PUPPIES_QUERY = `
  query GetPuppies {
    puppies {
      documentId
      name
      status
      date_of_birth
      price
      gender
      color
      weight
      description
      parents
      healthrecords
      createdAt
      updatedAt
      publishedAt
    }
  }
`;
async function getStuds() {
  try {
    const result = await graphqlClient.query(STUDS_QUERY);
    return {
      data: result.studs || [],
      meta: { pagination: { total: result.studs?.length || 0 } }
    };
  } catch (error) {
    console.error("Failed to fetch studs:", error);
    return {
      data: [],
      meta: { pagination: { total: 0 } }
    };
  }
}
async function getAvailableStuds() {
  const result = await getStuds();
  const availableStuds = result.data.filter((stud) => stud.availability === "Available");
  return {
    data: availableStuds,
    meta: { pagination: { total: availableStuds.length } }
  };
}
async function getPuppies() {
  try {
    const result = await graphqlClient.query(PUPPIES_QUERY);
    return {
      data: result.puppies || [],
      meta: { pagination: { total: result.puppies?.length || 0 } }
    };
  } catch (error) {
    console.error("Failed to fetch puppies:", error);
    return {
      data: [],
      meta: { pagination: { total: 0 } }
    };
  }
}
function getImageUrl(image, size = "medium") {
  if (image.formats && image.formats[size]) {
    return `${STRAPI_URL}${image.formats[size].url}`;
  }
  return `${STRAPI_URL}${image.url}`;
}
function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(price);
}
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
async function introspectSchema() {
  return graphqlClient.introspectSchema();
}

export { getStuds as a, getImageUrl as b, formatPrice as c, getAvailableStuds as d, formatDate as f, getPuppies as g, introspectSchema as i };

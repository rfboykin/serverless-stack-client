const dev = {
  STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-serverlessdeploymentbucket-sqk3s94z7xnt"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://notes-api.rboyk.in/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_qP0Q8DUNj",
    APP_CLIENT_ID: "55tutoqprkql3f9jkm73hdpjri",
    IDENTITY_POOL_ID: "us-east-1:45ecfea8-4049-4e72-832f-c6f78976b89d"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-14eo9qkny2c62"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://notes-api.rboyk.in/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_xmlavAtL2",
    APP_CLIENT_ID: "1p5n3mfimrc8acel47rugs99k1",
    IDENTITY_POOL_ID: "us-east-1:f888c3be-35cc-4f64-bbbc-b0dfe0c140aa"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};

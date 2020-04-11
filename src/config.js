const dev = {
  STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-rboykin-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://v1s71e3vxd.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_IvPyY3Ja5",
    APP_CLIENT_ID: "9qq0pd8c60er4cq06demhc0it",
    IDENTITY_POOL_ID: "us-east-1:43b87d69-8136-4f26-ae19-5a963da70f07"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-rboykin-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://v1s71e3vxd.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_IvPyY3Ja5",
    APP_CLIENT_ID: "9qq0pd8c60er4cq06demhc0it",
    IDENTITY_POOL_ID: "us-east-1:43b87d69-8136-4f26-ae19-5a963da70f07"
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

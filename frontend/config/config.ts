const Config = {
  apiServer: process.env.NEXT_PUBLIC_BACKEND_ORIGIN || 'http://46.202.129.20:8002',

  // set 'NEXT_PUBLIC_IS_DEMO=true' in frontend/.env
  isDemoSite: process.env.NEXT_PUBLIC_IS_DEMO === 'true' || false,
};

export default Config;

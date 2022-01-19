// Window sessionStorage
export const window = {
   sessionStorage: {
      data: {},
      setItem: jest.fn((key, value) => {
         this.data[key] = value;
      }),
      getItem: jest.fn((key) => {
         return key in this.data ? this.data[key] : null;
      }),
   },
};

// Fetch function
export const fetchedValue = { data: 'Successfully fetched' };
export const fetchOK = jest.fn((url) => {
   return Promise.resolve({
      ok: true,
      json() {
         return Promise.resolve(fetchedValue);
      },
   });
});
export const fetchERROR = jest.fn((url) => {
   return Promise.resolve({
      ok: false,
   });
});

// Console
export const console = {
   log: jest.fn(),
   error: jest.fn(),
};

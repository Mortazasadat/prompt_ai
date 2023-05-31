/** @format */
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompt",
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
          <Nav />
          <main className='flex flex-col items-center justify-center px-6 mx-auto  realtive max-w-7xl sm:px-16'>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
